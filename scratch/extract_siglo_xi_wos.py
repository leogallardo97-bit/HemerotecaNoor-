# -*- coding: utf-8 -*-
"""
Extrae PDFs del Siglo XI WoS desde Google Drive Desktop.
Lee los metadatos del archivo .desktop.ini o usa win32com para obtener Drive IDs.
"""
import os
import sys
import json
import re
import hashlib
import subprocess
import ctypes
from pathlib import Path

# --- CONFIGURACIÓN ---
BASE_PATH = r"G:\Mi unidad\Noor_ 2026_archivos\Análisis_bibliométrico_temática_aplicada\Siglo Xl Wos 2026"
OUTPUT_JSON = r"C:\Users\leoga\Desktop\Noor\Antigravity Macro- Proyecto Drive\scratch\siglo_xi_wos_files.json"

# Mapeo de carpetas temáticas a códigos
THEME_MAP = {
    "politico": "POL",
    "político": "POL",
    "social": "SOC",
    "cultural": "CUL",
    "economico": "ECO",
    "económico": "ECO",
    "religioso": "REL",
    "militar": "MIL",
    "cientifico": "CIE",
    "científico": "CIE",
    "artistico": "ART",
    "artístico": "ART",
}

def get_drive_file_id(filepath):
    """
    Intenta obtener el Google Drive file ID desde el stream de metadatos del archivo.
    Google Drive Desktop almacena el ID en un alternate data stream en NTFS.
    """
    try:
        # Intentar leer el alternate data stream "Id" que Google Drive Desktop usa
        ads_path = filepath + ":Id"
        with open(ads_path, 'r', encoding='utf-8') as f:
            content = f.read().strip()
            if content:
                return content
    except Exception:
        pass
    
    try:
        # Intentar con el stream "Id" usando subprocess
        result = subprocess.run(
            ['powershell', '-Command', 
             f'Get-Content -Path "{filepath}" -Stream Id -ErrorAction SilentlyContinue'],
            capture_output=True, text=True, timeout=5
        )
        content = result.stdout.strip()
        if content and len(content) > 10:
            return content
    except Exception:
        pass
    
    return None

def get_theme_from_path(filepath):
    """Determina el tema a partir de la ruta de la carpeta."""
    path_lower = filepath.lower().replace("\\", "/")
    for key, code in THEME_MAP.items():
        if f"/{key}" in path_lower or f"/{key}/" in path_lower:
            return code
    return "CUL"  # default

def get_source_from_path(filepath):
    """Determina si es WoS o Scopus."""
    if "scopus" in filepath.lower():
        return "Scopus"
    return "WoS"

def clean_title(filename):
    """Limpia el nombre del archivo para usarlo como título."""
    title = filename.replace(".pdf", "").replace(".PDF", "")
    # Reemplazar guiones dobles usados en nombres Zotero
    return title.strip()

def generate_id(title, source):
    """Genera un ID único para el documento."""
    h = hashlib.md5((title + source).encode('utf-8')).hexdigest()[:7]
    prefix = "wos" if source == "WoS" else "sco"
    return f"bib-s11-{prefix}-{h}"

def classify_themes(title):
    """Clasifica el tema basado en palabras clave del título."""
    title_lower = title.lower()
    themes = []
    
    # Político
    pol_keywords = ["politic", "power", "califat", "taifa", "reign", "king", "emir", "sultan", 
                    "dynasty", "rule", "govern", "state", "war", "conquest", "treaty", "diplomatic"]
    # Social
    soc_keywords = ["social", "society", "community", "urban", "rural", "population", "class",
                    "gender", "women", "family", "daily life", "slave", "eunuch", "concubine"]
    # Cultural
    cul_keywords = ["cultur", "language", "literature", "poetry", "book", "manuscript", "text",
                    "translation", "knowledge", "education", "scholar", "intellectual", "arabic",
                    "andalus", "mozarab", "convivencia", "coexist", "identity"]
    # Económico
    eco_keywords = ["econom", "trade", "commerc", "market", "agrar", "agricultur", "food", 
                    "coin", "monetar", "fiscal", "tax", "wealth", "merchant"]
    # Religioso
    rel_keywords = ["religio", "islam", "christian", "jewish", "mosque", "church", "synagogue",
                    "god", "faith", "theology", "al-quran", "bible", "dhimmi", "convert", "martyr"]
    # Militar
    mil_keywords = ["militar", "army", "battle", "siege", "fortif", "castle", "war", "campaign",
                    "jihad", "crusade", "conquest", "raid", "frontier", "border"]
    # Científico
    cie_keywords = ["scienc", "medicine", "astronom", "philosoph", "mathemat", "geography", 
                    "botany", "optic", "technolog", "engineer"]
    # Artístico
    art_keywords = ["art", "architect", "mosque", "palace", "craft", "ceramic", "ivory", 
                    "textile", "decor", "ornament", "calligraph", "miniatur"]
    
    if any(kw in title_lower for kw in pol_keywords):
        themes.append("POL")
    if any(kw in title_lower for kw in soc_keywords):
        themes.append("SOC")
    if any(kw in title_lower for kw in cul_keywords):
        themes.append("CUL")
    if any(kw in title_lower for kw in eco_keywords):
        themes.append("ECO")
    if any(kw in title_lower for kw in rel_keywords):
        themes.append("REL")
    if any(kw in title_lower for kw in mil_keywords):
        themes.append("MIL")
    if any(kw in title_lower for kw in cie_keywords):
        themes.append("CIE")
    if any(kw in title_lower for kw in art_keywords):
        themes.append("ART")
    
    return list(dict.fromkeys(themes)) if themes else ["CUL"]  # unique, preserve order

