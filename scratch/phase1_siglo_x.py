"""
FASE 1 — Siglo X (WoS) → local-db.js APPEND SEGURO
Fuente: carpeta 13B-qaPgIdGNfcXMxqgWkEwqVIBI7egjt (152 PDFs)
eraId: S10 | category: ANALISIS_BIBLIOGRAFICO
PROTOCOLO: NO modifica ningún registro existente. Solo append al final.
"""
import os, sys, shutil, sqlite3, json, re, hashlib

sys.stdout.reconfigure(encoding='utf-8')

SCRIPT_DIR = os.path.dirname(__file__)
BASE_DIR   = os.path.dirname(SCRIPT_DIR)
DB_PATH    = os.path.join(BASE_DIR, 'js', 'data', 'local-db.js')

# ──────────────────────────────────────────
# PASO 1: Extraer IDs desde DriveFS
# ──────────────────────────────────────────
APPDATA = os.environ.get('LOCALAPPDATA', '')
DRIVEFS_ROOT = os.path.join(APPDATA, 'Google', 'DriveFS')
account_folder = next(
    (os.path.join(DRIVEFS_ROOT, n) for n in os.listdir(DRIVEFS_ROOT)
     if n.isdigit() and os.path.isdir(os.path.join(DRIVEFS_ROOT, n))), None)
DB_SRC  = os.path.join(account_folder, 'metadata_sqlite_db')
DB_COPY = os.path.join(SCRIPT_DIR, 'tmp_sx_phase1.db')
shutil.copy2(DB_SRC, DB_COPY)
print("[1/5] DriveFS DB copiada.")

conn = sqlite3.connect(DB_COPY)
c = conn.cursor()

FOLDER_ID = '13B-qaPgIdGNfcXMxqgWkEwqVIBI7egjt'
c.execute('SELECT stable_id FROM items WHERE id = ?', (FOLDER_ID,))
row = c.fetchone()
if not row:
    print("ERROR: Carpeta no encontrada en DriveFS")
    conn.close(); os.remove(DB_COPY); sys.exit(1)

stable_id = row[0]
c.execute('''
    SELECT i.id, i.local_title
    FROM items i JOIN stable_parents sp ON i.stable_id = sp.item_stable_id
    WHERE sp.parent_stable_id = ? AND (i.is_folder IS NULL OR i.is_folder = 0)
    ORDER BY i.local_title
''', (stable_id,))
raw_files = c.fetchall()
conn.close()
os.remove(DB_COPY)

pdfs = [(fid, title) for fid, title in raw_files
        if title.lower().endswith('.pdf') or 'pdf' in title.lower()]
print(f"[2/5] PDFs extraídos de DriveFS: {len(pdfs)}")

# ──────────────────────────────────────────
# PASO 2: Normalizar y generar objetos JSON
# ──────────────────────────────────────────
TEMA_MAP = {
    "POL": ["politic","califato","emirato","caliphal","umayyad","taifa","gobern","emir","caliph","dynasty","kingdom","reino"],
    "SOC": ["social","comunidad","rural","urban","settlement","family","mujer","woman","gender","habitant","aldea","cloth","textile"],
    "CUL": ["cultur","gastronom","food","cocina","cuisine","art","literatur","languag","arab","andalus","mozarab","manuscr","poesia","poetry","ceramica","ceramic","arquitect","architec","ivory","casket","jewelry","painting","mosque","mezquita","inscription","epigraphy","church","basil","cross","glass","vidrio"],
    "ECO": ["econom","comercio","trade","mercad","market","produc","agric","ceramica","exchange","monetar","coins"],
    "REL": ["religi","islam","muslim","mosque","mezquita","cristian","jew","judio","dhimmi","fiqh","liturgy","martyrdom","christian","visigoth"],
    "MIL": ["militar","guerra","battle","combat","fortif","castle","feudal","conquest","reconquista","gate","gormaz"],
    "SCI": ["cienci","medic","botanic","arque","philosoph","astronom","matemat","agronom","manuscript","scholar","archaeolog","mathematics","iron age","volcano"],
    "ART": ["art","arquitect","architec","ceramica","ceramic","orfebr","escultur","manuscript","iluminado","poetry","poesia","ivory","casket","painting","cross","glass","mosque","decoration"]
}

