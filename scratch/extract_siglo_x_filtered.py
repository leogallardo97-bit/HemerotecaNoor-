"""
EXTRACTOR FILTRADO - SOLO SIGLO X
Fuentes objetivo:
  1. 'Siglo X Scopus 2026'  → SOLO esta carpeta (Siglo X exacto)
  2. 'Siglo X Wos 2026'     → SOLO esta carpeta (Siglo X exacto)
  3. '01_Siglos_X_al_XII'   → Filtrar SÓLO docs con referencia a "Siglo X" o "S-X" en el nombre
"""
import os, sys, shutil, sqlite3, json, re

sys.stdout.reconfigure(encoding='utf-8')

APPDATA = os.environ.get('LOCALAPPDATA', '')
DRIVEFS_ROOT = os.path.join(APPDATA, 'Google', 'DriveFS')
account_folder = next(
    (os.path.join(DRIVEFS_ROOT, n) for n in os.listdir(DRIVEFS_ROOT)
     if n.isdigit() and os.path.isdir(os.path.join(DRIVEFS_ROOT, n))),
    None
)

if not account_folder:
    print("ERROR: DriveFS no encontrado")
    sys.exit(1)

DB_SRC  = os.path.join(account_folder, 'metadata_sqlite_db')
DB_COPY = os.path.join(os.path.dirname(__file__), 'drive_meta_sx.db')
shutil.copy2(DB_SRC, DB_COPY)

conn = sqlite3.connect(DB_COPY)
c = conn.cursor()

ROOT_CLOUD_ID = '1C8yQTViMYmOX6Z532p0-GpaRs9wKGYTn'
c.execute("SELECT stable_id, id, local_title FROM items WHERE id = ?", (ROOT_CLOUD_ID,))
root_row = c.fetchone()
ROOT_STABLE_ID = root_row[0]
print(f"Carpeta raíz: '{root_row[2]}'")

# Obtener hijos directos de la raíz
c.execute("""
    SELECT i.stable_id, i.id, i.local_title
    FROM items i
    JOIN stable_parents sp ON i.stable_id = sp.item_stable_id
    WHERE sp.parent_stable_id = ? AND i.is_folder = 1
    ORDER BY i.local_title
""", (ROOT_STABLE_ID,))
all_children = c.fetchall()

print(f"\nTodas las subcarpetas de la raíz:")
for row in all_children:
    print(f"  '{row[2]}'  id={row[1]}")

# ────────────────────────────────────────────────
# CARPETAS OBJETIVO (IDs ya conocidos del run anterior)
# ────────────────────────────────────────────────
TARGET_FOLDERS = {
    'Siglo X Scopus 2026':             '1dssOLvVRe1Nzh7_ZCTH3Jrmty7_13Kqb',
    'Siglo X Wos 2026':                '1P7tynC0bCh2xKu_0exiYZG4bnQnqD3uW',
    '01_Siglos_X_al_XII (Andalusí Primigenio)': '1upnhrTj8bmeq5EcVoQ5zE0b-AAUmqINZ',
}

def get_stable_id(cloud_id):
    c.execute("SELECT stable_id FROM items WHERE id = ?", (cloud_id,))
    row = c.fetchone()
    return row[0] if row else None

def collect_pdfs(parent_stable_id):
    c.execute("""
        SELECT i.stable_id, i.id, i.local_title, i.mime_type, i.is_folder
        FROM items i
        JOIN stable_parents sp ON i.stable_id = sp.item_stable_id
        WHERE sp.parent_stable_id = ?
        ORDER BY i.local_title
    """, (parent_stable_id,))
    children = c.fetchall()
    pdfs = []
    for row in children:
        stable_id, cloud_id, title, mime, is_folder = row
        if is_folder:
            pdfs.extend(collect_pdfs(stable_id))
        else:
            if (mime and 'pdf' in mime.lower()) or (title and title.lower().endswith('.pdf')):
                pdfs.append({'cloud_id': cloud_id, 'title': title})
    return pdfs

