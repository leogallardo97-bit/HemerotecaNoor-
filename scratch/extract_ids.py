import re
from collections import Counter

try:
    with open('js/data/local-db.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    ids = re.findall(r'"driveId":\s*"([^"]+)"', content)
    counts = Counter(ids)
    
    print("Unique Drive IDs found in local-db.js:")
    for id, count in counts.items():
        print(f"{id}: {count}")

except Exception as e:
    print(f"Error: {e}")
