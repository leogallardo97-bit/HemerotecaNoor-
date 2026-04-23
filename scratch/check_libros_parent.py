import urllib.request, json, urllib.parse

API_KEY = 'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs'
FILE_ID = '1nv3iaDi-AGf1AgQFuvHGnjfspR7D4fU7'

def get_parents(file_id):
    url = f"https://www.googleapis.com/drive/v3/files/{file_id}?key={API_KEY}&fields=parents"
    try:
        r = urllib.request.urlopen(url)
        data = json.loads(r.read().decode('utf-8'))
        return data.get('parents', [])
    except Exception as e:
        print(f"Error: {e}")
        return []

parents = get_parents(FILE_ID)
print(f"Parents of Libros file: {parents}")
