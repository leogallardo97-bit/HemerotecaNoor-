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
      <div class="article-page">
        <!-- HEADER EDITORIAL -->
        <header class="article-hero" style="background-image: linear-gradient(to bottom, rgba(13,13,13,0.7), var(--color-ink-900)), url('${doc.media?.thumbnail || ''}')">
          <div class="article-hero__content">
            <button class="article-back-btn" onclick="ArticleView.close()">
              <i data-lucide="arrow-left" width="16" height="16"></i> Volver al Archivo
            </button>
            
            <div class="article-category">${era.label || doc.eraId}</div>
            <h1 class="article-title font-serif">${doc.title}</h1>
            
            <div class="meta-bar">
              <div class="meta-item"><b>FECHA</b> ${doc.date || doc.year}</div>
              <div class="meta-item"><b>CABECERA</b> ${doc.header || 'Archivo Noor'}</div>
              <div class="meta-item"><b>UBICACIÓN</b> ${doc.location || 'Consultar'}</div>
              <div class="meta-item"><b>TIPO</b> ${doc.type.toUpperCase()}</div>
            </div>
          </div>
        </header>

        <!-- CUERPO DEL ARTÍCULO -->
        <main class="article-body">
          <div class="article-grid">
            <div class="article-text">
              <h2 class="font-serif">Contexto Histórico</h2>
              <p>${doc.description || 'Este documento forma parte del fondo digitalizado del Archivo Noor. Su contenido es fundamental para entender el periodo histórico seleccionado.'}</p>
              
              <div class="article-actions">
                <button class="read-btn" onclick="ArticleView.openViewer('${doc.id}')">
                  <i data-lucide="expand" width="20" height="20"></i> LEER DOCUMENTO COMPLETO
                </button>
              </div>
            </div>

            <div class="article-preview">
              <div class="document-card-stack" onclick="ArticleView.openViewer('${doc.id}')">
                <img src="${doc.media?.thumbnail || ''}" alt="Portada" />
                <div class="preview-overlay">
                  <span>Hacer clic para ampliar</span>
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
    const doc = state.documents.find(d => d.id === docId);
    if (doc) {
      window.DocumentViewer.open(doc);
    }
  }

  return { render, close, openViewer };
})();

window.ArticleView = ArticleView;
