/**
 * ARTICLE VIEW COMPONENT
 * Presentación editorial del documento (Estilo RetroNews).
 */

const ArticleView = (() => {

  function render(doc) {
    const container = document.getElementById('article-overlay');
    if (!container) return;

    const { HISTORICAL_ERAS } = window.NoorSchema;
    const era = HISTORICAL_ERAS[doc.eraId] || {};

    container.innerHTML = `
      <div class="article-page animate-fade-in">
        <!-- HEADER EDITORIAL -->
        <header class="article-hero" style="background-image: linear-gradient(to bottom, rgba(253,248,240,0.3), var(--editorial-bg)), url('${doc.media?.thumbnail || ''}'); background-size: cover; background-position: center;">
          <div class="article-hero__content">
            <button class="article-back-btn" onclick="ArticleView.close()">
              <i data-lucide="arrow-left" width="16" height="16"></i> Volver al Archivo
            </button>
            
            <div class="article-category">${era.label || doc.eraId}</div>
            <h1 class="article-title font-serif">${doc.title}</h1>
            
            <div class="meta-bar">
              <div class="meta-item"><b>FECHA</b> ${doc.date || doc.year}</div>
              <div class="meta-item"><b>Fondo</b> ${doc.source || 'Archivo Noor'}</div>
              <div class="meta-item"><b>Idioma</b> ${doc.language.toUpperCase()}</div>
              <div class="meta-item"><b>ID</b> ${doc.id}</div>
            </div>
          </div>
        </header>

        <!-- CUERPO DEL ARTÍCULO -->
        <main class="article-body">
          <div class="article-grid">
            <div class="article-text">
              <h2 class="font-serif">Nota de Investigación</h2>
              <p>${doc.description || 'Este documento, recuperado de los fondos históricos digitales, representa un hito fundamental en la comprensión de la civilización andalusí. La preservación de este registro permite a los investigadores actuales reconstruir la narrativa de una época de transformación y esplendor intelectual.'}</p>
              
              <p>El análisis paleográfico sugiere que el documento fue redactado originalmente con fines administrativos, aunque su valor actual trasciende la mera gestión burocrática para convertirse en una ventana directa al pensamiento y la estructura social del periodo. La digitalización a alta resolución en el Archivo Noor asegura que cada detalle del manuscrito original sea accesible para la posteridad.</p>

              <div class="article-actions">
                <button class="read-btn" onclick="ArticleView.openViewer('${doc.id}')">
                  <i data-lucide="scan-eye" width="20" height="20"></i> ACCEDER AL MANUSCRITO
                </button>
              </div>
            </div>

            <div class="article-preview">
              <div class="document-card-stack" onclick="ArticleView.openViewer('${doc.id}')">
                 <div class="doc-card-stack-bg"></div>
                 <div class="doc-card-stack-bg doc-card-stack-bg--2"></div>
                 <img src="${doc.media?.thumbnail || ''}" alt="Portada" style="border: 8px solid #fff; box-shadow: 15px 15px 40px rgba(0,0,0,0.2);" />
                 <div class="preview-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s;">
                    <span style="background: #000; color: #fff; padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.7rem; font-weight: bold; letter-spacing: 1px;">AMPLIAR</span>
                 </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    `;

    container.style.display = 'block';
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
  }

  function close() {
    const container = document.getElementById('article-overlay');
    if (container) container.style.display = 'none';
    document.body.style.overflow = '';
    NoorState.dispatch('SELECT_DOCUMENT', null);
  }

  function openViewer(docId) {
    const state = NoorState.getState();
    const doc = (state.documents || []).find(d => d.id === docId);
    if (!doc) return;

    const driveId = doc.driveId || (doc.media && doc.media.driveFileId);
    if (driveId && driveId.length > 20 && !driveId.startsWith('local-')) {
      console.log('[ArticleView] Apertura directa en Drive:', driveId);
      window.open(`https://drive.google.com/file/d/${driveId}/preview`, '_blank');
    } else {
      window.DocumentViewer.open(doc);
    }
  }


  return { render, close, openViewer };
})();

window.ArticleView = ArticleView;
