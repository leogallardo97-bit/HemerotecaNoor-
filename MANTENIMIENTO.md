# 🛠️ Manual de Mantenimiento — Archivo Noor (Vol. 2)

Este documento describe el protocolo de administración técnica para asegurar la persistencia y escalabilidad de la Hemeroteca Digital.

## 1. Protocolo de Backup Semanal
Dado que los cambios realizados en el panel de Admin se guardan localmente en el navegador (`IndexedDB`), es **obligatorio** exportar los datos para que sean permanentes.

1.  **Exportar metadatos.json**:
    *   Abre el Admin (`Ctrl + Shift + A`).
    *   Ve a la pestaña **"Exportar Datos"**.
    *   Haz clic en **"Descargar metadatos.json"**.
    *   Este archivo contiene todos los documentos del Volumen 2.
2.  **Exportar Backup Completo**:
    *   En la misma pestaña, haz clic en **"Descargar backup-noor.json"**.
    *   Este archivo incluye tus notas personales, colecciones y documentos. Guárdalo en tu Google Drive personal como copia de seguridad.

## 2. Actualización en GitHub (Despliegue Permanente)
Para que el resto del equipo doctoral vea los nuevos documentos cargados:

1.  Copia el archivo `metadatos.json` descargado.
2.  Sube el archivo al repositorio de GitHub, reemplazando el archivo existente en la carpeta `js/data/` (o la ubicación configurada).
3.  **Confirmación**: Una vez subido a GitHub, el "Ecosistema de Ingesta" leerá automáticamente estos archivos para todos los usuarios.

## 3. Guía de Ingesta Masiva (CSV)
Al usar el **BatchLoader**, asegúrate de seguir el **Protocolo de Datos Obligatorios**:
*   **Delimitador**: `;` (Punto y coma).
*   **Campos Múltiples**: `|` (Barra vertical).
*   **Fechas**: Formato `YYYY-MM-DD` para máxima precisión en la Línea de Tiempo.
*   **IDs de Drive**: Asegúrate de que los archivos tengan permisos de "Cualquiera con el enlace puede ver" para que las miniaturas HQ carguen correctamente.

---
**Contacto Técnico**: Consultar con el Desarrollador Senior de Antigravity para ajustes en el motor de renderizado.
*Versión del Sistema: 1.7.5 Stable*
