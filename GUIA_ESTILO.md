# 📜 Guía de Estilo: Ingesta de Documentos (Noor Archive)

Esta guía define el protocolo oficial para asegurar que los datos del **Volumen 2 (Libros)** y futuros documentos se visualicen correctamente en la Línea de Tiempo y el Mapa Histórico.

## 1. Protocolos de Formato Obligatorios

| Campo | Formato | Ejemplo | Por qué es crítico |
| :--- | :--- | :--- | :--- |
| **Fecha (Exacta)** | `YYYY-MM-DD` | `1085-05-25` | Ordena los hitos en la Línea de Tiempo. |
| **Año** | `Número` | `1085` | Define la posición base si no hay fecha exacta. |
| **Coordenadas** | `Latitud` / `Longitud` | `37.88 / -4.77` | Sitúa el documento en el Mapa Histórico. |
| **Multivalores** | Separados por `\|` | `POL\|SOC\|CUL` | Permite filtrar por varios temas a la vez. |

## 2. Taxonomía Cerrada

Para evitar errores de búsqueda, usa **exactamente** estas claves en las columnas de Regiones y Temas:

### 🌍 Regiones
`QURTUBA`, `ISHBILIYYA`, `TULAYTULAY`, `GARNATA`, `SARAQUSTA`, `MALAGA`, `ALMERIA`, `BALANSIYA`, `NORTH_AFRICA`, `GENERAL`

### 🎭 Dimensiones Temáticas
`POL` (Político), `SOC` (Social), `CUL` (Cultural), `ECO` (Económico), `REL` (Religioso), `MIL` (Militar), `SCI` (Científico), `ART` (Artístico)

---

## 3. Ejemplo de "Fila Perfecta" (CSV)

Si vas a realizar una **Carga Masiva**, asegúrate de que tu archivo CSV (delimitado por `;`) tenga este aspecto:

```csv
id;title;year;exact_date;type;eraId;language;driveFileId;lat;lng;description;tags;regions;themes
lib-01;Tratado de Medicina;1000;1000-01-01;manuscript;S10;ar;ID_DRIVE;37.88;-4.77;Un manuscrito fundamental.;medicina|omeya;QURTUBA;SCI|CUL
```

## 4. Cómo obtener coordenadas
1. Abre **Google Maps**.
2. Haz clic derecho en el lugar exacto.
3. El primer número es la **Latitud** y el segundo la **Longitud**. Copia y pega cada uno en su columna.

---

> [!TIP]
> **Consistencia = Calidad.** Un solo error en el formato de fecha (`25/05/1085` en lugar de `1085-05-25`) hará que el documento no aparezca en la cronología.
