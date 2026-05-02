# -*- coding: utf-8 -*-
"""
╔══════════════════════════════════════════════════════════════════════╗
║  NOOR ARCHIVE — INGESTOR BIBLIOMÉTRICO UNIVERSAL                    ║
║  Sistema de ingesta multi-siglo: XI, XII, XIII, XIV...              ║
║                                                                      ║
║  PROTOCOLO: APPEND-ONLY — No modifica registros existentes          ║
║  MÉTODO: Lectura directa de Google Drive Desktop (metadata_sqlite_db)║
║                                                                      ║
║  USO:                                                                ║
║    python ingest_bibliometrico.py --siglo XI                        ║
║    python ingest_bibliometrico.py --siglo XII                       ║
║    python ingest_bibliometrico.py --siglo XIII                      ║
║    python ingest_bibliometrico.py --auto  (detecta todos)           ║
╚══════════════════════════════════════════════════════════════════════╝
"""

import os, sys, shutil, sqlite3, json, re, hashlib, argparse
from datetime import datetime

sys.stdout.reconfigure(encoding='utf-8')

# ──────────────────────────────────────────────────────────────────────
# CONFIGURACIÓN POR SIGLO
# Añade aquí nuevos siglos sin tocar el resto del código
# ──────────────────────────────────────────────────────────────────────
# Nombres exactos de carpetas confirmados con --list-folders (2026-05-02)
CENTURY_CONFIG = {
    "XI": {
        "era_id": "S11",
        "era_label": "Siglo XI",
        "drive_folders": [
            {"name": "Siglo Xl Wos 2026",    "id": "1AbilTvE-LwBO-ThlvdHVaKNQnV6AD1w7", "source": "WoS"},
            {"name": "Siglo Xl Scopus 2026", "id": "1Jjp0RPF9VFQMUSXyJ5Lt_-ulzVNwjlTB", "source": "Scopus"},
        ],
        "tag_century": "Siglo XI",
        "year_range": (1000, 1100),
        "searchable_context": "Al-Ándalus Siglo XI Taifas período medieval arqueología historia Almanzor",
    },
    "XII": {
        "era_id": "S12",
        "era_label": "Siglo XII",
        "drive_folders": [
            {"name": "Siglo Xll Wos 2026",      "id": "1f62T1PMITYIE7h75DmVgr07Qo9LldXuM", "source": "WoS"},
            {"name": "Siglo Xll Scopus  2026",  "id": "1wzFQrFAzaVyMjX0eqTYTCj43Ox7UhGDJ", "source": "Scopus"},
        ],
        "tag_century": "Siglo XII",
        "year_range": (1100, 1200),
        "searchable_context": "Al-Ándalus Siglo XII Almohades período medieval historia",
    },
    "XIII": {
        "era_id": "S13",
        "era_label": "Siglo XIII",
        "drive_folders": [
            {"name": "Siglo Xlll Wos 2026 (1)",  "id": "1E1W0u1FmLL5faBHaD5yY7Lflk5rF9zYO", "source": "WoS"},
            {"name": "Siglo Xlll Scopus 2026",    "id": "19M9u2JOSZ0PZpMrfEJNQoZP7lmzZyHfp", "source": "Scopus"},
        ],
        "tag_century": "Siglo XIII",
        "year_range": (1200, 1300),
        "searchable_context": "Al-Ándalus Siglo XIII período medieval Reconquista historia",
    },
    "XIV": {
        "era_id": "S14",
        "era_label": "Siglo XIV",
        "drive_folders": [
            {"name": "Siglo XlV Wos 2026", "id": "18v_8QaYS8YD_bODFDuYgAunGi8fxPJt7", "source": "WoS"},
        ],
        "tag_century": "Siglo XIV",
        "year_range": (1300, 1400),
        "searchable_context": "Al-Ándalus Siglo XIV Nazarí período medieval historia Granada Alhambra",
    },
    "XV": {
        "era_id": "S15",
        "era_label": "Siglo XV",
        "drive_folders": [
            {"name": "Siglo XV Wos 2026",  "id": "1-NzKlqF5sBJcue0-p7_W4UZpFix33-Gy", "source": "WoS"},
        ],
        "tag_century": "Siglo XV",
        "year_range": (1400, 1492),
        "searchable_context": "Al-Ándalus Siglo XV Nazarí fin de Al-Andalus Reconquista 1492 Granada",
    },
    "XVI": {
        "era_id": "S16",
        "era_label": "Siglo XVI",
        "drive_folders": [
            {"name": "Siglo XVl Wos 2026", "id": "1BZEL10CGiJ71iME8-jAFaC5ArP0Y_ftm", "source": "WoS"},
        ],
        "tag_century": "Siglo XVI",
        "year_range": (1492, 1600),
        "searchable_context": "Siglo XVI Morisco mudéjar historia España post-Reconquista",
    },
    "XVII": {
        "era_id": "S17",
        "era_label": "Siglo XVII",
        "drive_folders": [
            {"name": "Siglo XVll Wos 2026", "id": "1TQmK3ldEbf4GCKnjwrOLftBKvU_UK-Uq", "source": "WoS"},
        ],
        "tag_century": "Siglo XVII",
        "year_range": (1600, 1700),
        "searchable_context": "Siglo XVII historia España Barroco Siglo de Oro",
    },
}

