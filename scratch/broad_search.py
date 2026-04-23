import urllib.request, json, urllib.parse

API_KEY = 'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs'

def search_folders(name):
    # Use a simpler query first
    query = urllib.parse.quote(f"name contains '{name}' and mimeType = 'application/vnd.google-apps.folder'")
    url = f"https://www.googleapis.com/drive/v3/files?q={query}&key={API_KEY}&fields=files(id,name,parents)"
    try:
        r = urllib.request.urlopen(url)
        data = json.loads(r.read().decode('utf-8'))
        return data.get('files', [])
    except Exception as e:
        print(f"Error searching for folder {name}: {e}")
        return []

print("Broad search for folders...")
names_to_try = ["03_RECETARIO", "RECETARIO", "Noor_ 2026_archivos", "ARCHIVO_DIGITAL_NOOR"]
for name in names_to_try:
    folders = search_folders(name)
    for f in folders:
        print(f"Found: {f['name']} ({f['id']}) Parents: {f.get('parents', [])}")
