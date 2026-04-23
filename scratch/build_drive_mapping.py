import urllib.request, json, urllib.parse

API_KEY = 'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs'

def search_pdfs():
    # Search for any PDF file
    query = urllib.parse.quote("mimeType = 'application/pdf' and trashed = false")
    url = f"https://www.googleapis.com/drive/v3/files?q={query}&key={API_KEY}&fields=files(id,name)&pageSize=1000"
    try:
        r = urllib.request.urlopen(url)
        data = json.loads(r.read().decode('utf-8'))
        return data.get('files', [])
    except Exception as e:
        print(f"Error searching PDFs: {e}")
        return []

print("Searching for all PDFs on Drive...")
files = search_pdfs()
print(f"Found {len(files)} PDFs.")

# Map names to IDs
name_to_id = {f['name']: f['id'] for f in files}

# Also try name with .pdf removed and common variations
for f in files:
    name_no_ext = f['name'].rsplit('.', 1)[0]
    name_to_id[name_no_ext] = f['id']

# Save mapping to a file for later use
with open('scratch/drive_mapping.json', 'w', encoding='utf-8') as f:
    json.dump(name_to_id, f, indent=2, ensure_ascii=False)

print("Mapping saved to scratch/drive_mapping.json")
