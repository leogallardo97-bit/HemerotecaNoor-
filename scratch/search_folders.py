import urllib.request, json, urllib.parse

API_KEY = 'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs'

def find_folder(name):
    query = urllib.parse.quote(f"mimeType = 'application/vnd.google-apps.folder' and name = '{name}' and trashed = false")
    url = f"https://www.googleapis.com/drive/v3/files?q={query}&key={API_KEY}&fields=files(id,name)"
    try:
        r = urllib.request.urlopen(url)
        data = json.loads(r.read().decode('utf-8'))
        return data.get('files', [])
    except Exception as e:
        print(f"Error searching for {name}: {e}")
        return []

folders = find_folder("03_RECETARIO")
if folders:
    for f in folders:
        print(f"Found Folder: {f['name']} ({f['id']})")
else:
    print("Folder not found.")

folders_libros = find_folder("02_LIBROS")
if folders_libros:
    for f in folders_libros:
        print(f"Found Folder: {f['name']} ({f['id']})")
