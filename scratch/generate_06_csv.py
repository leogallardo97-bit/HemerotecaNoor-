import json, re, os

in_path = os.path.join(os.path.dirname(__file__), '..', '06_ids.json')
out_path = os.path.join(os.path.dirname(__file__), '..', '06_PRODUCTO_CONTEXTUALIZACION.csv')

with open(in_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

headers = "id;title;year;exact_date;type;eraId;language;driveFileId;lat;lng;description;tags;regions;themes\n"
lines = [headers]

for filename, drive_id in data.items():
    title = re.sub(r'(?i)\.(pdf|doc|docx|jpg|png|jpeg)$', '', filename)
    year_match = re.search(r'(\d{4})', title)
    year = int(year_match.group(1)) if year_match else 2000
    
    clean_id = re.sub(r'[^A-Za-z0-9]', '_', title)[:40].strip('_')
    local_id = f"local-ctx-{clean_id}"
    
    eraId = "S21" if year >= 2000 else "CONTEMPORARY"
    
    exact_date = f"{year}-01-01"
    
    # Escape semicolons in title just in case
    title_safe = title.replace(';', ',')
    
    line = f"{local_id};{title_safe};{year};{exact_date};book;{eraId};es;{drive_id};37.8847;-4.7791;{title_safe};Contextualización|06_PRODUCTO_CONTEXTUALIZACION;QURTUBA;\n"
    lines.append(line)

with open(out_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("CSV generado correctamente.")
