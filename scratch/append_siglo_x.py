"""
APPEND SEGURO - SIGLO X → local-db.js
Opera sobre el array documents[] existente sin tocar ningún registro.
"""
import os, sys, json, re

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR   = os.path.dirname(os.path.dirname(__file__))
DB_PATH    = os.path.join(BASE_DIR, 'js', 'data', 'local-db.js')
JSON_PATH  = os.path.join(os.path.dirname(__file__), 'siglo_x_final.json')

# Leer registros a añadir
with open(JSON_PATH, 'r', encoding='utf-8') as f:
    new_records = json.load(f)

# Quitar campo interno source_folder antes de escribir
for rec in new_records:
    rec.pop('source_folder', None)

print(f"Registros a añadir: {len(new_records)}")

# Leer local-db.js actual
with open(DB_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Verificar que el archivo termina correctamente
print(f"Tamaño actual local-db.js: {len(content):,} bytes")

# Contar registros actuales (aproximado por conteo de "id":)
current_count = content.count('"id":')
print(f"Registros actuales (aprox): {current_count}")

# Buscar el cierre del array documents[] y del objeto window.NoorLocalDB
# El patrón es:   ]
#               }
# al final del archivo
# Necesitamos insertar justo ANTES del cierre del array documents[]

# Localizar la última llave de cierre del array
# El archivo termina en:   ]
#                         }
# buscamos la posición del "]" que cierra documents
# El final del archivo debe ser similar a:
#   ...last_record
# }
# ]
# }
# Estrategia: encontrar la posición del penúltimo "}" que cierra el último doc
# y luego el "]" que cierra documents[], y luego "}" que cierra NoorLocalDB

# Más robusto: buscar el final del último registro JSON y la secuencia ]
# que cierra el array, e insertar antes de ese "]"

# Encontrar la posición donde empieza el cierre del array
# Pattern: \n  ]\n} (fin del archivo)
END_PATTERN = re.compile(r'\n\s*\]\s*\n\s*\}\s*\n?\s*$', re.MULTILINE)
m = END_PATTERN.search(content)

if not m:
    # Alternativa: buscar último ] seguido de \n}
    last_bracket = content.rfind('\n  ]')
    if last_bracket == -1:
        last_bracket = content.rfind(']')
    print(f"Usando posición alternativa: {last_bracket}")
    insert_pos = last_bracket
else:
    # Insertar justo antes del "\n  ]"
    insert_pos = m.start()
    print(f"Patrón encontrado en posición: {insert_pos}")

# Generar el snippet de nuevos registros
lines = ["\n"]
lines.append("    // ─── ANÁLISIS BIBLIOGRÁFICO — SIGLO X ───")
lines.append(f"    // Total: {len(new_records)} documentos | Fuentes: WoS 2026 + 01_Siglos_X_al_XII")
lines.append(f"    // Versión: v3.2-Sonnet-X | Generado: 2026-05-01")
lines.append("")

for i, rec in enumerate(new_records):
    json_str = json.dumps(rec, ensure_ascii=False, indent=6)
    # Indentar correctamente (el array usa 4 espacios en local-db.js)
    json_str = json_str.replace('\n', '\n    ')
    comma = "," if i < len(new_records) - 1 else ","
    lines.append(f"    {json_str}{comma}")

snippet = '\n'.join(lines)

# Construir nuevo contenido
new_content = content[:insert_pos] + snippet + content[insert_pos:]

# Verificación de integridad básica
new_count = new_content.count('"id":')
print(f"\nRegistros tras append: {new_count}")
print(f"Diferencia: +{new_count - current_count}")
print(f"Tamaño nuevo: {len(new_content):,} bytes")

# Backup
backup_path = DB_PATH + '.backup_siglo_x'
with open(backup_path, 'w', encoding='utf-8') as f:
    f.write(content)
print(f"\nBackup guardado: {backup_path}")

# Escribir archivo actualizado
with open(DB_PATH, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"✓ local-db.js actualizado con {len(new_records)} nuevos registros del Siglo X")
