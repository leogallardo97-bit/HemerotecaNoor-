import re
import os

db_path = 'js/data/local-db.js'
if not os.path.exists(db_path):
    print(f"Error: {db_path} not found")
    exit(1)

with open(db_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Count occurrences of "id":
doc_count = len(re.findall(r'\"id\":', content))

# Count occurrences of "category": "06_PRODUCTO_CONTEXTUALIZACION"
sec06_count = len(re.findall(r'\"category\": \"06_PRODUCTO_CONTEXTUALIZACION\"', content))

print(f"Total documents (ID occurrences): {doc_count}")
print(f"Section 06 documents: {sec06_count}")

# Check sections array
sections_match = re.search(r'sections: \[(.*?)\]', content, re.DOTALL)
if sections_match:
    sections_content = sections_match.group(1)
    sec06_in_sections = 'sec-06' in sections_content
    print(f"Section 06 in sections array: {sec06_in_sections}")
else:
    print("Error: sections array not found")