# ──────────────────────────────────────────────────────────────────────
# MAPA TEMÁTICO (compartido por todos los siglos)
# ──────────────────────────────────────────────────────────────────────
TEMA_MAP = {
    "POL": ["politic","califato","emirato","caliphal","umayyad","taifa","gobern","emir",
            "caliph","dynasty","kingdom","reino","fitna","almoravid","almohad","nazari",
            "nasrid","feudal","reconquista","power","ruler","sultan","treaty","diplomatic"],
    "SOC": ["social","comunidad","rural","urban","settlement","family","mujer","woman",
            "gender","habitant","aldea","cloth","textile","daily life","slave","eunuch",
            "concubine","population","class","community","peasant","noble","merchant"],
    "CUL": ["cultur","gastronom","food","cocina","cuisine","art","literatur","languag",
            "arab","andalus","mozarab","manuscr","poesia","poetry","ceramica","ceramic",
            "arquitect","architec","ivory","casket","jewelry","painting","mosque","mezquita",
            "inscription","epigraphy","church","basil","cross","glass","vidrio","convivencia",
            "coexist","identity","translation","knowledge","education","scholar","al-quran",
            "manuscript","book","codex","latin","hebrew","arabic"],
    "ECO": ["econom","comercio","trade","mercad","market","produc","agric","exchange",
            "monetar","coins","coin","wealth","merchant","fiscal","tax","agrari","food supply",
            "grain","harvest","land","property","estate","irrigation"],
    "REL": ["religi","islam","muslim","mosque","mezquita","cristian","jew","judio","dhimmi",
            "fiqh","liturgy","martyrdom","christian","visigoth","synagogue","faith",
            "theology","convert","martyr","church","pilgrimage","sufi","mysticism"],
    "MIL": ["militar","guerra","battle","combat","fortif","castle","feudal","conquest",
            "reconquista","gate","siege","army","campaign","jihad","crusade","raid",
            "frontier","border","fortress","rampart","garrison","mercenary"],
    "SCI": ["cienci","medic","botanic","arque","philosoph","astronom","matemat","agronom",
            "manuscript","scholar","archaeolog","mathematics","optic","geography","botany",
            "engineer","technolog","science","medicine","herb","treatise","diet","dietetics"],
    "ART": ["art","arquitect","architec","ceramica","ceramic","orfebr","escultur",
            "iluminado","poetry","poesia","ivory","casket","painting","cross","glass",
            "mosque","decoration","ornament","calligraph","miniatur","textile","craft",
            "palace","garden","fountain","geometric","arabesque"],
}

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DIR   = os.path.dirname(SCRIPT_DIR)
DB_PATH    = os.path.join(BASE_DIR, 'js', 'data', 'local-db.js')


# ──────────────────────────────────────────────────────────────────────
# FUNCIONES CORE
# ──────────────────────────────────────────────────────────────────────

