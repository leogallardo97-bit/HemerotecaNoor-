import urllib.request, json, urllib.parse

API_KEY = 'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs'
ROOT_ID = '1pbzpdOKtL3b9O82Te5ioAg7V1m2I9a9T'

def list_all_files(parent_id):
    files = []
    page_token = None
    while True:
        query = urllib.parse.quote(f"'{parent_id}' in parents and trashed = false")
        url = f"https://www.googleapis.com/drive/v3/files?q={query}&key={API_KEY}&fields=nextPageToken,files(id,name,mimeType)&pageSize=1000"
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

all_files = list_all_files(ROOT_ID)
print(f"Total files found in root: {len(all_files)}")

counts = {"01": 0, "02": 0, "03": 0, "other": 0}
for f in all_files:
    name = f['name']
    if name.startswith("01_"): counts["01"] += 1
    elif name.startswith("02_"): counts["02"] += 1
    elif name.startswith("03_"): counts["03"] += 1
    else: counts["other"] += 1

print(f"Counts: {counts}")

# Print first 5 files of each category
for cat in ["01", "02", "03"]:
    print(f"\n--- Category {cat} ---")
    cat_files = [f for f in all_files if f['name'].startswith(cat + "_")][:10]
    for f in cat_files:
        print(f"{f['name']} ({f['id']})")
