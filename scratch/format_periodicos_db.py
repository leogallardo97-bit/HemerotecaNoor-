import json, re, os

in_path = os.path.join(os.path.dirname(__file__), '..', 'periodicos_ids.json')
out_path = os.path.join(os.path.dirname(__file__), 'periodicos_db.js')

with open(in_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

js_objects = []

for filename, drive_id in data.items():
    # Remover extensión para el título
    title = re.sub(r'(?i)\.pdf$', '', filename)
    
    # Extraer año (primer número de 4 dígitos, o 2000 por defecto)
    year_match = re.search(r'(\d{4})', title)
    year = int(year_match.group(1)) if year_match else 2000
    
    # Crear un ID local basado en el filename
    clean_id = re.sub(r'[^A-Za-z0-9]', '_', title)[:40].strip('_')
    local_id = f"local-per-{clean_id}"
    
    # Determinar la Era (si el año es > 2000 -> S21, sino CONTEMPORARY o lo que sea)
    # Por consistencia con el resto de la base de datos (veo muchos S21 para >2000)
    eraId = "S21" if year >= 2000 else "CONTEMPORARY"
    
    js_obj = f"""    {{
      "id": "{local_id}",
      "driveId": "{drive_id}",
      "category": "05_PERIODICOS",
      "title": "{title}",
      "year": {year},
      "type": "article",
      "eraId": "{eraId}",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/{filename}",
      "media": {{ "driveFileId": "{drive_id}", "pdf": "{drive_id}", "thumbnail": "https://drive.google.com/thumbnail?id={drive_id}&sz=w1000" }}
    }}"""
    js_objects.append(js_obj)

final_js = ",\n".join(js_objects)

with open(out_path, 'w', encoding='utf-8') as f:
    f.write(final_js)

print("Formato JS generado correctamente.")
