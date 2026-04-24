import urllib.request, json, urllib.parse

API_KEY = 'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs'

def find_folder(name):
    query = urllib.parse.quote(f"name = '{name}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false")
    url = f"https://www.googleapis.com/drive/v3/files?q={query}&key={API_KEY}&fields=files(id,name)"
    try:
        r = urllib.request.urlopen(url)
        data = json.loads(r.read().decode('utf-8'))
        return data.get('files', [])
    except Exception as e:
        print(f"Error searching for folder {name}: {e}")
        return []

print("Searching for folders...")
collection_names = ["01_REVISTAS", "02_LIBROS", "03_RECETARIO"]
for name in collection_names:
    print(f"\nLooking for: {name}")
    folders = find_folder(name)
    if not folders:
        print("  Not found.")
    for f in folders:
        print(f"  Found: {f['name']} ({f['id']})")
