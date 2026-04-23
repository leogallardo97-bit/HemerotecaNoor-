import re

DB_PATH = 'c:/Users/leoga/Desktop/Noor/Antigravity Macro- Proyecto Drive/js/data/local-db.js'

with open(DB_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# We look for recetarios and ensure driveFileId is present in media for absolute compatibility with results-grid.js
blocks = re.findall(r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}', content)
new_content = content

for block in blocks:
    if '"category": "03_RECETARIO"' not in block: continue
    
    did_match = re.search(r'"driveId":\s*"([^"]+)"', block)
    if not did_match: continue
    
    drive_id = did_match.group(1)
    if drive_id.startswith('local-rec'): continue
    
    new_block = block
    # If media doesn't have driveFileId, add it
    if '"media": {' in new_block and '"driveFileId":' not in new_block:
        new_block = new_block.replace('"media": {', f'"media": {{ "driveFileId": "{drive_id}",')
        new_content = new_content.replace(block, new_block)

with open(DB_PATH, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("driveFileId inyectado en objetos media para máxima compatibilidad.")
