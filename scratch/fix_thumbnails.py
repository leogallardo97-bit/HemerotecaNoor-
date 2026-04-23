import re

DB_PATH = 'c:/Users/leoga/Desktop/Noor/Antigravity Macro- Proyecto Drive/js/data/local-db.js'

with open(DB_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace lh3 URLs with standard Drive thumbnail URLs for better reliability
def fix_thumb(match):
    drive_id = match.group(1)
    return f'"driveId": "{drive_id}"'

# We already have driveId. We want to update thumbnail to https://drive.google.com/thumbnail?id={driveId}&sz=w1000
# Regex to find media blocks and update thumbnail based on driveId in the same object
blocks = re.findall(r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}', content)
new_content = content

for block in blocks:
    if '"category": "03_RECETARIO"' not in block: continue
    
    did_match = re.search(r'"driveId":\s*"([^"]+)"', block)
    if not did_match: continue
    
    drive_id = did_match.group(1)
    if drive_id.startswith('local-rec'): continue # skip unlinked
    
    new_thumb = f"https://drive.google.com/thumbnail?id={drive_id}&sz=w1000"
    
    new_block = block
    new_block = re.search(r'"thumbnail":\s*"[^"]*"', new_block)
    if new_block:
        target = new_block.group(0)
        replacement = f'"thumbnail": "{new_thumb}"'
        new_content = new_content.replace(block, block.replace(target, replacement))

with open(DB_PATH, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Thumbnails normalizados a formato estándar de Drive.")
