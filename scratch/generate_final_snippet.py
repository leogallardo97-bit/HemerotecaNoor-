
import re
import json

path = r'G:\Mi unidad\Noor_ 2026_archivos\ARCHIVO_DIGITAL_NOOR\02_LIBROS\Hemeroteca_Dashboard.html'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'const DATA = (\[.*?\]);', content, re.DOTALL)
if match:
    data_json = match.group(1)
    data = json.loads(data_json)
    
    noor_docs = []
    for i, item in enumerate(data):
        drive_url = item.get('URL_Imagen', '')
        drive_id = ''
        id_match = re.search(r'/d/([a-zA-Z0-9_-]+)/', drive_url)
        if id_match:
            drive_id = id_match.group(1)
            
        signatura = item.get('ID_Signatura', '').strip()
        title = item.get('Título_Publicación', 'Libro sin título').strip()
        year = int(item.get('Año', 2000))
        desc = item.get('Descripción_Portada', '').strip()
        descriptores = item.get('Descriptores_Temáticos', '').strip()
        
        doc = {
            "id": f"local-lib-{signatura}" if signatura else f"local-lib-{i+1}",
            "title": title,
            "year": year,
            "type": "book",
            "eraId": "S21" if year >= 2000 else "S20",
            "language": "es",
            "source": "Archivo Digital Noor",
            "tags": [t.strip() for t in descriptores.split(';') if t.strip() and t.strip() != '-'],
            "regions": ["QURTUBA"],
            "coordinates": [37.8847, -4.7791], # Córdoba
            "localPath": f"G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/{signatura}.pdf",
            "driveId": drive_id,
            "media": {
                "thumbnail": f"https://drive.google.com/thumbnail?id={drive_id}&sz=w1000",
                "pdf": drive_id
            },
            "description": f"{desc}. {descriptores}" if desc and descriptores else (desc or descriptores)
        }
        noor_docs.append(doc)
    
    output_path = r'c:\Users\leoga\Desktop\Noor\Antigravity Macro- Proyecto Drive\scratch\js_snippet_books_final.js'
    with open(output_path, 'w', encoding='utf-8') as out:
        out.write("    // --- Ingesta Masiva 02_LIBROS (v1.4) ---\n")
        for doc in noor_docs:
            json_str = json.dumps(doc, indent=6, ensure_ascii=False)
            indented = json_str.replace('\n', '\n    ')
            out.write(f"    {indented},\n")
    
    print(f"Final JS snippet generated with {len(noor_docs)} books and QURTUBA region.")
else:
    print("Could not find DATA variable")