def get_drivefs_db():
    """Localiza y devuelve la ruta a la DB de Google Drive Desktop."""
    appdata = os.environ.get('LOCALAPPDATA', '')
    root = os.path.join(appdata, 'Google', 'DriveFS')
    if not os.path.isdir(root):
        raise FileNotFoundError(f"Google Drive Desktop no encontrado en: {root}")
    accounts = [n for n in os.listdir(root) if n.isdigit() and
                os.path.isdir(os.path.join(root, n))]
    if not accounts:
        raise FileNotFoundError("No se encontró ninguna cuenta de Drive Desktop")
    db_src = os.path.join(root, accounts[0], 'metadata_sqlite_db')
    if not os.path.exists(db_src):
        raise FileNotFoundError(f"metadata_sqlite_db no encontrada en: {db_src}")
    return db_src


def copy_db(db_src, suffix="tmp"):
    """Crea una copia temporal de la DB para consulta segura."""
    tmp_path = os.path.join(SCRIPT_DIR, f'_tmp_drive_{suffix}.db')
    shutil.copy2(db_src, tmp_path)
    return tmp_path


def find_folder_by_name(cursor, folder_name, fuzzy=True):
    """
    Busca una carpeta por nombre en DriveFS.
    Con fuzzy=True intenta variaciones de capitalización y espacios.
    """
    # Búsqueda exacta primero
    cursor.execute(
        "SELECT stable_id, id, local_title FROM items WHERE local_title = ? AND is_folder = 1",
        (folder_name,)
    )
    rows = cursor.fetchall()
    if rows:
        return rows

    if fuzzy:
        # Búsqueda con LIKE (insensible a mayúsculas en SQLite por defecto para ASCII)
        cursor.execute(
            "SELECT stable_id, id, local_title FROM items WHERE local_title LIKE ? AND is_folder = 1",
            (f"%{folder_name.replace(' ', '%')}%",)
        )
        rows = cursor.fetchall()
        if rows:
            return rows

        # Búsqueda por palabras clave del nombre
        keywords = folder_name.split()
        for kw in keywords:
            if len(kw) > 3:
                cursor.execute(
                    "SELECT stable_id, id, local_title FROM items WHERE local_title LIKE ? AND is_folder = 1",
                    (f"%{kw}%",)
                )
                rows = cursor.fetchall()
                if rows:
                    return rows
    return []


def collect_pdfs_recursive(cursor, parent_stable_id, depth=0):
    """Recopila todos los PDFs de forma recursiva desde una carpeta."""
    cursor.execute("""
        SELECT i.stable_id, i.id, i.local_title, i.mime_type, i.is_folder, i.local_title
        FROM items i
        JOIN stable_parents sp ON i.stable_id = sp.item_stable_id
        WHERE sp.parent_stable_id = ?
        ORDER BY i.local_title
    """, (parent_stable_id,))
    children = cursor.fetchall()
    pdfs = []
    for row in children:
        stable_id, cloud_id, title, mime, is_folder, _ = row
        if is_folder:
            sub = collect_pdfs_recursive(cursor, stable_id, depth + 1)
            pdfs.extend(sub)
        else:
            is_pdf = (
                (mime and 'pdf' in mime.lower()) or
                (title and title.lower().endswith('.pdf'))
            )
            if is_pdf and cloud_id:
                pdfs.append({'cloud_id': cloud_id, 'title': title})
    return pdfs


def infer_themes(title):
    """Infiere los temas bibliométricos desde el título del paper."""
    tl = title.lower()
    found = []
    for tid, kws in TEMA_MAP.items():
        if any(kw in tl for kw in kws):
            found.append(tid)
    return list(dict.fromkeys(found))[:3] or ['CUL']


def infer_source(title, folder_name):
    """Detecta la fuente (WoS o Scopus) desde el nombre de la carpeta."""
    fn = folder_name.lower()
    if 'scopus' in fn:
        return 'Scopus'
    if 'wos' in fn or 'web of science' in fn:
        return 'WoS'
    return 'WoS'


