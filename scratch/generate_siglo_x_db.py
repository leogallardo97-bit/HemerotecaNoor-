"""
GENERADOR DE INGESTA - SIGLO X
Toma siglo_x_filtered.json y genera los objetos JSON listos para añadir a local-db.js

Schema target (basado en documentos con driveFileId del proyecto v3.1.x-Optima):
{
  "id": "bib-sx-<source>-<hash>",
  "category": "ANALISIS_BIBLIOGRAFICO",
  "title": "...",
  "year": 2023,
  "date": "2023-01-01",
  "type": "article",        // article / book_chapter
  "driveFileId": "1abc...", // para thumbnail y PDF viewer
  "media": {
    "thumbnail": "https://drive.google.com/thumbnail?id=<driveFileId>&sz=w400",
    "pdf": "https://drive.google.com/file/d/<driveFileId>/view"
  },
  "tags": ["Siglo X", "Análisis Bibliográfico"],
  "epocas": ["Siglo X"],
  "eraId": "SX",
  "temas": ["Cultural"],   // del glosario permitido
  "searchable_text": "...",
  "content_tags": [...]
}
"""
import json, re, os, sys, hashlib

sys.stdout.reconfigure(encoding='utf-8')

SCRIPT_DIR = os.path.dirname(__file__)
INPUT_FILE = os.path.join(SCRIPT_DIR, 'siglo_x_filtered.json')
OUTPUT_FILE = os.path.join(SCRIPT_DIR, 'siglo_x_db_snippet.js')

with open(INPUT_FILE, 'r', encoding='utf-8') as f:
    raw = json.load(f)

print(f"Registros cargados: {len(raw)}")

# ─────────────────────────────────────────────────────
# FILTRO DEFINITIVO: excluir Siglo XX, XXI, y multi-siglo
# donde X no aparece como siglo propio
# ─────────────────────────────────────────────────────
GLOSARIO_TEMAS = ["Político", "Social", "Cultural", "Económico", "Religioso", "Militar", "Científico", "Artístico"]

TEMA_KEYWORDS = {
    "Político": ["politic", "gobern", "califato", "reino", "poder", "estado", "taifa", "dynasty", "emirate", "emir", "caliph"],
    "Social": ["social", "comunidad", "aldea", "rural", "urban", "poblacion", "habitant", "settlement", "family", "mujer", "woman", "gender"],
    "Cultural": ["cultur", "gastronom", "culinari", "food", "cocina", "receta", "recipe", "aliment", "cuisine", "art", "literatur", "languag", "arab", "andalus"],
    "Económico": ["econom", "comercio", "trade", "mercad", "market", "produc", "agric", "ceramica", "exchange", "monetar"],
    "Religioso": ["religi", "islam", "muslim", "mosque", "mezquita", "cristian", "jews", "judio", "dhimmi", "jihad", "fiqh", "shariah"],
    "Militar": ["militar", "guerra", "battle", "combat", "fortif", "castle", "feudal", "conquest", "reconquista", "campaña"],
    "Científico": ["cienci", "medic", "botanic", "arque", "filosof", "astronom", "matemat", "agronom", "mediev", "manuscript", "scholar"],
    "Artístico": ["art", "arqu", "arquitect", "ceramica", "orfebr", "escultur", "manuscript", "iluminado", "poetry", "poesia"]
}

def infer_temas(title):
    """Infiere los temas del glosario a partir del título."""
    title_lower = title.lower()
    found = []
    for tema, keywords in TEMA_KEYWORDS.items():
        if any(kw in title_lower for kw in keywords):
            found.append(tema)
    if not found:
        found = ["Cultural"]  # default
    return list(dict.fromkeys(found))[:3]  # max 3

def extract_year_from_title(title):
    """Extrae el año del inicio del filename (formato: YYYY_...)."""
    m = re.match(r'^(\d{4})', title)
    if m:
        y = int(m.group(1))
        if 1000 <= y <= 2026:
            return y
    return 2026

def clean_title(title):
    """Limpia el nombre del archivo para título legible."""
    # Quitar extensión .pdf (doble o simple)
    t = re.sub(r'\.pdf$', '', title, flags=re.IGNORECASE)
    t = re.sub(r'\.pdf$', '', t, flags=re.IGNORECASE)
    # Quitar año inicial si está al principio
    t = re.sub(r'^\d{4}_', '', t)
    # Reemplazar _ y - por espacios
    t = t.replace('_', ' ').replace('-', ' ')
    # Limpiar _S-X... al final
    t = re.sub(r'\s+S\s+X\w*\s*$', '', t, flags=re.IGNORECASE)
    # Limpiar patrón _S-X-... 
    t = re.sub(r'\s+S-X[\w\-]*\s*$', '', t, flags=re.IGNORECASE)
    # Normalizar espacios
    t = ' '.join(t.split())
    return t.strip()