def infer_themes(title):
    tl = title.lower()
    found = []
    for tid, kws in TEMA_MAP.items():
        if any(kw in tl for kw in kws):
            found.append(tid)
    return list(dict.fromkeys(found))[:3] or ['CUL']

def extract_year(title):
    m = re.search(r'\b(19[0-9]{2}|20[0-2][0-9])\b', title)
    return int(m.group(1)) if m else 2026

def clean_title(title):
    t = re.sub(r'\.pdf$', '', title, flags=re.IGNORECASE)
    t = re.sub(r'\.pdf$', '', t, flags=re.IGNORECASE)
    t = ' '.join(t.split())
    return t.strip()

def make_id(drive_id):
    h = hashlib.md5(drive_id.encode()).hexdigest()[:7]
    return f"bib-s10-wos-{h}"

records = []
for drive_id, raw_title in pdfs:
    title = clean_title(raw_title)
    year  = extract_year(title)
    themes = infer_themes(title)
    rec = {
        "id": make_id(drive_id),
        "category": "ANALISIS_BIBLIOGRAFICO",
        "title": title,
        "year": year,
        "date": f"{year}-01-01",
        "type": "article",
        "driveFileId": drive_id,
        "media": {
            "thumbnail": f"https://drive.google.com/thumbnail?id={drive_id}&sz=w400",
            "pdf": f"https://drive.google.com/file/d/{drive_id}/view"
        },
        "eraId": "S10",
        "themes": themes,
        "tags": ["Análisis Bibliográfico", "Siglo X", "Al-Ándalus", "WoS"],
        "regions": ["QURTUBA"],
        "language": "en",
        "searchable_text": f"{title}. Al-Ándalus Siglo X Córdoba Califato Omeya medieval arqueología historia."
    }
    records.append(rec)

print(f"[3/5] Objetos JSON generados: {len(records)}")

# Guardar JSON de verificación
json_out = os.path.join(SCRIPT_DIR, 'siglo_x_wos_phase1.json')
with open(json_out, 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=2)
print(f"       JSON guardado: {json_out}")

# ──────────────────────────────────────────
# PASO 3: Backup + Append seguro a local-db.js
# ──────────────────────────────────────────
with open(DB_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Verificar integridad antes del append
existing_ids = set(re.findall(r'"id"\s*:\s*"([^"]+)"', content))
new_records = [r for r in records if r['id'] not in existing_ids]
print(f"[4/5] Registros nuevos (no duplicados): {len(new_records)} / {len(records)}")

# Backup
backup_path = DB_PATH + '.backup_sx_phase1'
with open(backup_path, 'w', encoding='utf-8') as f:
    f.write(content)
print(f"       Backup guardado: {os.path.basename(backup_path)}")

# Localizar punto de inserción: antes del último "]" que cierra documents[]
# Busca el patrón: <último objeto}> seguido de \n  ]\n}
END_PATTERN = re.compile(r'(\n\s*\]\s*\n\s*\}\s*\n?\s*)$')
m = END_PATTERN.search(content)
if m:
    insert_pos = m.start()
else:
    insert_pos = content.rfind('\n  ]')
    if insert_pos == -1:
        insert_pos = content.rfind(']')

# Construir snippet
lines = ["\n"]
lines.append("    // ─── ANÁLISIS BIBLIOGRÁFICO — SIGLO X (WoS) — FASE 1 ───")
lines.append(f"    // {len(new_records)} documentos | Carpeta: Siglo X Al Andalus Rescate Antigravity")
lines.append(f"    // eraId: S10 | Generado: 2026-05-01 | v3.2-Sonnet-X-Phase1")
for i, rec in enumerate(new_records):
    js = json.dumps(rec, ensure_ascii=False, indent=6)
    js = js.replace('\n', '\n    ')
    lines.append(f"    {js},")

snippet = '\n'.join(lines)
new_content = content[:insert_pos] + snippet + content[insert_pos:]

# Verificación final
new_id_count = len(re.findall(r'"id"\s*:\s*"([^"]+)"', new_content))
print(f"       IDs antes: {len(existing_ids)} → después: {new_id_count} (+{new_id_count - len(existing_ids)})")

with open(DB_PATH, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"[5/5] ✓ local-db.js actualizado — {len(new_records)} docs Siglo X añadidos")
print(f"\nEjemplo de objeto generado:")
print(json.dumps(records[0], ensure_ascii=False, indent=2))