def get_year_from_title(title):
    """Extrae el año del título si está presente (formato Zotero: 'Autor - AÑO - Título')."""
    match = re.search(r'\b(19|20)\d{2}\b', title)
    if match:
        return int(match.group())
    return 2020  # default

def scan_directory(base_path):
    """Escanea el directorio y extrae todos los PDFs con sus metadatos."""
    files_data = []
    seen_names = set()
    
    print(f"Escaneando: {base_path}")
    
    for root, dirs, files in os.walk(base_path):
        # Ignorar carpetas ocultas
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        
        for filename in files:
            if not filename.lower().endswith('.pdf'):
                continue
            
            filepath = os.path.join(root, filename)
            
            # Evitar duplicados por nombre
            if filename in seen_names:
                print(f"  DUPLICADO ignorado: {filename}")
                continue
            seen_names.add(filename)
            
            # Obtener Drive ID
            drive_id = get_drive_file_id(filepath)
            
            # Determinar subfolder relativo para tema
            rel_path = os.path.relpath(root, base_path)
            source = get_source_from_path(root)
            
            # Tema: primero desde carpeta, luego desde título
            folder_theme = None
            parts = rel_path.replace("\\", "/").split("/")
            for part in parts:
                part_lower = part.lower()
                for key, code in THEME_MAP.items():
                    if key in part_lower:
                        folder_theme = code
                        break
                if folder_theme:
                    break
            
            title = clean_title(filename)
            title_themes = classify_themes(title)
            
            # Priorizar tema de carpeta
            if folder_theme and folder_theme not in title_themes:
                final_themes = [folder_theme] + title_themes
            elif folder_theme:
                final_themes = title_themes
            else:
                final_themes = title_themes
            
            year = get_year_from_title(title)
            doc_id = generate_id(title, source + rel_path)
            
            entry = {
                "filename": filename,
                "filepath": filepath,
                "rel_folder": rel_path,
                "source": source,
                "drive_id": drive_id,
                "title": title,
                "year": year,
                "themes": final_themes[:3],  # max 3 temas
                "doc_id": doc_id
            }
            
            files_data.append(entry)
            status = f"✓ ID:{drive_id}" if drive_id else "⚠ Sin ID"
            print(f"  [{source}][{rel_path}] {filename[:60]} -> {status}")
    
    return files_data

if __name__ == "__main__":
    print("="*70)
    print("EXTRACTOR SIGLO XI WoS - Hemeroteca Noor")
    print("="*70)
    
    data = scan_directory(BASE_PATH)
    
    # Guardar resultado
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    # Estadísticas
    with_id = [d for d in data if d['drive_id']]
    without_id = [d for d in data if not d['drive_id']]
    
    print(f"\n{'='*70}")
    print(f"TOTAL archivos encontrados: {len(data)}")
    print(f"  Con Drive ID: {len(with_id)}")
    print(f"  Sin Drive ID: {len(without_id)}")
    print(f"Resultado guardado en: {OUTPUT_JSON}")
    
    if without_id:
        print(f"\nArchivos SIN Drive ID (necesitan extracción alternativa):")
        for d in without_id[:10]:
            print(f"  - {d['filename'][:70]}")
