import urllib.request, json

API_KEY = 'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs'
ROOT_FOLDER_ID = '1pbzpdOKtL3b9O82Te5ioAg7V1m2I9a9T'

def list_files(parent_id, depth=0):
    url = f"https://www.googleapis.com/drive/v3/files?q='{parent_id}'+in+parents+and+trashed=false&key={API_KEY}&fields=files(id,name,mimeType)&pageSize=1000"
    try:
        r = urllib.request.urlopen(url)
        data = json.loads(r.read().decode('utf-8'))
        for file in data.get('files', []):
            indent = "  " * depth
            print(f"{indent}{file['name']} ({file['id']}) - {file['mimeType']}")
            if file['mimeType'] == 'application/vnd.google-apps.folder':
                list_files(file['id'], depth + 1)
    except Exception as e:
        print(f"Error listing {parent_id}: {e}")

print("Listing all folders and files in Noor Root...")
list_files(ROOT_FOLDER_ID)
