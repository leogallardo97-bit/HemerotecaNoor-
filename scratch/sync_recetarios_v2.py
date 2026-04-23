import urllib.request, json, urllib.parse, re, os

API_KEY = 'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs'
FOLDER_ID = '1vOTnuDQ8R3Ij3SbLsEPTFZDRQYuqEtPc'
DB_PATH = 'c:/Users/leoga/Desktop/Noor/Antigravity Macro- Proyecto Drive/js/data/local-db.js'

def list_drive_files(folder_id):
    files = []
    page_token = None
    while True:
        query = urllib.parse.quote(f"'{folder_id}' in parents and trashed = false")
        url = f"https://www.googleapis.com/drive/v3/files?q={query}&key={API_KEY}&fields=nextPageToken,files(id,name,thumbnailLink)&pageSize=1000"
        if page_token: url += f"&pageToken={page_token}"
        r = urllib.request.urlopen(url)
        data = json.loads(r.read().decode('utf-8'))
        files.extend(data.get('files', []))
        page_token = data.get('nextPageToken')
        if not page_token: break
    return files

def normalize(name):
    name = re.sub(r'\.[a-zA-Z0-9]+$', '', name)
    return re.sub(r'[^a-zA-Z0-9]', '', name).lower()

drive_files = list_drive_files(FOLDER_ID)
drive_map = {normalize(f['name']): f for f in drive_files}

with open(DB_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# We look for each individual object in the array
# This regex captures each { ... } object in the documents array
blocks = re.findall(r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}', content)

new_content = content
count = 0

for block in blocks:
    if '"category": "03_RECETARIO"' not in block and '03_RECETARIO' not in block:
        continue
        
    # Extract filename from localPath
    path_match = re.search(r'"localPath":\s*".*?/([^/"]+)\.pdf"', block)
    if not path_match: continue
    
    filename = path_match.group(1)
    norm_name = normalize(filename)
    
    if norm_name in drive_map:
        f = drive_map[norm_name]
        drive_id = f['id']
        thumb_url = f.get('thumbnailLink', '').replace('=s220', '=s1024') if f.get('thumbnailLink') else f"https://drive.google.com/thumbnail?id={drive_id}&sz=w1000"
        
        new_block = block
        new_block = re.sub(r'"driveId":\s*".*?"', f'"driveId": "{drive_id}"', new_block)
        
        # Specific handling for thumbnail within media object
        if '"media":' in new_block:
            # Replace thumbnail inside media
            new_block = re.sub(r'("thumbnail":\s*")[^"]*(")', r'\1' + thumb_url + r'\2', new_block)
            # Add or update pdf field
            if '"pdf":' in new_block:
                new_block = re.sub(r'("pdf":\s*")[^"]*(")', r'\1' + drive_id + r'\2', new_block)
            else:
                new_block = new_block.replace('"thumbnail":', f'"pdf": "{drive_id}", "thumbnail":')
        
        new_content = new_content.replace(block, new_block)
        count += 1

with open(DB_PATH, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Sincronización FINAL completa. {count} recetarios vinculados de forma precisa.")
