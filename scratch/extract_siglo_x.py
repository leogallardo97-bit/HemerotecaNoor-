"""
EXTRACTOR - ANÁLISIS BIBLIOGRÁFICO SIGLO X
Fuentes:
  - Siglo X Scopus 2026
  - Siglo X WoS 2026 (alias: Siglo X Wos 2026)
  - 01_Siglos_X_al_XII  (sólo documentos explícitamente del Siglo X)

Estrategia: DriveFS SQLite local (sin OAuth)
"""
import os, sys, shutil, sqlite3, json, re

sys.stdout.reconfigure(encoding='utf-8')

APPDATA = os.environ.get('LOCALAPPDATA', '')
DRIVEFS_ROOT = os.path.join(APPDATA, 'Google', 'DriveFS')

# Localizar carpeta de cuenta DriveFS
account_folder = next(
    (os.path.join(DRIVEFS_ROOT, n) for n in os.listdir(DRIVEFS_ROOT)
     if n.isdigit() and os.path.isdir(os.path.join(DRIVEFS_ROOT, n))),
    None
)

if not account_folder:
    print("ERROR: DriveFS no encontrado")
    sys.exit(1)

DB_SRC  = os.path.join(account_folder, 'metadata_sqlite_db')
DB_COPY = os.path.join(os.path.dirname(__file__), 'drive_meta_siglo_x.db')
shutil.copy2(DB_SRC, DB_COPY)
print(f"DB copiada: {DB_COPY}")

conn = sqlite3.connect(DB_COPY)
c = conn.cursor()

# ────────────────────────────────────────────────
# 1. Localizar la carpeta raíz del Análisis Bibliográfico
#    (ID proporcionado: 1C8yQTViMYmOX6Z532p0-GpaRs9wKGYTn)
# ────────────────────────────────────────────────
ROOT_CLOUD_ID = '1C8yQTViMYmOX6Z532p0-GpaRs9wKGYTn'

c.execute("SELECT stable_id, id, local_title FROM items WHERE id = ?", (ROOT_CLOUD_ID,))
root_row = c.fetchone()

if root_row:
    ROOT_STABLE_ID = root_row[0]
    print(f"\nCarpeta raíz encontrada: '{root_row[2]}' (stable_id={ROOT_STABLE_ID})")
else:
    print(f"\nRaíz no encontrada por cloud_id. Buscando por nombre…")
    # Fallback: buscar por nombre
    c.execute("SELECT stable_id, id, local_title FROM items WHERE local_title LIKE '%Bibliogr%' AND is_folder=1")
    candidates = c.fetchall()
    for row in candidates:
        print(f"  Candidato: {row[2]} (stable_id={row[0]}, id={row[1]})")
    ROOT_STABLE_ID = None

# ────────────────────────────────────────────────
# 2. Listar hijos directos de la raíz (subcarpetas del Siglo X)
# ────────────────────────────────────────────────
TARGET_FOLDER_PATTERNS = [
    'siglo x scopus',
    'siglo x wos',
    'siglos_x_al_xii',
    'siglos x al xii',
    '01_siglos',
    'siglo x',
]

def find_siglo_x_folders(parent_stable_id):
    """Devuelve lista de (stable_id, cloud_id, title) de subcarpetas Siglo X."""
    c.execute("""
        SELECT i.stable_id, i.id, i.local_title
        FROM items i
        JOIN stable_parents sp ON i.stable_id = sp.item_stable_id
        WHERE sp.parent_stable_id = ? AND i.is_folder = 1
        ORDER BY i.local_title
    """, (parent_stable_id,))
    folders = c.fetchall()
    results = []
    for row in folders:
        title_lower = row[2].lower()
        if any(pat in title_lower for pat in TARGET_FOLDER_PATTERNS):
            results.append(row)
            print(f"  ✓ Subcarpeta Siglo X: '{row[2]}' (id={row[1]})")
        else:
            print(f"  - Subcarpeta: '{row[2]}' (id={row[1]})")
    return results

