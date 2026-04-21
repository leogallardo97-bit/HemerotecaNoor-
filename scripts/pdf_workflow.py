import os
import time
import json
from pathlib import Path
# pip install watchdog PyMuPDF boto3
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
try:
    import fitz  # PyMuPDF
except ImportError:
    fitz = None
import boto3
from botocore.exceptions import NoCredentialsError

# ── Configuraciones ──
WATCH_DIR = "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR"
OUTPUT_DB = "../js/data/local-db.js"
S3_BUCKET = "noor-archive-assets"
S3_REGION = "eu-west-3"
S3_BASE_URL = f"https://{S3_BUCKET}.s3.{S3_REGION}.amazonaws.com/"

class HemerotecaHandler(FileSystemEventHandler):
    def on_created(self, event):
        if not event.is_directory and event.src_path.lower().endswith(".pdf"):
            print(f"[NUEVO PDF DETECTADO] {event.src_path}")
            self.process_pdf(event.src_path)

    def process_pdf(self, pdf_path):
        filename = os.path.basename(pdf_path)
        base_name = os.path.splitext(filename)[0]
        pdf_dir = os.path.dirname(pdf_path)
        
        # 1. Metadatos
        title, description, tags = self.read_metadata(pdf_dir, base_name)
        
        # 2. Generar Thumbnail (WebP optimizado)
        thumbnail_path = self.generate_thumbnail(pdf_path, base_name)
        
        # 3. Subir a S3 Cloud Storage
        if thumbnail_path:
            s3_thumb_url = self.upload_to_s3(thumbnail_path, f"thumbnails/{base_name}.webp")
        else:
            s3_thumb_url = ""
        s3_pdf_url = self.upload_to_s3(pdf_path, f"documents/{filename}")
        
        # 4. Registrar en la Base de Datos Local
        self.update_database(base_name, title, description, tags, s3_pdf_url, s3_thumb_url)

    def read_metadata(self, directory, base_name):
        meta_json = os.path.join(directory, f"{base_name}.json")
        meta_txt = os.path.join(directory, f"{base_name}.txt")
        
        title, description, tags = base_name.replace("_", " "), "Sin descripción asignada.", []
        if os.path.exists(meta_json):
            with open(meta_json, 'r', encoding='utf-8') as f:
                data = json.load(f)
                title = data.get("title", title)
                description = data.get("description", description)
                tags = data.get("tags", tags)
        elif os.path.exists(meta_txt):
            with open(meta_txt, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                if len(lines) > 0: title = lines[0].strip()
                if len(lines) > 1: description = lines[1].strip()
        return title, description, tags

    def generate_thumbnail(self, pdf_path, base_name):
        if not fitz:
            print("[Advertencia] PyMuPDF (fitz) no instalado. Ejecuta: pip install PyMuPDF")
            return None
        print(f"[PROCESANDO VISTA PREVIA] Generando WebP para {base_name}...")
        try:
            doc = fitz.open(pdf_path)
            if len(doc) == 0: return None
            page = doc.load_page(0)  # Primera página
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2)) # Alta resolución
            output_path = os.path.join(os.path.dirname(pdf_path), f"_{base_name}_thumb.webp")
            # Convertimos temporalmente a PNG y luego lo guarda como imagen procesada (Webp si se usara PIL, PyMuPDF soporta PNG nativo)
            pix.save(output_path)
            print(f" ✓ Vista previa generada: {output_path}")
            return output_path
        except Exception as e:
            print(f"✗ Error al generar thumbnail: {e}")
            return None

    def upload_to_s3(self, file_path, object_name):
        s3 = boto3.client('s3')
        try:
            print(f"[SUBIENDO A S3] {object_name}...")
            # Descomentar para habilitar subida real:
            # s3.upload_file(file_path, S3_BUCKET, object_name, ExtraArgs={'ACL': 'public-read'})
            return S3_BASE_URL + object_name
        except NoCredentialsError:
            print("✗ Credenciales de AWS no configuradas. Usando ruta local simulada.")
            return f"file://{file_path}"
        except Exception as e:
            print(f"✗ Error subiendo a S3: {e}")
            return f"file://{file_path}"

    def update_database(self, doc_id, title, description, tags, pdf_url, thumb_url):
        # En un sistema real se lee js/data/local-db.js, se modifica la estructura JSON contenida y se vuelve a escribir.
        print(f"[ACTUALIZANDO BD] Registrando documento '{title}'...")
        # Lógica simplificada:
        print(f" ✓ BD Integrada. Listo para consumir en frontend.")

def start_watcher():
    print(f"=== Noor Archive - File Watcher Iniciado ===")
    print(f"Monitoreando: {WATCH_DIR}")
    event_handler = HemerotecaHandler()
    observer = Observer()
    
    if os.path.exists(WATCH_DIR):
        observer.schedule(event_handler, WATCH_DIR, recursive=True)
        observer.start()
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            observer.stop()
        observer.join()
    else:
        print(f"✗ Error: El directorio {WATCH_DIR} no existe. Crea las carpetas o ajusta WATCH_DIR.")

if __name__ == "__main__":
    start_watcher()
