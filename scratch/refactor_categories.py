import re
import json

db_path = 'js/data/local-db.js'
with open(db_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define mapping
mapping = {
    '08_CD_VID_Fisico': '08_Producto_Recetarios',
    '09_CD_AUD_Digital': '09_Tarjetero',
    '10_CD_AUD_Fisico': '10_Artículos_Imagen',
    '11_MANUSCRITOS': '11_Sin clasificar'
}

# 1. Update sections array
for old_name, new_name in mapping.items():
    content = content.replace(f"label: '{old_name}'", f"label: '{new_name}'")

# 2. Update documents category field
# Use regex to find category: "OLD_NAME" or category: 'OLD_NAME'
for old_name, new_name in mapping.items():
    # Handle both double and single quotes
    content = re.sub(fr'category:\s*["\']{old_name}["\']', f'category: "{new_name}"', content)

with open(db_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated local-db.js sections and document categories.")

# 3. Update config.js
config_path = 'js/config.js'
with open(config_path, 'r', encoding='utf-8') as f:
    config_content = f.read()

for old_name, new_name in mapping.items():
    config_content = config_content.replace(f"'{old_name}':", f"'{new_name}':")

with open(config_path, 'w', encoding='utf-8') as f:
    f.write(config_content)

print("Updated config.js collections keys.")