# ────────────────────────────────────────────────
# 3. Extraer PDFs recursivamente de una carpeta
# ────────────────────────────────────────────────
def get_children(parent_stable_id, depth=0):
    c.execute("""
        SELECT i.stable_id, i.id, i.local_title, i.mime_type, i.is_folder
        FROM items i
        JOIN stable_parents sp ON i.stable_id = sp.item_stable_id
        WHERE sp.parent_stable_id = ?
        ORDER BY i.local_title
    """, (parent_stable_id,))
    return c.fetchall()

def collect_pdfs(parent_stable_id, source_label, depth=0):
    """Recursivamente recoge todos los PDFs de una carpeta y sus hijos."""
    pdfs = []
    children = get_children(parent_stable_id)
    for row in children:
        stable_id, cloud_id, title, mime, is_folder = row
        if is_folder:
            # Recurse
            sub = collect_pdfs(stable_id, source_label, depth+1)
            pdfs.extend(sub)
        else:
            # Sólo PDFs
            if mime and 'pdf' in mime.lower():
                pdfs.append({
                    'cloud_id': cloud_id,
                    'title': title,
                    'source': source_label
                })
            elif title and title.lower().endswith('.pdf'):
                pdfs.append({
                    'cloud_id': cloud_id,
                    'title': title,
                    'source': source_label
                })
    return pdfs

# ────────────────────────────────────────────────
# 4. BÚSQUEDA DIRECTA por nombre si la carpeta raíz no está en DriveFS local
# ────────────────────────────────────────────────
def search_by_name(name_pattern):
    c.execute("""
        SELECT stable_id, id, local_title 
        FROM items 
        WHERE local_title LIKE ? AND is_folder = 1
        LIMIT 10
    """, (f'%{name_pattern}%',))
    return c.fetchall()

print("\n═══ BUSCANDO CARPETAS SIGLO X ═══")

all_pdfs = []
folders_found = []

if ROOT_STABLE_ID:
    print(f"\nListando hijos de la carpeta raíz ({ROOT_STABLE_ID}):")
    folders_found = find_siglo_x_folders(ROOT_STABLE_ID)
else:
    # Búsqueda directa por nombre
    print("\nBúsqueda directa por nombre…")
    for pattern in ['Scopus', 'Wos 2026', 'WoS 2026', 'Siglos_X_al_XII', 'Siglos X al']:
        rows = search_by_name(pattern)
        for row in rows:
            print(f"  Encontrado: '{row[2]}' (stable_id={row[0]}, id={row[1]})")
            folders_found.append(row)

# También buscar directamente por nombre independientemente
print("\nBúsqueda complementaria por nombre:")
for pattern in ['Scopus 2026', 'Wos 2026', 'WoS 2026', 'Siglos_X', 'Siglos X al XII']:
    rows = search_by_name(pattern)
    for row in rows:
        already = any(r[0] == row[0] for r in folders_found)
        if not already:
            print(f"  Nuevo: '{row[2]}' (stable_id={row[0]}, id={row[1]})")
            folders_found.append(row)

print(f"\nTotal carpetas Siglo X encontradas: {len(folders_found)}")

for folder in folders_found:
    stable_id, cloud_id, title = folder
    print(f"\n→ Extrayendo PDFs de: '{title}'")
    pdfs = collect_pdfs(stable_id, title)
    print(f"  PDFs encontrados: {len(pdfs)}")
    all_pdfs.extend(pdfs)

conn.close()
if os.path.exists(DB_COPY):
    os.remove(DB_COPY)

# ────────────────────────────────────────────────
# 5. Guardar resultado
# ────────────────────────────────────────────────
out_path = os.path.join(os.path.dirname(__file__), 'siglo_x_ids.json')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(all_pdfs, f, ensure_ascii=False, indent=2)

print(f"\n═══ RESUMEN ═══")
print(f"Total PDFs del Siglo X: {len(all_pdfs)}")
print(f"JSON guardado en: {out_path}")
if all_pdfs:
    print(f"\nPrimeros 3 registros:")
    for p in all_pdfs[:3]:
        print(f"  [{p['source']}] {p['title']} → {p['cloud_id']}")
