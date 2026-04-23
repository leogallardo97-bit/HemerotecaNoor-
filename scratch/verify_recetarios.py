import urllib.request, json, urllib.parse

API_KEY = 'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs'
FOLDER_ID = '1vOTnuDQ8R3Ij3SbLsEPTFZDRQYuqEtPc'

def list_folder_files(folder_id):
    files = []
    page_token = None
    while True:
        query = urllib.parse.quote(f"'{folder_id}' in parents and trashed = false")
        url = f"https://www.googleapis.com/drive/v3/files?q={query}&key={API_KEY}&fields=nextPageToken,files(id,name,mimeType,thumbnailLink)&pageSize=1000"
        if page_token:
            url += f"&pageToken={page_token}"
        
        try:
            r = urllib.request.urlopen(url)
            data = json.loads(r.read().decode('utf-8'))
            files.extend(data.get('files', []))
            page_token = data.get('nextPageToken')
            if not page_token:
                break
        except Exception as e:
            print(f"Error: {e}")
            break
    return files

all_files = list_folder_files(FOLDER_ID)
print(f"Total files found in 03_RECETARIO: {len(all_files)}")

for f in all_files[:10]:
    print(f"{f['name']} ({f['id']})")
