import os
import pypdfium2 as pdfium
import re

db_path = "js/data/local-db.js"
thumbnails_dir = "img/thumbnails"

if not os.path.exists(thumbnails_dir):
    os.makedirs(thumbnails_dir)

# Read the local-db.js to extract paths and ids
with open(db_path, "r", encoding="utf-8") as f:
    db_content = f.read()

# Match entries with id and localPath
pattern = re.compile(r"id:\s*'([^']+)'[\s\S]*?localPath:\s*'([^']+)'")
matches = pattern.findall(db_content)

print(f"Found {len(matches)} documents in local-db.js")

for doc_id, local_path in matches:
    if os.path.exists(local_path) and local_path.lower().endswith(".pdf"):
        try:
            print(f"Processing {doc_id} -> {local_path}")
            # Load PDF
            pdf = pdfium.PdfDocument(local_path)
            # Render first page
            page = pdf[0]
            # 72 dpi is 1x, we want maybe 150-300 dpi for a good thumbnail, scale = 2 or 3
            bitmap = page.render(scale=2,
                                  # Gray color background
                                  rev_byteorder=False)
            pil_image = bitmap.to_pil()
            
            thumb_path = f"{thumbnails_dir}/{doc_id}.jpg"
            pil_image.save(thumb_path, "JPEG", quality=85)
            print(f"  OK Saved thumbnail to {thumb_path}")
            
            # Replace empty thumbnail in db_content
            # We need to find the specific block for this doc_id
            block_pattern = re.compile(rf"(id:\s*'{doc_id}'[\s\S]*?media:\s*{{\s*thumbnail:)\s*''\s*(}})")
            db_content = block_pattern.sub(rf"\1 '{thumb_path}' \2", db_content)

        except Exception as e:
            print(f"  ERROR Failed for {doc_id}: {e}")

# Write back the updated content
with open(db_path, "w", encoding="utf-8") as f:
    f.write(db_content)

print("Finished generating thumbnails and updating local-db.js")
