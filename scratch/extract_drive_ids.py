"""
patch_local_db_v2.py
Corrige driveId en 02_LIBROS: usa el valor de media.pdf (ya correcto) 
como fuente de verdad para actualizar driveId en cada entrada.

Estructura actual de cada entrada 02_LIBROS:
  "localPath": "...02_LIBROS/INT_2018_05.pdf",
  "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",   <-- INCORRECTO (folder)
  "media": {
    "thumbnail": "...?id=1sq-NpgfpGfx...&sz=w1000",
    "pdf": "1sq-NpgfpGfx..."                          <-- CORRECTO (archivo individual)
  }

Objetivo: driveId = media.pdf (para cada entrada)
"""
import sys, re

sys.stdout.reconfigure(encoding='utf-8')

OLD_FOLDER_ID = "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
DB_PATH = r"c:\Users\leoga\Desktop\Noor\Antigravity Macro- Proyecto Drive\js\data\local-db.js"

with open(DB_PATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

updated = 0
total_lines = len(lines)

i = 0
while i < total_lines:
    # Detectar línea con driveId incorrecto
    if f'"driveId": "{OLD_FOLDER_ID}"' in lines[i]:
        # Buscar el valor de media.pdf en las siguientes 8 líneas
        real_id = None
        for j in range(i + 1, min(i + 10, total_lines)):
            # Buscar "pdf": "ID"
            match = re.search(r'"pdf":\s*"([A-Za-z0-9_\-]+)"', lines[j])
            if match:
                candidate = match.group(1)
                if candidate != OLD_FOLDER_ID and len(candidate) > 20:
                    real_id = candidate
                    break
            # También buscar en thumbnail URL el ID
            match2 = re.search(r'thumbnail.*?id=([A-Za-z0-9_\-]+)&sz=', lines[j])
            if match2:
                candidate = match2.group(1)
                if candidate != OLD_FOLDER_ID and len(candidate) > 20:
                    real_id = candidate
                    break
        
        if real_id:
            old_line = lines[i]
            lines[i] = lines[i].replace(
                f'"driveId": "{OLD_FOLDER_ID}"',
                f'"driveId": "{real_id}"'
            )
            updated += 1
            # Extraer localPath de contexto para log
            for k in range(max(0, i - 5), i):
                lp_match = re.search(r'/([^/]+\.pdf)"', lines[k])
                if lp_match:
                    print(f"  [{updated:3d}] {lp_match.group(1)} -> {real_id}")
                    break
        else:
            print(f"  [WARN] Línea {i+1}: no se encontró real_id para entrada con folder ID")
    
    i += 1

print(f"\nTotal actualizadas: {updated}")

if updated > 0:
    with open(DB_PATH, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("local-db.js guardado correctamente.")
else:
    print("No se realizaron cambios.")