def extract_year(title, century_range):
    """Extrae el año del título (formato Zotero: 'Autor - AÑO - ...')."""
    m = re.search(r'\b(19[0-9]{2}|20[0-2][0-9])\b', title)
    if m:
        return int(m.group(1))
    # Default: punto medio del siglo
    return (century_range[0] + century_range[1]) // 2


def clean_title(title):
    """Normaliza el nombre del archivo como título legible."""
    t = re.sub(r'\.pdf$', '', title, flags=re.IGNORECASE)
    t = ' '.join(t.split())
    return t.strip()


def make_doc_id(cloud_id, era_id, source):
    """Genera un ID único y estable para el documento."""
    h = hashlib.md5(cloud_id.encode()).hexdigest()[:7]
    src = 'sco' if source == 'Scopus' else 'wos'
    era = era_id.lower()
    return f"bib-{era}-{src}-{h}"


def make_pdf_url(cloud_id):
    """URL para abrir el PDF directamente desde Google Drive."""
    return f"https://drive.google.com/file/d/{cloud_id}/view"


def make_thumbnail_url(cloud_id):
    """URL de miniatura desde Google Drive."""
    return f"https://lh3.googleusercontent.com/d/{cloud_id}=s400"


# ──────────────────────────────────────────────────────────────────────
# MOTOR PRINCIPAL DE INGESTA
# ──────────────────────────────────────────────────────────────────────

