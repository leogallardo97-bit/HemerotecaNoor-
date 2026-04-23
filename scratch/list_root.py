import urllib.request, json, urllib.parse

API_KEY = 'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs'
ROOT_ID = '1pbzpdOKtL3b9O82Te5ioAg7V1m2I9a9T'

def list_root_contents():
    query = urllib.parse.quote(f"'{ROOT_ID}' in parents and trashed = false")
    url = f"https://www.googleapis.com/drive/v3/files?q={query}&key={API_KEY}&fields=files(id,name,mimeType)"
    try:
        r = urllib.request.urlopen(url)
        data = json.loads(r.read().decode('utf-8'))
        return data.get('files', [])
    except Exception as e:
        print(f"Error listing root: {e}")
        return []

contents = list_root_contents()
for item in contents:
    print(f"[{item['mimeType']}] {item['name']} ({item['id']})")