def make_id(source, cloud_id):
    """Genera un ID único y estable."""
    src_code = 'scopus' if 'scopus' in source.lower() else 'wos' if 'wos' in source.lower() else 'trans'
    hash4 = hashlib.md5(cloud_id.encode()).hexdigest()[:6]
    return f"bib-sx-{src_code}-{hash4}"

def make_searchable_text(title, temas):
    """Construye el texto de búsqueda a partir del título."""
    parts = [title]
    # Extraer autores del nombre del archivo (formato: YEAR_Apellido-Apellido_...)
    m = re.match(r'^\d{4}_([^_]+)_', title)
    if m:
        authors_raw = m.group(1)
        authors = re.sub(r'[-]', ', ', authors_raw)
        parts.append(f"Autores: {authors}")
    parts.append("Al-Ándalus Siglo X gastronomía historia medieval")
    parts.extend(temas)
    return '. '.join(parts)

# ─────────────────────────────────────────────────────
# FILTRO FINAL: excluir S-XX (Siglo XX), S-XXI, etc.
# ─────────────────────────────────────────────────────
def is_really_siglo_x(record):
    """Verifica que el registro sea realmente del Siglo X (no XX, XXI, etc.)"""
    t = record['title'].upper()
    # Excluir explícitamente S-XX, S-XXI (Siglo XX, XXI)
    if re.search(r'S-XX(?!X)', t) or re.search(r'S-XXI', t):
        return False
    # Si viene de carpeta dedicada Siglo X, siempre incluir
    if record['source'] in ('Scopus 2026', 'WoS 2026'):
        return True
    # Para el transversal, verificar patrón válido de Siglo X
    return True  # Ya filtrado previamente

# Generar objetos
records = []
skipped = 0
for item in raw:
    if not is_really_siglo_x(item):
        skipped += 1
        print(f"  SKIP (Siglo XX): {item['title']}")
        continue
    
    title_raw = item['title']
    year = extract_year_from_title(title_raw)
    title_clean = clean_title(title_raw)
    temas = infer_temas(title_clean)
    doc_id = make_id(item['source'], item['cloud_id'])
    drive_id = item['cloud_id']
    
    rec = {
        "id": doc_id,
        "category": "ANALISIS_BIBLIOGRAFICO",
        "title": title_clean,
        "year": year,
        "date": f"{year}-01-01",
        "type": "article",
        "driveFileId": drive_id,
        "media": {
            "thumbnail": f"https://drive.google.com/thumbnail?id={drive_id}&sz=w400",
            "pdf": f"https://drive.google.com/file/d/{drive_id}/view"
        },
        "tags": ["Siglo X", "Análisis Bibliográfico", item['source']],
        "epocas": ["Siglo X"],
        "eraId": "SX",
        "temas": temas,
        "searchable_text": make_searchable_text(title_raw, temas),
        "content_tags": temas,
        "source_folder": item['source']
    }
    records.append(rec)

print(f"\n═══ ESTADÍSTICAS ═══")
print(f"Registros procesados: {len(records)}")
print(f"Registros excluidos (Siglo XX/XXI): {skipped}")

# Por fuente
for src in ['Scopus 2026', 'WoS 2026', '01_Siglos_X_al_XII']:
    count = sum(1 for r in records if r.get('source_folder', '') == src)
    print(f"  {src}: {count} docs")

# ─────────────────────────────────────────────────────
# Generar JS snippet para append
# ─────────────────────────────────────────────────────
js_lines = []
js_lines.append("// ─── ANÁLISIS BIBLIOGRÁFICO — SIGLO X ───")
js_lines.append(f"// Total: {len(records)} documentos | Fuentes: Scopus 2026, WoS 2026, 01_Siglos_X_al_XII")
js_lines.append(f"// Versión: v3.2-Sonnet-X | Generado: 2026-05-01")
js_lines.append("")

for rec in records:
    # Limpiar source_folder antes de serializar (metadato interno)
    out_rec = {k: v for k, v in rec.items() if k != 'source_folder'}
    js_lines.append(json.dumps(out_rec, ensure_ascii=False, indent=6) + ",")

js_snippet = '\n'.join(js_lines)

with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    f.write(js_snippet)

print(f"\nJS snippet guardado: {OUTPUT_FILE}")

# También guardar JSON limpio para verificación
json_out = os.path.join(SCRIPT_DIR, 'siglo_x_final.json')
with open(json_out, 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=2)
print(f"JSON verificación guardado: {json_out}")

# Mostrar ejemplo
if records:
    print(f"\n═══ EJEMPLO DE OBJETO GENERADO ═══")
    print(json.dumps(records[0], ensure_ascii=False, indent=2))
