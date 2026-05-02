"""
FIX ESTRUCTURA - Actualiza los 152 registros Siglo X al schema correcto del results-grid.js
El grid lee: doc.media.driveFileId, doc.driveId, o doc.media.pdf
Thumbnail: lh3.googleusercontent.com/d/{id}=s1000
PDF click: viewer.js lo maneja con doc.driveId o media.driveFileId
"""
import os, sys, json, re

sys.stdout.reconfigure(encoding='utf-8')

SCRIPT_DIR = os.path.dirname(__file__)
BASE_DIR   = os.path.dirname(SCRIPT_DIR)
DB_PATH    = os.path.join(BASE_DIR, 'js', 'data', 'local-db.js')
BACKUP     = DB_PATH + '.backup_sx_phase1'  # backup limpio original

# ── Leer el archivo con los 152 docs ya añadidos ──
with open(DB_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

print(f"Tamaño actual: {len(content):,} bytes")

# ── Estrategia: reemplazar los campos media de los registros bib-s10 ──
# Patrón de thumbnail incorrecto: drive.google.com/thumbnail?id=...&sz=w400
# Patrón de pdf incorrecto: drive.google.com/file/d/.../view
# CORRECTO según results-grid.js línea 209:
#   thumbUrl = `https://lh3.googleusercontent.com/d/${driveId}=s1000`
# CORRECTO para PDF (viewer.js usa driveId):
#   doc.driveId + doc.media.driveFileId

# Contar registros bibliométricos actuales
bib_count = content.count('"bib-s10-wos-')
print(f"Registros bib-s10 encontrados: {bib_count}")

# Fix 1: Thumbnail URL — cambiar formato a lh3.googleusercontent.com
# Patrón actual: "thumbnail": "https://drive.google.com/thumbnail?id=ID&sz=w400"
# Patrón nuevo: "thumbnail": "https://lh3.googleusercontent.com/d/ID=s1000"
def fix_thumbnail(m):
    drive_id = m.group(1)
    return f'"thumbnail": "https://lh3.googleusercontent.com/d/{drive_id}=s1000"'

content_fixed = re.sub(
    r'"thumbnail":\s*"https://drive\.google\.com/thumbnail\?id=([^&"]+)&sz=w400"',
    fix_thumbnail,
    content
)
thumb_fixes = content.count('drive.google.com/thumbnail') - content_fixed.count('drive.google.com/thumbnail')
print(f"Fix thumbnails aplicados: {thumb_fixes}")

# Fix 2: PDF URL — cambiar /view por /preview (para iframe embed)
# Patrón actual: "pdf": "https://drive.google.com/file/d/ID/view"
# Patrón nuevo:  "pdf": "https://drive.google.com/file/d/ID/preview"
content_fixed2 = content_fixed.replace(
    '/view"\n',
    '/preview"\n'
).replace(
    '/view",\n',
    '/preview",\n'
)
# Más robusto con regex
content_fixed2 = re.sub(
    r'("pdf":\s*"https://drive\.google\.com/file/d/[^"]+)/view"',
    r'\1/preview"',
    content_fixed2
)
pdf_fixes = content.count('/view"') - content_fixed2.count('/view"')
print(f"Fix PDF /view→/preview aplicados: {pdf_fixes}")

# Fix 3: Añadir campo driveId al nivel raíz (que es lo que results-grid.js lee primero)
# El grid busca: doc.media?.driveFileId || doc.driveId || doc.media?.pdf
# Nuestros docs tienen "driveFileId" en raíz — pero el grid busca "media.driveFileId" o "driveId"
# Necesitamos añadir "driveId" al nivel raíz de cada doc bib-s10

def add_drive_id(m):
    """Añade driveId al nivel raíz si no existe"""
    obj = m.group(0)
    if '"driveId"' in obj:
        return obj  # ya tiene driveId
    # Extraer el driveFileId del nivel raíz
    fid_match = re.search(r'"driveFileId":\s*"([^"]+)"', obj)
    if fid_match:
        fid = fid_match.group(1)
        # Insertar driveId después de driveFileId
        obj = obj.replace(
            f'"driveFileId": "{fid}"',
            f'"driveFileId": "{fid}",\n    "driveId": "{fid}"'
        )
    return obj

# Procesar cada objeto bib-s10 individualmente
# Encontrar todos los objetos JSON con id bib-s10-wos-
pattern = re.compile(
    r'\{\s*"id":\s*"bib-s10-wos-[^"]+".+?\n    \}',
    re.DOTALL
)

matches = pattern.findall(content_fixed2)
print(f"Objetos bib-s10 encontrados para fix driveId: {len(matches)}")

content_fixed3 = pattern.sub(add_drive_id, content_fixed2)
driveid_adds = content_fixed3.count('"driveId":') - content_fixed2.count('"driveId":')
print(f"driveId añadidos al nivel raíz: {driveid_adds}")

# ── Backup del estado actual (antes del fix) ──
backup_fix = DB_PATH + '.backup_before_fix'
with open(backup_fix, 'w', encoding='utf-8') as f:
    f.write(content)
print(f"Backup pre-fix: {os.path.basename(backup_fix)}")

# ── Escribir archivo corregido ──
with open(DB_PATH, 'w', encoding='utf-8') as f:
    f.write(content_fixed3)

print(f"\n✓ Fix aplicado. Tamaño nuevo: {len(content_fixed3):,} bytes")

# ── Verificar ejemplo ──
# Buscar primer objeto bib-s10 en el archivo corregido
sample = re.search(r'\{"id":\s*"bib-s10-wos-[^"]+".+?\n    \}', content_fixed3, re.DOTALL)
if sample:
    print(f"\nEjemplo de objeto corregido (primeros 600 chars):")
    print(sample.group(0)[:600])
