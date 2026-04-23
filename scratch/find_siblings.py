import urllib.request, json, urllib.parse

API_KEY = 'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs'
ROOT_ID = '1pbzpdOKtL3b9O82Te5ioAg7V1m2I9a9T'

def get_file_parents(file_id):
    url = f"https://www.googleapis.com/drive/v3/files/{file_id}?key={API_KEY}&fields=id,name,parents"
    try:
        r = urllib.request.urlopen(url)
        data = json.loads(r.read().decode('utf-8'))
        return data.get('parents', [])
    except Exception as e:
        print(f"Error: {e}")
        return []

parents = get_file_parents(ROOT_ID)
print(f"Parents of root {ROOT_ID}: {parents}")

for p in parents:
    # List siblings
    url = f"https://www.googleapis.com/drive/v3/files?q='{p}' in parents and mimeType = 'application/vnd.google-apps.folder'&key={API_KEY}&fields=files(id,name)"
    try:
        r = urllib.request.urlopen(url)
        data = json.loads(r.read().decode('utf-8'))
        siblings = data.get('files', [])
        for s in siblings:
            print(f"Sibling Folder: {s['name']} ({s['id']})")
    except Exception as e:
        print(f"Error listing siblings of {p}: {e}")