def ingest_century(century_key):
    """
    Proceso completo de ingesta para un siglo dado.
    Returns: list of records ingested, or raises on error.
    """
    if century_key not in CENTURY_CONFIG:
        raise ValueError(f"Siglo '{century_key}' no configurado. Opciones: {list(CENTURY_CONFIG.keys())}")

    cfg = CENTURY_CONFIG[century_key]
    print(f"\n{'═'*65}")
    print(f"  INGESTANDO: {cfg['era_label']} (eraId: {cfg['era_id']})")
    print(f"{'═'*65}")

    # ── PASO 1: Conectar a DriveFS ──
    print("\n[1/5] Conectando a Google Drive Desktop...")
    try:
        db_src = get_drivefs_db()
        print(f"      ✓ DriveFS DB encontrada")
    except FileNotFoundError as e:
        print(f"      ✗ ERROR: {e}")
        return []

    tmp_db = copy_db(db_src, suffix=century_key.lower())
    conn = sqlite3.connect(tmp_db)
    c = conn.cursor()

    # ── PASO 2: Buscar carpetas del siglo ──
    print(f"\n[2/5] Buscando carpetas para {cfg['era_label']}...")
    all_pdfs = []
    folders_found = []

    for folder_cfg in cfg['drive_folders']:
        folder_name = folder_cfg['name']
        folder_id   = folder_cfg['id']
        source      = folder_cfg['source']

        # Método primario: buscar por Drive ID (más fiable que por nombre)
        c.execute("SELECT stable_id, id, local_title FROM items WHERE id = ? AND is_folder = 1",
                  (folder_id,))
        rows = c.fetchall()

        # Fallback: búsqueda por nombre con fuzzy
        if not rows:
            print(f"      ⚠ ID no encontrado, buscando por nombre: '{folder_name}'...")
            rows = find_folder_by_name(c, folder_name, fuzzy=True)

        if rows:
            for stable_id, cloud_id, actual_name in rows:
                print(f"      ✓ [{source}] '{actual_name}'")
                pdfs = collect_pdfs_recursive(c, stable_id)
                print(f"        → {len(pdfs)} PDFs encontrados")
                for pdf in pdfs:
                    pdf['source'] = source
                    pdf['folder_name'] = actual_name
                all_pdfs.extend(pdfs)
                folders_found.append(actual_name)
        else:
            print(f"      ✗ [{source}] '{folder_name}' NO encontrada en DriveFS")
            print(f"        Verifica que la carpeta esté sincronizada en Google Drive Desktop")

    conn.close()
    if os.path.exists(tmp_db):
        os.remove(tmp_db)

    if not all_pdfs:
        print(f"\n  ✗ No se encontraron documentos para {cfg['era_label']}")
        print(f"  Verifica que las carpetas de Drive estén disponibles localmente")
        return []

    # Deduplicar por cloud_id
    seen_ids = set()
    unique_pdfs = []
    for pdf in all_pdfs:
        if pdf['cloud_id'] not in seen_ids:
            seen_ids.add(pdf['cloud_id'])
            unique_pdfs.append(pdf)

    print(f"\n      Total PDFs: {len(all_pdfs)} → Únicos: {len(unique_pdfs)}")

    # ── PASO 3: Normalizar y generar objetos JSON ──
    print(f"\n[3/5] Generando registros JSON...")
    records = []
    for pdf in unique_pdfs:
        cloud_id = pdf['cloud_id']
        raw_title = pdf['title']
        source = pdf['source']

        title = clean_title(raw_title)
        year = extract_year(title, cfg['year_range'])
        themes = infer_themes(title)
        doc_id = make_doc_id(cloud_id, cfg['era_id'], source)

        rec = {
            "id": doc_id,
            "category": "ANALISIS_BIBLIOGRAFICO",
            "title": title,
            "year": year,
            "date": f"{year}-01-01",
            "type": "article",
            "driveFileId": cloud_id,
            "driveId": cloud_id,
            "media": {
                "thumbnail": make_thumbnail_url(cloud_id),
                "pdf": make_pdf_url(cloud_id),
            },
            "eraId": cfg['era_id'],
            "themes": themes,
            "tags": [
                "Análisis Bibliográfico",
                cfg['tag_century'],
                "Al-Ándalus",
                source,
            ],
            "regions": ["QURTUBA"],
            "language": "en",
            "searchable_text": f"{title}. {cfg['searchable_context']}",
        }
        records.append(rec)

    print(f"      ✓ {len(records)} registros generados")

    # ── PASO 4: Verificar duplicados y backup ──
    print(f"\n[4/5] Verificando integridad de local-db.js...")
    with open(DB_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    existing_ids = set(re.findall(r'"id"\s*:\s*"([^"]+)"', content))
    new_records = [r for r in records if r['id'] not in existing_ids]
    duplicates = len(records) - len(new_records)

    print(f"      IDs existentes: {len(existing_ids)}")
    print(f"      Nuevos:         {len(new_records)}")
    print(f"      Duplicados:     {duplicates}")

    if not new_records:
        print(f"\n  ℹ Todos los registros ya existen en la DB. Nada que añadir.")
        return []

    # Backup
    ts = datetime.now().strftime('%Y%m%d_%H%M')
    backup_path = DB_PATH + f'.backup_bib_{cfg["era_id"].lower()}_{ts}'
    with open(backup_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"      ✓ Backup: {os.path.basename(backup_path)}")

    # ── PASO 5: Append seguro a local-db.js ──
    print(f"\n[5/5] Inyectando en local-db.js...")

    # Buscar el punto de inserción: antes del cierre del array documents
    end_match = re.search(r'(\n\s*\]\s*\n\s*\}\s*;?\s*)$', content)
    if end_match:
        insert_pos = end_match.start()
    else:
        insert_pos = content.rfind('\n  ]')
        if insert_pos == -1:
            insert_pos = content.rfind(']')

    # Construir bloque de inserción
    lines = ["\n"]
    lines.append(f"    // ─── ANÁLISIS BIBLIOMÉTRICO — {cfg['era_label'].upper()} ───")
    lines.append(f"    // {len(new_records)} docs | Fuentes: {', '.join(set(r['tags'][2] for r in new_records))}")
    lines.append(f"    // eraId: {cfg['era_id']} | Generado: {datetime.now().strftime('%Y-%m-%d %H:%M')} | v3.3-Universal")
    for rec in new_records:
        js = json.dumps(rec, ensure_ascii=False, indent=6)
        js = js.replace('\n', '\n    ')
        lines.append(f"    {js},")

    snippet = '\n'.join(lines)
    new_content = content[:insert_pos] + snippet + content[insert_pos:]

    # Verificación post-inserción
    new_id_count = len(re.findall(r'"id"\s*:\s*"([^"]+)"', new_content))
    delta = new_id_count - len(existing_ids)
    print(f"      IDs: {len(existing_ids)} → {new_id_count} (+{delta})")

    with open(DB_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)

    # Guardar JSON de verificación
    json_out = os.path.join(SCRIPT_DIR, f'bib_{cfg["era_id"].lower()}_ingest.json')
    with open(json_out, 'w', encoding='utf-8') as f:
        json.dump(new_records, f, ensure_ascii=False, indent=2)

    print(f"\n{'═'*65}")
    print(f"  ✅ {cfg['era_label']} COMPLETADO")
    print(f"  → {len(new_records)} documentos añadidos a local-db.js")
    print(f"  → JSON guardado: {os.path.basename(json_out)}")
    print(f"{'═'*65}")

    return new_records


def list_available_folders():
    """Lista todas las carpetas disponibles en DriveFS para diagnóstico."""
    print("\n📁 CARPETAS DISPONIBLES EN GOOGLE DRIVE DESKTOP")
    print("─" * 60)
    try:
        db_src = get_drivefs_db()
    except FileNotFoundError as e:
        print(f"ERROR: {e}")
        return

    tmp_db = copy_db(db_src, "list")
    conn = sqlite3.connect(tmp_db)
    c = conn.cursor()

    # Buscar carpetas con "Siglo" en el nombre
    c.execute("""
        SELECT stable_id, id, local_title
        FROM items
        WHERE is_folder = 1 AND (
            local_title LIKE '%Siglo%' OR
            local_title LIKE '%Wos%' OR
            local_title LIKE '%Scopus%' OR
            local_title LIKE '%bibliom%'
        )
        ORDER BY local_title
    """)
    rows = c.fetchall()
    print(f"Carpetas encontradas: {len(rows)}\n")
    for row in rows:
        stable_id, cloud_id, title = row
        print(f"  '{title}'")
        print(f"    Drive ID: {cloud_id}")

    conn.close()
    os.remove(tmp_db)


# ──────────────────────────────────────────────────────────────────────
# PUNTO DE ENTRADA
# ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description='Noor Archive — Ingestor Bibliométrico Universal',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos:
  python ingest_bibliometrico.py --siglo XI
  python ingest_bibliometrico.py --siglo XII
  python ingest_bibliometrico.py --auto
  python ingest_bibliometrico.py --list-folders
        """
    )
    parser.add_argument('--siglo', choices=list(CENTURY_CONFIG.keys()),
                        help='Siglo a ingestar (XI, XII, XIII, XIV, XV)')
    parser.add_argument('--auto', action='store_true',
                        help='Detecta e ingesta todos los siglos configurados')
    parser.add_argument('--list-folders', action='store_true',
                        help='Lista todas las carpetas disponibles en Drive (diagnóstico)')
    args = parser.parse_args()

    print("╔══════════════════════════════════════════════════════════╗")
    print("║  NOOR ARCHIVE — INGESTOR BIBLIOMÉTRICO UNIVERSAL v3.3   ║")
    print("╚══════════════════════════════════════════════════════════╝")

    if args.list_folders:
        list_available_folders()
        return

    if args.auto:
        total = 0
        for key in CENTURY_CONFIG:
            records = ingest_century(key)
            total += len(records)
        print(f"\n🏁 INGESTA TOTAL COMPLETADA: {total} documentos añadidos")
        return

    if args.siglo:
        ingest_century(args.siglo)
        return

    # Sin argumentos: mostrar menú interactivo
    print("\nOpciones:")
    for i, (key, cfg) in enumerate(CENTURY_CONFIG.items(), 1):
        print(f"  {i}. {cfg['era_label']} (--siglo {key})")
    print(f"  {len(CENTURY_CONFIG)+1}. Todos los siglos (--auto)")
    print(f"  L. Listar carpetas de Drive disponibles")
    print()
    choice = input("Selecciona una opción: ").strip()

    if choice.upper() == 'L':
        list_available_folders()
    elif choice.isdigit():
        idx = int(choice) - 1
        keys = list(CENTURY_CONFIG.keys())
        if 0 <= idx < len(keys):
            ingest_century(keys[idx])
        elif idx == len(keys):
            for key in keys:
                ingest_century(key)
        else:
            print("Opción inválida")
    else:
        parser.print_help()


if __name__ == '__main__':
    main()
