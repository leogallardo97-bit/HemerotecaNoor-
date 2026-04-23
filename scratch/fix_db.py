import re

file_path = r'c:\Users\leoga\Desktop\Noor\Antigravity Macro- Proyecto Drive\js\data\local-db.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Eliminar BOM si queda alguno
content = content.replace('\ufeff', '')

# 2. Encontrar todos los objetos de documento
# Usaremos un regex que busque bloques que contengan "03_RECETARIO" en el localPath
# y que NO tengan "driveId"

def add_drive_id(match):
    obj_content = match.group(1)
    if '"driveId"' not in obj_content and "'driveId'" not in obj_content:
        # Extraer el ID para usarlo como placeholder
        id_match = re.search(r'["\']id["\']:\s*["\']([^"\']+)["\']', obj_content)
        if id_match:
            doc_id = id_match.group(1)
            # Insertar driveId después del id
            new_obj = obj_content.replace(f'"id": "{doc_id}"', f'"id": "{doc_id}", "driveId": "{doc_id}"')
            new_obj = new_obj.replace(f"'id': '{doc_id}'", f"'id': '{doc_id}', 'driveId': '{doc_id}'")
            return '{' + new_obj + '}'
    return '{' + obj_content + '}'

# Regex para capturar objetos JSON dentro del array documents
# Buscamos objetos que tengan "03_RECETARIO" en su interior
content = re.sub(r'\{([^{}]*?"03_RECETARIO"[^{}]*?)\}', add_drive_id, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Proceso completado.")
