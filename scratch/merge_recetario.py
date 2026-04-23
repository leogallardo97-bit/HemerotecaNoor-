import json
import os
import re

db_path = "js/data/local-db.js"
recetario_json_path = "scratch/recetario_docs.json"

# Load the recetario documents
with open(recetario_json_path, "r", encoding="utf-8") as f:
    recetario_text = f.read().strip()
    if recetario_text.endswith(","):
        recetario_text = recetario_text[:-1]

# Read the local-db.js
with open(db_path, "r", encoding="utf-8") as f:
    db_content = f.read()

# 1. Update sections
if "03_RECETARIO" not in db_content:
    section_entry = "    { id: 'sec-03', label: '03_RECETARIO', path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO' },"
    db_content = re.sub(r"(sections:\s*\[)", rf"\1\n{section_entry}", db_content)

# 2. Append documents
# We look for the final ] that closes the documents array.
# The structure is window.NoorLocalDB = { ..., documents: [ ... ] };
# We'll replace the last ] with the new content + ]

# Find the position of the last ] in the documents array
# Since we know the file ends with ]\n}; or similar
if recetario_text:
    # Look for the last closing bracket of the documents array
    # We can use a more specific search
    if "documents: [" in db_content:
        # Split by documents: [
        parts = db_content.split("documents: [")
        # The second part ends with ]\n};
        # We find the last ] in parts[1]
        last_bracket_idx = parts[1].rfind("]")
        if last_bracket_idx != -1:
            new_second_part = parts[1][:last_bracket_idx].rstrip()
            if not new_second_part.endswith(","):
                new_second_part += ","
            new_second_part += "\n" + recetario_text + "\n  " + parts[1][last_bracket_idx:]
            db_content = parts[0] + "documents: [" + new_second_part
        else:
            print("Could not find the end of documents array")

# Write back
with open(db_path, "w", encoding="utf-8") as f:
    f.write(db_content)

print("Successfully merged 03_RECETARIO documents into local-db.js")
