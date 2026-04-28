import re
import collections

db_path = 'js/data/local-db.js'
with open(db_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all categories (supporting both "category": and category:)
# Handle single and double quotes for values
categories = re.findall(r'\"?category\"?:\s*[\'\"](.*?)[\'\"]', content)
counts = collections.Counter(categories)

print("Document counts by category:")
total = 0
for cat, count in sorted(counts.items()):
    print(f"  {cat}: {count}")
    total += count

print(f"Total documents: {total}")
