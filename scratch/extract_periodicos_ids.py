import os, sys, shutil, sqlite3, json

sys.stdout.reconfigure(encoding='utf-8')

APPDATA = os.environ.get('LOCALAPPDATA', '')
DRIVEFS_ROOT = os.path.join(APPDATA, 'Google', 'DriveFS')
account_folder = next(
    (os.path.join(DRIVEFS_ROOT, n) for n in os.listdir(DRIVEFS_ROOT)
     if n.isdigit() and os.path.isdir(os.path.join(DRIVEFS_ROOT, n))),
    None
)

if not account_folder:
    print("DriveFS no encontrado")
    sys.exit(1)

DB_SRC  = os.path.join(account_folder, 'metadata_sqlite_db')
DB_COPY = os.path.join(os.path.dirname(__file__), 'drive_meta_copy_periodicos.db')
shutil.copy2(DB_SRC, DB_COPY)
conn = sqlite3.connect(DB_COPY)
c = conn.cursor()

# Buscar la carpeta 05_PERIODICOS
c.execute("""
    SELECT stable_id, id, local_title 
    FROM items 
    WHERE local_title = '05_PERIODICOS' AND is_folder = 1
""")
folder = c.fetchone()

if not folder:
    print("Carpeta 05_PERIODICOS no encontrada en Drive FS")
    sys.exit(1)

FOLDER_STABLE_ID = folder[0]
FOLDER_CLOUD_ID = folder[1]

print(f"Encontrada carpeta: {folder[2]} (stable_id={FOLDER_STABLE_ID}, cloud_id={FOLDER_CLOUD_ID})")

c.execute("""
    SELECT i.stable_id, i.id, i.local_title, i.mime_type, i.is_folder
    FROM items i
    JOIN stable_parents sp ON i.stable_id = sp.item_stable_id
    WHERE sp.parent_stable_id = ?
    ORDER BY i.local_title
""", (FOLDER_STABLE_ID,))
children = c.fetchall()

print(f"Archivos encontrados: {len(children)}")
results = {}
for row in children:
    stable_id, cloud_id, title, mime, is_folder = row
    if not is_folder:
        results[title] = cloud_id

conn.close()
if os.path.exists(DB_COPY):
    os.remove(DB_COPY)

out_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'periodicos_ids.json')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"Total archivos procesados: {len(results)} | JSON guardado en: {out_path}")
