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
    # Remove extension and special chars
    name = re.sub(r'\.[a-zA-Z0-9]+$', '', name)
    return re.sub(r'[^a-zA-Z0-9]', '', name).lower()

# 1. Get Drive Files
drive_files = list_drive_files(FOLDER_ID)
drive_map = {normalize(f['name']): f for f in drive_files}

# 2. Read DB
with open(DB_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# 3. Process recetarios
# We look for blocks that start with { and contain "category": "03_RECETARIO"
# Or just use the localPath as anchor
count = 0
for drive_name_norm, f in drive_map.items():
    drive_id = f['id']
    # Use sz=w1000 for high resolution
    thumb_url = f.get('thumbnailLink', '').replace('=s220', '=s1024') if f.get('thumbnailLink') else f"https://drive.google.com/thumbnail?id={drive_id}&sz=w1000"
    
    # We look for the entry that contains the filename in its localPath
    # Example: "localPath": ".../03_Menu_No10_Taberna_Cordoba.pdf"
    # We'll search for the drive name in the content
    
    # Escaping for regex (simple version)
    orig_name_no_ext = re.sub(r'\.[a-zA-Z0-9]+$', '', f['name'])
    
    # Try multiple variations of the name (underscores vs hyphens)
    variations = [orig_name_no_ext, orig_name_no_ext.replace('-', '_'), orig_name_no_ext.replace('_', '-')]
    
    found = False
    for var in set(variations):
        # Regex to find the driveId field within the object that has this name
        # We look for the entry that has this name in its localPath or title
        pattern = r'(\{[^}]*?"localPath":\s*".*?' + re.escape(var) + r'.*?".*?\})'
        matches = re.finditer(pattern, content, re.DOTALL)
        
        for match in matches:
            block = match.group(1)
            # Replace driveId
            new_block = re.sub(r'"driveId":\s*".*?"', f'"driveId": "{drive_id}"', block)
            # Replace thumbnail
            new_block = re.sub(r'"thumbnail":\s*".*?"', f'"thumbnail": "{thumb_url}"', new_block)
            # Replace pdf field if exists
            new_block = re.sub(r'"pdf":\s*".*?"', f'"pdf": "{drive_id}"', new_block)
            
            content = content.replace(block, new_block)
            found = True
            count += 1
            break
        if found: break

# 4. Save DB
with open(DB_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Sincronización completa. {count} recetarios vinculados con éxito.")
