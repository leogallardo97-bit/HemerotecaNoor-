"""
get_contenido_web_ids.py
Obtiene los IDs individuales de los archivos de 04_CONTENIDO_WEB
usando la carpeta correcta (stable_id=15932, drive_id=18Fod8n8noj6aEUZG_JlJsr19kHk6iaxQ)
"""
import os, sys, shutil, sqlite3, json

sys.stdout.reconfigure(encoding='utf-8')

APPDATA = os.environ.get('LOCALAPPDATA', '')
DRIVEFS_ROOT = os.path.join(APPDATA, 'Google', 'DriveFS')
account_folder = next(
    (os.path.join(DRIVEFS_ROOT, n) for n in os.listdir(DRIVEFS_ROOT)
     if n.isdigit() and os.path.isdir(os.path.join(DRIVEFS_ROOT, n))),
    None
)
DB_SRC  = os.path.join(account_folder, 'metadata_sqlite_db')
DB_COPY = os.path.join(os.path.dirname(__file__), 'drive_meta_copy.db')
shutil.copy2(DB_SRC, DB_COPY)
conn = sqlite3.connect(DB_COPY)
c = conn.cursor()

FOLDER_STABLE_ID   = 15932
FOLDER_CLOUD_ID    = '18Fod8n8noj6aEUZG_JlJsr19kHk6iaxQ'

print(f"=== ARCHIVOS DENTRO DE 04_CONTENIDO_WEB (stable_id={FOLDER_STABLE_ID}) ===")
c.execute("""
    SELECT i.stable_id, i.id, i.local_title, i.mime_type, i.is_folder
    FROM items i
    JOIN stable_parents sp ON i.stable_id = sp.item_stable_id
    WHERE sp.parent_stable_id = ?
    ORDER BY i.local_title
""", (FOLDER_STABLE_ID,))
children = c.fetchall()
print(f"Hijos directos: {len(children)}")
results = {}
for row in children:
    stable_id, cloud_id, title, mime, is_folder = row
    flag = "[DIR]" if is_folder else "[FILE]"
    print(f"  {flag} {title:70s} | id={cloud_id}")
    if not is_folder:
        results[title] = cloud_id

conn.close()
if os.path.exists(DB_COPY):
    os.remove(DB_COPY)

out_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'contenido_web_ids.json')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
print(f"\nTotal: {len(results)} | Guardado en: {out_path}")
