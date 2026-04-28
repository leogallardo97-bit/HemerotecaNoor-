import re
import os

db_path = 'js/data/local-db.js'
with open(db_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
current_section = None

for line in lines:
    if '--- 01_REVISTAS ---' in line:
        current_section = '01_REVISTAS'
    elif '--- 02_LIBROS ---' in line:
        current_section = '02_LIBROS'
    elif '--- 03_RECETARIO ---' in line:
        current_section = '03_RECETARIO'
    elif '--- 04_CONTENIDO_WEB ---' in line:
        current_section = '04_CONTENIDO_WEB'
    elif '--- 05_PERIODICOS ---' in line:
        current_section = '05_PERIODICOS'
    elif '--- 06_PRODUCTO_CONTEXTUALIZACION ---' in line:
        current_section = '06_PRODUCTO_CONTEXTUALIZACION'
    
    # If we are in 01 or 02 and the line starts a doc object but doesn't have category yet
    if current_section in ['01_REVISTAS', '02_LIBROS'] and 'id:' in line and 'category:' not in line:
        # Check if next few lines have category
        pass # We'll insert it after the id line
    
    new_lines.append(line)
    
    if current_section in ['01_REVISTAS', '02_LIBROS'] and 'id:' in line:
        # Check if the next line is category. If not, insert it.
        # This is simplified, assuming 'id:' is always present and category should follow.
        indent = re.match(r'\s*', line).group(0)
        new_lines.append(f'{indent}category: "{current_section}",\n')

# Note: This simple approach might add duplicates if category already exists.
# Let's do a more robust replacement using regex.

content = "".join(lines)

def add_category(match):
    prefix = match.group(1)
    doc_id = match.group(2)
    rest = match.group(3)
    section = match.group(4)
    if 'category' in match.group(0):
        return match.group(0)
    return f'{prefix}id: {doc_id},\n      category: "{section}",{rest}'

# Pattern to find docs without category in specific comment blocks
# This is hard to do with regex on the whole file accurately.
# Let's use a smarter state-machine.

final_lines = []
current_section = None
for line in lines:
    if '--- 01_REVISTAS ---' in line: current_section = '01_REVISTAS'
    if '--- 02_LIBROS ---' in line: current_section = '02_LIBROS'
    if '--- 03_RECETARIO ---' in line: current_section = '03_RECETARIO'
    if '--- 04_CONTENIDO_WEB ---' in line: current_section = '04_CONTENIDO_WEB'
    if '--- 05_PERIODICOS ---' in line: current_section = '05_PERIODICOS'
    if '--- 06_PRODUCTO_CONTEXTUALIZACION ---' in line: current_section = '06_PRODUCTO_CONTEXTUALIZACION'

    if current_section in ['01_REVISTAS', '02_LIBROS'] and ('id:' in line or '"id":' in line):
        if 'category' not in line:
            final_lines.append(line)
            indent = "      "
            final_lines.append(f'{indent}category: "{current_section}",\n')
            continue
    
    final_lines.append(line)

with open(db_path, 'w', encoding='utf-8') as f:
    f.writelines(final_lines)

print("Fixed categories for 01 and 02.")
