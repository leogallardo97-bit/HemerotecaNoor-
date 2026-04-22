
import re
import json

path = r'G:\Mi unidad\Noor_ 2026_archivos\ARCHIVO_DIGITAL_NOOR\02_LIBROS\Hemeroteca_Dashboard.html'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the DATA variable content
match = re.search(r'const DATA = (\[.*?\]);', content, re.DOTALL)
if match:
    data_json = match.group(1)
    data = json.loads(data_json)
    
    # Process data to match Noor Archive project structure
    noor_docs = []
    for i, item in enumerate(data):
        # Extract Drive ID from URL_Imagen
        # Example: https://drive.google.com/file/d/1nv3iaDi-AGf1AgQFuvHGnjfspR7D4fU7/view?usp=drive_link
        drive_url = item.get('URL_Imagen', '')
        drive_id = ''
        id_match = re.search(r'/d/([a-zA-Z0-9_-]+)/', drive_url)
        if id_match:
            drive_id = id_match.group(1)
            
        signatura = item.get('ID_Signatura', f'LIB-{i}')
        # Clean title
        title = item.get('Título_Publicación', 'Libro sin título').strip()
        year = item.get('Año', 2000)
        desc = item.get('Descripción_Portada', '')
        descriptores = item.get('Descriptores_Temáticos', '')
        
        doc = {
            "id": f"lib-{i+1}",
            "driveId": drive_id,
            "title": title,
            "date": f"{year}-01-01", # Placeholder date
            "year": year,
            "eraId": "S20" if year >= 1900 else "S19", 
            "regions": ["QURTUBA"], # Default for Noor if not specified
            "type": "book",
            "media": {
                "thumbnail": f"https://drive.google.com/thumbnail?id={drive_id}&sz=w1000" if drive_id else "",
                "pdf": drive_id,
                "viewUrl": f"https://drive.google.com/file/d/{drive_id}/view" if drive_id else ""
            },
            "tags": ["Libro", "Patrimonio", "Colección 02"],
            "coordinates": [37.88, -4.77], # Córdoba
            "themes": ["CUL"],
            "description": f"{desc}. {descriptores}"
        }
        noor_docs.append(doc)
    
    # Save as JSON for the plan
    output_path = r'c:\Users\leoga\Desktop\Noor\Antigravity Macro- Proyecto Drive\scratch\extracted_books.json'
    with open(output_path, 'w', encoding='utf-8') as out:
        json.dump(noor_docs, out, indent=2, ensure_ascii=False)
    
    print(f"Extraction complete. {len(noor_docs)} books extracted to scratch/extracted_books.json")
else:
    print("Could not find DATA variable in HTML")
