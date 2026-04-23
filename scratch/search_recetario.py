import urllib.request, json, urllib.parse

API_KEY = 'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs'

def search_file(name):
    query = urllib.parse.quote(f"name contains '{name}'")
    url = f"https://www.googleapis.com/drive/v3/files?q={query}&key={API_KEY}&fields=files(id,name,parents)"
    try:
        r = urllib.request.urlopen(url)
        data = json.loads(r.read().decode('utf-8'))
        return data.get('files', [])
    except Exception as e:
        print(f"Error searching for {name}: {e}")
        return []

files = search_file("2011_Noma_Menu-Degustacion_Copenhague")
for f in files:
    print(f"Found: {f['name']} ({f['id']}) Parents: {f.get('parents', [])}")
