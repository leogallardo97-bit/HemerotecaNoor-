import os

db_path = os.path.join(os.path.dirname(__file__), '..', 'js', 'data', 'local-db.js')
new_items_path = os.path.join(os.path.dirname(__file__), '06_db.js')

with open(db_path, 'r', encoding='utf-8') as f:
    db_content = f.read()

with open(new_items_path, 'r', encoding='utf-8') as f:
    new_items_content = f.read()

# Buscar el final del array de documents
# El archivo termina con:
#     }
#   ]
# };
end_str = """    }
  ]
};"""

if end_str in db_content:
    new_end = "    },\n    // --- 06_PRODUCTO_CONTEXTUALIZACION ---\n" + new_items_content + "\n  ]\n};"
    db_content = db_content.replace(end_str, new_end)
    
    with open(db_path, 'w', encoding='utf-8') as f:
        f.write(db_content)
    print("Inyección exitosa en local-db.js")
else:
    print("No se encontró el patrón exacto del final de local-db.js")
