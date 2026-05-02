"""
REPAIR + APPEND SEGURO - SIGLO X FASE 1
Restaura el backup limpio y hace append correcto de los 152 docs Siglo X
"""
import os, sys, json, re

sys.stdout.reconfigure(encoding='utf-8')

SCRIPT_DIR = os.path.dirname(__file__)
BASE_DIR   = os.path.dirname(SCRIPT_DIR)
DB_PATH    = os.path.join(BASE_DIR, 'js', 'data', 'local-db.js')
BACKUP     = DB_PATH + '.backup_sx_phase1'
JSON_PATH  = os.path.join(SCRIPT_DIR, 'siglo_x_wos_phase1.json')

# ── Restaurar backup limpio ──
if not os.path.exists(BACKUP):
    print("ERROR: Backup no encontrado")
    sys.exit(1)

with open(BACKUP, 'r', encoding='utf-8') as f:
    content = f.read()
print(f"[1/5] Backup restaurado: {len(content):,} bytes")

# ── Verificar estructura del backup ──
# Mostrar los últimos 300 chars para confirmar
print(f"       Cierre del archivo: ...{repr(content[-200:])}")

# ── Cargar registros a añadir ──
with open(JSON_PATH, 'r', encoding='utf-8') as f:
    records = json.load(f)
print(f"[2/5] Registros a añadir: {len(records)}")

# ── Detectar la indentación real del archivo ──
# Buscar el primer documento del array para ver cuántos espacios usa
first_doc_match = re.search(r'documents\s*:\s*\[\s*\n(\s+)\{', content)
if first_doc_match:
    indent = first_doc_match.group(1)
    print(f"[3/5] Indentación detectada: {len(indent)} espacios")
else:
    indent = '    '  # fallback 4 espacios
    print(f"[3/5] Indentación fallback: {len(indent)} espacios")

# ── Encontrar la posición correcta de inserción ──
# Estrategia: buscar el cierre del array documents[]
# El patrón debe ser: último } del último doc, seguida de \n  ] que cierra documents
# y NO sections (que ya está cerrado antes)

# Buscar "documents: [" y luego encontrar su cierre correspondiente
docs_start = content.find('documents:')
if docs_start == -1:
    docs_start = content.find('documents :')
print(f"       'documents:' encontrado en posición: {docs_start}")

# Encontrar el ] que cierra documents[] usando búsqueda desde el final
# El archivo termina con:  ]\n}; o  ]\n}\n
# El último ] antes del }; es el cierre de documents[]
end_of_file = content.rstrip()
print(f"       Últimos 50 chars (stripped): {repr(end_of_file[-50:])}")

# El archivo debe terminar en  ]\n}; o similar
# Buscamos la posición del penúltimo ] (el último cierra el array documents, el  } cierra el objeto)
# Método: desde el final, saltar el cierre del objeto NoorLocalDB

# Encontrar la posición del ] que cierra documents[]
# buscando hacia atrás desde el final del archivo
pos = len(content) - 1
# Saltar whitespace y ';' al final
while pos >= 0 and content[pos] in ' \t\n\r;':
    pos -= 1
# Ahora debería estar en }
if content[pos] == '}':
    pos -= 1
    # Saltar whitespace
    while pos >= 0 and content[pos] in ' \t\n\r':
        pos -= 1
    # Ahora debería estar en ] que cierra documents
    if content[pos] == ']':
        insert_pos = pos  # Insertar ANTES de este ]
        print(f"[4/5] Posición de inserción correcta encontrada: {insert_pos}")
        print(f"       Contexto: ...{repr(content[insert_pos-100:insert_pos+10])}")
    else:
        print(f"ERROR: Carácter inesperado antes de cierre: '{content[pos]}'")
        sys.exit(1)
else:
    print(f"ERROR: Cierre inesperado del archivo: '{content[pos]}'")
    sys.exit(1)

# ── Verificar que el último documento existente tiene coma al final ──
# Buscar el último } antes del insert_pos
last_doc_end = content.rfind('}', 0, insert_pos)
# Verificar si hay coma después
after_last = content[last_doc_end+1:insert_pos].strip()
print(f"       Entre último doc y ]: '{repr(after_last)}'")
needs_leading_comma = ',' not in after_last

# ── Generar snippet correctamente indentado ──
lines = []
lines.append(f"\n\n{indent}// ─── ANÁLISIS BIBLIOGRÁFICO — SIGLO X (WoS) ───")
lines.append(f"{indent}// {len(records)} docs | Carpeta: Siglo X Al Andalus | eraId: S10")

for i, rec in enumerate(records):
    # Serializar con la indentación del archivo
    indent_size = len(indent)
    json_str = json.dumps(rec, ensure_ascii=False, indent=indent_size)
    # Añadir indentación base a cada línea
    lines_json = json_str.split('\n')
    lines_json = [indent + line if i_line > 0 else indent + line 
                  for i_line, line in enumerate(lines_json)]
    obj_str = '\n'.join(lines_json)
    lines.append(f"{obj_str},")

snippet = '\n'.join(lines) + '\n'

# ── Insertar en posición correcta ──
# Asegurarnos de que el último doc existente tenga coma
if needs_leading_comma:
    # Añadir coma después del último }
    content = content[:last_doc_end+1] + ',' + content[last_doc_end+1:]
    insert_pos += 1
    print("       Coma añadida al último registro existente")

new_content = content[:insert_pos] + snippet + content[insert_pos:]

# ── Verificación final ──
# El archivo debe terminar en ]\n};
end_check = new_content.rstrip()
print(f"\n[5/5] Verificación cierre: ...{repr(end_check[-80:])}")

# Contar documentos nuevos
old_doc_count = content.count('"driveFileId"')
new_doc_count = new_content.count('"driveFileId"')
print(f"       driveFileId antes: {old_doc_count} → después: {new_doc_count} (+{new_doc_count - old_doc_count})")

# Escribir archivo
with open(DB_PATH, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"\n✓ local-db.js reparado y actualizado correctamente")
print(f"  Tamaño: {len(new_content):,} bytes")