# ────────────────────────────────────────────────
# SIGLO X EXACT FILTER para 01_Siglos_X_al_XII
# Patrón en el nombre del fichero: S-X_ o _S-X o Siglo X (no XI, XII...)
# ────────────────────────────────────────────────
def is_siglo_x_strict(title):
    """True si el título hace referencia SÓLO al Siglo X (no XI, XII, XIII...)"""
    t = title.upper()
    # Patrón explícito: S-X seguido de NO dígito romano (para excluir XI, XII...)
    if re.search(r'S-X(?!I|V|L|C)', t):
        return True
    if re.search(r'\bSIGLO\s+X\b(?!\s*I)', t):
        return True
    # _X_ o _X. o -X- en el nombre como indicador de siglo
    if re.search(r'[_\-]X[_\-\.]', t):
        return True
    return False

all_results = []

print("\n═══ EXTRAYENDO CARPETAS OBJETIVO ═══\n")

# 1. Siglo X Scopus 2026 → incluir TODO (carpeta dedicada)
folder_name = 'Siglo X Scopus 2026'
stable_id = get_stable_id(TARGET_FOLDERS[folder_name])
if stable_id:
    pdfs = collect_pdfs(stable_id)
    print(f"'{folder_name}': {len(pdfs)} PDFs")
    for p in pdfs:
        p['source'] = 'Scopus 2026'
        p['filter_pass'] = 'carpeta_dedicada'
    all_results.extend(pdfs)
else:
    print(f"WARN: '{folder_name}' no encontrada en DriveFS")

# 2. Siglo X Wos 2026 → incluir TODO (carpeta dedicada)
folder_name = 'Siglo X Wos 2026'
stable_id = get_stable_id(TARGET_FOLDERS[folder_name])
if stable_id:
    pdfs = collect_pdfs(stable_id)
    print(f"'{folder_name}': {len(pdfs)} PDFs")
    for p in pdfs:
        p['source'] = 'WoS 2026'
        p['filter_pass'] = 'carpeta_dedicada'
    all_results.extend(pdfs)
else:
    print(f"WARN: '{folder_name}' no encontrada en DriveFS")

# 3. 01_Siglos_X_al_XII → filtrar SOLO los que tienen S-X en el nombre
folder_name = '01_Siglos_X_al_XII (Andalusí Primigenio)'
stable_id = get_stable_id(TARGET_FOLDERS[folder_name])
if stable_id:
    all_pdfs = collect_pdfs(stable_id)
    siglo_x_only = [p for p in all_pdfs if is_siglo_x_strict(p['title'])]
    others = len(all_pdfs) - len(siglo_x_only)
    print(f"'{folder_name}': total={len(all_pdfs)} → Siglo X={len(siglo_x_only)}, excluidos={others}")
    
    # Mostrar muestra de excluidos para verificación
    excluded = [p for p in all_pdfs if not is_siglo_x_strict(p['title'])]
    print(f"\n  Ejemplo excluidos (primeros 5):")
    for p in excluded[:5]:
        print(f"    {p['title']}")
    print(f"\n  Ejemplo incluidos (primeros 5):")
    for p in siglo_x_only[:5]:
        print(f"    {p['title']}")
    
    for p in siglo_x_only:
        p['source'] = '01_Siglos_X_al_XII'
        p['filter_pass'] = 'nombre_siglo_x'
    all_results.extend(siglo_x_only)
else:
    print(f"WARN: '{folder_name}' no encontrada en DriveFS")

conn.close()
if os.path.exists(DB_COPY):
    os.remove(DB_COPY)

# Guardar
out_path = os.path.join(os.path.dirname(__file__), 'siglo_x_filtered.json')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(all_results, f, ensure_ascii=False, indent=2)

print(f"\n═══ TOTAL FINAL ═══")
print(f"Scopus 2026:          {sum(1 for r in all_results if r['source']=='Scopus 2026')}")
print(f"WoS 2026:             {sum(1 for r in all_results if r['source']=='WoS 2026')}")
print(f"01_Siglos_X_al_XII:   {sum(1 for r in all_results if r['source']=='01_Siglos_X_al_XII')}")
print(f"TOTAL SIGLO X:        {len(all_results)}")
print(f"\nGuardado en: {out_path}")
