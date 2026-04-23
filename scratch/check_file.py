import urllib.request, json, urllib.parse

API_KEY = 'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs'
TARGET_ID = '1B9MDPQFztoQorbSS069EMfxFDt951CPt'

def get_file_details(file_id):
    url = f"https://www.googleapis.com/drive/v3/files/{file_id}?key={API_KEY}&fields=id,name,parents"
    try:
        r = urllib.request.urlopen(url)
        data = json.loads(r.read().decode('utf-8'))
        return data
    except Exception as e:
        print(f"Error getting file {file_id}: {e}")
        return None

file = get_file_details(TARGET_ID)
if file:
    print(f"File: {file['name']} ({file['id']}) Parents: {file.get('parents', [])}")
