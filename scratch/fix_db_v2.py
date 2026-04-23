import re

file_path = r'c:\Users\leoga\Desktop\Noor\Antigravity Macro- Proyecto Drive\js\data\local-db.js'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Si la línea contiene el ID de un recetario, le añadimos driveId y category
    if '"id": "local-rec-' in line:
        # Extraer el ID
        match = re.search(r'"id": "([^"]+)"', line)
        if match:
            doc_id = match.group(1)
            # Reemplazar la línea para añadir los campos faltantes
            line = line.replace(f'"id": "{doc_id}"', f'"id": "{doc_id}", "driveId": "{doc_id}", "category": "03_RECETARIO"')
    
    # Limpiar BOM si aparece al inicio de la línea
    line = line.lstrip('\ufeff')
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Proceso completado con éxito.")
