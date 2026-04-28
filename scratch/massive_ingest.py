import os, sys, shutil, sqlite3, json, re

sys.stdout.reconfigure(encoding='utf-8')

# --- CONFIGURATION ---
SECTIONS = {
    '07_CD_VID_Digital': '07_CD VID_Digital',
    '08_CD_VID_Fisico':  '08_Producto_Recetarios',
    '09_CD_AUD_Digital': '09_Tarjetero',
    '10_CD_AUD_Fisico':  '10_Artículos_Imagen',
    '11_MANUSCRITOS':    '11_Sin clasificar'
}

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
DB_COPY = os.path.join(os.path.dirname(__file__), 'drive_meta_massive.db')
shutil.copy2(DB_SRC, DB_COPY)
conn = sqlite3.connect(DB_COPY)
c = conn.cursor()

all_documents = []

for label, drive_folder_name in SECTIONS.items():
    print(f"\nProcesando sección: {label} (Carpeta Drive: {drive_folder_name})")
    
    # Buscar la carpeta
    c.execute("""
        SELECT stable_id, id, local_title 
        FROM items 
        WHERE local_title = ? AND is_folder = 1
    """, (drive_folder_name,))
    folder = c.fetchone()
    
    if not folder:
        print(f"  [!] Carpeta '{drive_folder_name}' no encontrada en Drive FS. Saltando.")
        continue

    FOLDER_STABLE_ID = folder[0]
    FOLDER_CLOUD_ID = folder[1]
    
    # Buscar hijos (recursivo o solo directos?) 
    # El script anterior buscaba hijos directos. Hagámoslo igual por ahora.
    c.execute("""
        SELECT i.stable_id, i.id, i.local_title, i.mime_type, i.is_folder
        FROM items i
        JOIN stable_parents sp ON i.stable_id = sp.item_stable_id
        WHERE sp.parent_stable_id = ?
        ORDER BY i.local_title
    """, (FOLDER_STABLE_ID,))
    children = c.fetchall()
    
    print(f"  Archivos encontrados: {len(children)}")
    
    for row in children:
        stable_id, cloud_id, title, mime, is_folder = row
        if not is_folder:
            # Replicar el modelo de 06
            clean_id = re.sub(r'[^a-zA-Z0-9]', '_', title)
            doc = {
                "id": f"local-{label.lower()}-{clean_id}",
                "driveId": cloud_id,
                "category": label,
                "title": title,
                "year": 2000,
                "type": "book",
                "eraId": "S21",
                "language": "es",
                "source": "Archivo Digital Noor",
                "tags": [label, "Ingesta Masiva"],
                "regions": ["QURTUBA"],
                "coordinates": [37.8847, -4.7791],
                "localPath": f"G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/{drive_folder_name}/{title}",
                "media": {
                    "driveFileId": cloud_id,
                    "pdf": cloud_id,
                    "thumbnail": f"https://drive.google.com/thumbnail?id={cloud_id}&sz=w1000"
                }
            }
            all_documents.append(doc)

conn.close()
if os.path.exists(DB_COPY):
    os.remove(DB_COPY)

print(f"\nTotal documentos generados: {len(all_documents)}")

# --- INJECT INTO local-db.js ---
db_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'js/data/local-db.js')
with open(db_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the end of the documents array (before the last bracket)
# The file ends with:
#     }
#   ]
# };
match = re.search(r'\]\s*\}\s*;\s*$', content)
if not match:
    print("Error: No se pudo encontrar el final del array 'documents' en local-db.js")
    sys.exit(1)

# Generate JSON string for new documents
new_docs_json = ",\n"
for i, doc in enumerate(all_documents):
    json_str = json.dumps(doc, ensure_ascii=False, indent=6)
    new_docs_json += f"    {json_str}"
    if i < len(all_documents) - 1:
        new_docs_json += ",\n"

# Inject
new_content = content[:match.start()] + new_docs_json + "\n  " + content[match.start():]

with open(db_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Ingesta masiva completada. Se añadieron {len(all_documents)} documentos a {db_path}")
