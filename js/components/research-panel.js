/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Research Panel (Notas de Investigación)
 * ══════════════════════════════════════════════════════════
 *
 * Slide-in panel que aparece desde el visor al pulsar el
 * botón de notas. Permite escribir, etiquetar y guardar
 * observaciones sobre el manuscrito actual.
 *
 * PERSISTENCIA: IndexedDB via NoorDB.notes
 * INTEGRACIÓN:  Se abre desde document-viewer.js (vbtn-notes)
 */

// ─────────────────────────────────────────────────────────
// ESTADO INTERNO
// ─────────────────────────────────────────────────────────

const _rpState = {
  isOpen:      false,
  activeDoc:   null,      // NoorDocument actual
  activeNoteId: null,     // ID de la nota en edición
  currentTab:  'write',   // 'write' | 'saved'
  pendingTags: [],        // tags en el editor
};

// ─────────────────────────────────────────────────────────
// INICIALIZACIÓN
// ─────────────────────────────────────────────────────────

/**
 * initResearchPanel()
 * Inyecta el panel en el DOM y lo suscribe al estado global.
 */
async function initResearchPanel() {
  // Asegurar que NoorDB está listo
  await NoorDB.init();

  // Montar el panel
  const mount = document.getElementById('app-research-panel');
  if (!mount) return;
  mount.innerHTML = _buildPanelHTML();

  _bindPanelEvents();

  // Suscripción al estado: cuando se selecciona un documento,
  // el panel actualizará su referencia interna
  NoorState.subscribe('SELECT_DOCUMENT', (state) => {
    _rpState.activeDoc = state.selectedDocument;
    if (_rpState.isOpen) _refreshPanel();
  });

  console.log('[ResearchPanel] ✓ Inicializado.');
}

// ─────────────────────────────────────────────────────────
// CONSTRUCCIÓN DEL HTML
// ─────────────────────────────────────────────────────────

function _buildPanelHTML() {
  return `
    <div class="research-panel" id="research-panel" role="complementary" aria-label="Panel de notas de investigación">

      <div class="research-panel__header">
        <i data-lucide="pencil-line" width="15" height="15" style="color:var(--color-gold)"></i>
        <span class="research-panel__title">Notas de Investigación</span>
        <button class="vbtn" id="rp-close" aria-label="Cerrar panel de notas" style="margin-left:auto">
          <i data-lucide="x" width="14" height="14"></i>
        </button>
      </div>

      <!-- Referencia al documento activo -->
      <div class="research-panel__doc-ref" id="rp-doc-ref">
        — Sin documento seleccionado —
      </div>

      <!-- Tabs -->
      <div class="rp-tabs" role="tablist">
        <button class="rp-tab active" data-rp-tab="write" role="tab" aria-selected="true">
          <i data-lucide="pen" width="11" height="11"></i> Escribir nota
        </button>
        <button class="rp-tab" data-rp-tab="saved" role="tab" aria-selected="false">
          <i data-lucide="archive" width="11" height="11"></i> Guardadas
        </button>
        <button class="rp-tab" data-rp-tab="export" role="tab" aria-selected="false">
          <i data-lucide="download" width="11" height="11"></i> Exportar
        </button>
      </div>

      <!-- Cuerpo del panel -->
      <div class="rp-body">

        <!-- ── Tab: Escribir nota ── -->
        <div class="rp-tab-panel active" id="rp-panel-write">
          <div class="note-editor">
            <!-- Textarea -->
            <textarea
              class="note-editor__textarea"
              id="rp-textarea"
              placeholder="Escribe tus observaciones sobre este documento...
              
Puedes incluir:
 • Referencias cruzadas con otros documentos
 • Hipótesis sobre autoría o fecha
 • Notas sobre el estado de conservación
 • Interpretación del contenido"
              aria-label="Contenido de la nota"
            ></textarea>

            <!-- Tags -->
            <div>
              <p style="font-size:0.65rem;color:rgba(229,229,229,0.35);margin-bottom:0.35rem;letter-spacing:0.05em">
                Etiquetas
              </p>
              <div class="note-tags-input" id="rp-tags-container" role="group" aria-label="Etiquetas de la nota">
                <input
                  class="note-tag-add-input"
                  id="rp-tag-input"
                  placeholder="Añadir etiqueta..."
                  aria-label="Nueva etiqueta"
                />
              </div>
              <p class="form-field__hint" style="margin-top:4px">Pulsa Enter para añadir una etiqueta</p>
            </div>

            <!-- Acciones -->
            <div class="note-actions">
              <button class="note-btn" id="rp-clear-btn" aria-label="Limpiar editor">
                <i data-lucide="eraser" width="12" height="12"></i>
                Limpiar
              </button>
              <button class="note-btn note-btn--primary" id="rp-save-btn" aria-label="Guardar nota">
                <i data-lucide="save" width="12" height="12"></i>
                Guardar nota
              </button>
            </div>

            <!-- Feedback de guardado -->
            <div id="rp-save-feedback" style="display:none;font-size:0.72rem;color:#4cc978;text-align:center;padding:0.4rem">
              <i data-lucide="check-circle" width="12" height="12" style="display:inline"></i>
              Nota guardada correctamente
            </div>
          </div>
        </div>

        <!-- ── Tab: Notas guardadas ── -->
        <div class="rp-tab-panel" id="rp-panel-saved">
          <div id="rp-saved-list">
            <p style="font-size:0.75rem;color:rgba(229,229,229,0.25);text-align:center;padding:2rem">
              Cargando notas guardadas...
            </p>
          </div>
        </div>

        <!-- ── Tab: Exportar ── -->
        <div class="rp-tab-panel" id="rp-panel-export">
          <p style="font-size:0.8rem;color:rgba(229,229,229,0.55);line-height:1.7;margin-bottom:1.25rem">
            Exporta tu investigación para hacer un backup o compartirla.
          </p>

          <div style="display:flex;flex-direction:column;gap:0.6rem">

            <button class="note-btn note-btn--primary" id="rp-export-json" style="justify-content:flex-start">
              <i data-lucide="file-json" width="14" height="14"></i>
              Exportar notas como JSON
            </button>

            <button class="note-btn" id="rp-export-txt" style="justify-content:flex-start">
              <i data-lucide="file-text" width="14" height="14"></i>
              Exportar notas como .TXT
            </button>

            <button class="note-btn" id="rp-export-md" style="justify-content:flex-start">
              <i data-lucide="file-code" width="14" height="14"></i>
              Exportar notas como Markdown
            </button>

            <div style="border-top:var(--border-ornate);margin:0.5rem 0;padding-top:0.75rem">
              <button class="note-btn" id="rp-export-db" style="justify-content:flex-start">
                <i data-lucide="database" width="14" height="14"></i>
                Backup completo (JSON)
              </button>
              <p style="font-size:0.65rem;color:rgba(229,229,229,0.25);margin-top:0.35rem;line-height:1.5">
                Incluye notas, colecciones y documentos del Admin.
                Útil para restaurar en otro navegador.
              </p>
            </div>

            <div style="border-top:var(--border-ornate);margin:0.5rem 0;padding-top:0.75rem">
              <p style="font-size:0.72rem;color:rgba(229,229,229,0.35);margin-bottom:0.5rem">
                Restaurar backup
              </p>
              <label class="note-btn" style="cursor:pointer;justify-content:flex-start">
                <i data-lucide="upload" width="14" height="14"></i>
                Importar backup JSON
                <input type="file" id="rp-import-file" accept=".json" style="display:none" />
              </label>
            </div>

          </div>
        </div>

      </div>
      <!-- /rp-body -->
    </div>
  `;
}

// ─────────────────────────────────────────────────────────
// API PÚBLICA
// ─────────────────────────────────────────────────────────

/**
 * openResearchPanel(doc)
 * Abre el panel con el documento dado en contexto.
 */
async function openResearchPanel(doc) {
  _rpState.activeDoc = doc || NoorState.getState().selectedDocument;
  _rpState.isOpen    = true;
  _rpState.activeNoteId = null;

  const panel = document.getElementById('research-panel');
  if (panel) panel.classList.add('open');

  await _refreshPanel();
}

/**
 * closeResearchPanel()
 */
function closeResearchPanel() {
  _rpState.isOpen = false;
  const panel = document.getElementById('research-panel');
  if (panel) panel.classList.remove('open');
}

// ─────────────────────────────────────────────────────────
// RENDERIZADO DINÁMICO
// ─────────────────────────────────────────────────────────

async function _refreshPanel() {
  const doc = _rpState.activeDoc;

  // Actualizar referencia al documento
  const ref = document.getElementById('rp-doc-ref');
  if (ref) {
    ref.textContent = doc
      ? `📄 ${doc.title} (${doc.year})`
      : '— Sin documento seleccionado —';
  }

  // Cargar notas guardadas si el tab está activo
  if (_rpState.currentTab === 'saved') {
    await _loadSavedNotes();
  }

  if (window.lucide) lucide.createIcons();
}

/**
 * Carga y renderiza las notas guardadas del documento activo.
 */
async function _loadSavedNotes() {
  const list = document.getElementById('rp-saved-list');
  if (!list) return;

  const doc = _rpState.activeDoc;
  let savedNotes;

  if (doc) {
    savedNotes = await NoorDB.notes.getByDoc(doc.id);
  } else {
    savedNotes = await NoorDB.notes.getAll();
  }

  // Ordenar por fecha descendente
  savedNotes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  if (savedNotes.length === 0) {
    list.innerHTML = `
      <p style="font-size:0.75rem;color:rgba(229,229,229,0.25);text-align:center;padding:2rem;font-style:italic">
        ${doc ? 'No hay notas para este documento.' : 'No hay notas guardadas aún.'}
      </p>
    `;
    return;
  }

  list.innerHTML = `
    <div class="saved-notes-list">
      ${savedNotes.map(note => `
        <div class="saved-note-card" data-note-id="${note.id}">
          <p class="saved-note-card__date">
            ${_formatDate(note.updatedAt)}
            ${note.docId !== doc?.id ? `<span style="margin-left:0.5rem;opacity:0.6">[Otro doc]</span>` : ''}
          </p>
          <p class="saved-note-card__preview">${_escapeHtml(note.content)}</p>
          ${note.tags?.length ? `
            <div class="saved-note-card__tags">
              ${note.tags.map(t => `<span class="note-tag-item">${t}</span>`).join('')}
            </div>
          ` : ''}
          <div style="display:flex;gap:0.4rem;margin-top:0.5rem">
            <button class="note-btn" data-edit-note="${note.id}" style="font-size:0.68rem;padding:0.25rem 0.6rem">
              <i data-lucide="pencil" width="10" height="10"></i> Editar
            </button>
            <button class="note-btn note-btn--danger" data-delete-note="${note.id}" style="font-size:0.68rem;padding:0.25rem 0.6rem">
              <i data-lucide="trash-2" width="10" height="10"></i> Eliminar
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Eventos en las notas
  list.querySelectorAll('[data-edit-note]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const noteId = parseInt(btn.dataset.editNote);
      const note   = savedNotes.find(n => n.id === noteId);
      if (!note) return;

      // Cambiar al tab de escritura con los datos de la nota
      _switchTab('write');
      document.getElementById('rp-textarea').value = note.content;
      _rpState.activeNoteId = noteId;
      _rpState.pendingTags  = [...(note.tags || [])];
      _renderTags();
    });
  });

  list.querySelectorAll('[data-delete-note]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const noteId = parseInt(btn.dataset.deleteNote);
      if (confirm('¿Eliminar esta nota? Esta acción no se puede deshacer.')) {
        await NoorDB.notes.delete(noteId);
        await _loadSavedNotes();
      }
    });
  });

  if (window.lucide) lucide.createIcons();
}

// ─────────────────────────────────────────────────────────
// GESTIÓN DE TAGS
// ─────────────────────────────────────────────────────────

function _renderTags() {
  const container = document.getElementById('rp-tags-container');
  const input     = document.getElementById('rp-tag-input');
  if (!container || !input) return;

  // Limpiar chips previos (mantener el input)
  container.querySelectorAll('.note-tag-item').forEach(t => t.remove());

  _rpState.pendingTags.forEach((tag, i) => {
    const chip = document.createElement('span');
    chip.className   = 'note-tag-item';
    chip.innerHTML   = `${_escapeHtml(tag)} <button aria-label="Quitar etiqueta ${tag}">×</button>`;
    chip.querySelector('button').addEventListener('click', () => {
      _rpState.pendingTags.splice(i, 1);
      _renderTags();
    });
    container.insertBefore(chip, input);
  });
}

// ─────────────────────────────────────────────────────────
// TABS
// ─────────────────────────────────────────────────────────

function _switchTab(tab) {
  _rpState.currentTab = tab;

  document.querySelectorAll('.rp-tab').forEach(btn => {
    const isActive = btn.dataset.rpTab === tab;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive.toString());
  });
  document.querySelectorAll('.rp-tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `rp-panel-${tab}`);
  });

  if (tab === 'saved') _loadSavedNotes();
}

// ─────────────────────────────────────────────────────────
// EXPORTADORES
// ─────────────────────────────────────────────────────────

async function _exportAsJSON() {
  const notes = await NoorDB.notes.getAll();
  _downloadFile(
    JSON.stringify(notes, null, 2),
    `noor-notas-${_dateSlug()}.json`,
    'application/json'
  );
}

async function _exportAsTXT() {
  const notes  = await NoorDB.notes.getAll();
  const allDoc = window.NoorMockData?.documents || [];

  const txt = notes.map(note => {
    const doc = allDoc.find(d => d.id === note.docId);
    return [
      `═══════════════════════════════════`,
      `DOCUMENTO: ${doc?.title || note.docId}`,
      `FECHA DE NOTA: ${_formatDate(note.updatedAt)}`,
      `ETIQUETAS: ${(note.tags || []).join(', ') || 'Sin etiquetas'}`,
      `───────────────────────────────────`,
      note.content,
      '',
    ].join('\n');
  }).join('\n');

  _downloadFile(
    `ARCHIVO NOOR — Notas de Investigación\nExportado: ${new Date().toLocaleString()}\n\n${txt}`,
    `noor-notas-${_dateSlug()}.txt`,
    'text/plain'
  );
}

async function _exportAsMarkdown() {
  const notes  = await NoorDB.notes.getAll();
  const allDoc = window.NoorMockData?.documents || [];

  const md = [
    '# Archivo Noor — Notas de Investigación',
    `*Exportado: ${new Date().toLocaleString()}*`,
    '',
    ...notes.map(note => {
      const doc = allDoc.find(d => d.id === note.docId);
      return [
        `## ${doc?.title || note.docId}`,
        `**Fecha:** ${_formatDate(note.updatedAt)}  `,
        note.tags?.length ? `**Etiquetas:** ${note.tags.map(t => `\`${t}\``).join(', ')}` : '',
        '',
        note.content,
        '',
        '---',
        '',
      ].join('\n');
    }),
  ].join('\n');

  _downloadFile(md, `noor-notas-${_dateSlug()}.md`, 'text/markdown');
}

async function _exportFullBackup() {
  const data = await NoorDB.exportAll();
  _downloadFile(JSON.stringify(data, null, 2), `noor-backup-${_dateSlug()}.json`, 'application/json');
}

async function _importFromFile(file) {
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    await NoorDB.importAll(data);
    alert('✓ Backup restaurado correctamente.');
    await _loadSavedNotes();
  } catch (err) {
    alert('✗ El archivo seleccionado no es un backup válido de Noor Archive.');
    console.error('[ResearchPanel] Error importando backup:', err);
  }
}

// ─────────────────────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────────────────────

function _bindPanelEvents() {
  // Cerrar
  document.getElementById('rp-close')?.addEventListener('click', closeResearchPanel);

  // Tabs
  document.querySelectorAll('[data-rp-tab]').forEach(btn => {
    btn.addEventListener('click', () => _switchTab(btn.dataset.rpTab));
  });

  // Tags: añadir con Enter
  document.getElementById('rp-tag-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const value = e.target.value.trim().replace(',', '');
      if (value && !_rpState.pendingTags.includes(value)) {
        _rpState.pendingTags.push(value);
        _renderTags();
      }
      e.target.value = '';
    }
  });

  // Limpiar editor
  document.getElementById('rp-clear-btn')?.addEventListener('click', () => {
    document.getElementById('rp-textarea').value = '';
    _rpState.pendingTags   = [];
    _rpState.activeNoteId  = null;
    _renderTags();
  });

  // Guardar nota
  document.getElementById('rp-save-btn')?.addEventListener('click', async () => {
    const content = document.getElementById('rp-textarea').value.trim();
    if (!content) return;
    if (!_rpState.activeDoc) {
      alert('Selecciona un documento antes de guardar una nota.');
      return;
    }

    // Recoger el tag que está en el input sin pulsar Enter
    const tagInput = document.getElementById('rp-tag-input');
    if (tagInput?.value.trim()) {
      _rpState.pendingTags.push(tagInput.value.trim());
      tagInput.value = '';
    }

    await NoorDB.notes.save({
      id:      _rpState.activeNoteId || undefined,
      docId:   _rpState.activeDoc.id,
      content: content,
      tags:    [..._rpState.pendingTags],
    });

    // Feedback
    const fb = document.getElementById('rp-save-feedback');
    if (fb) {
      fb.style.display = 'block';
      setTimeout(() => { fb.style.display = 'none'; }, 2500);
    }

    // Reset
    document.getElementById('rp-textarea').value = '';
    _rpState.pendingTags  = [];
    _rpState.activeNoteId = null;
    _renderTags();
    if (window.lucide) lucide.createIcons();
  });

  // Exportadores
  document.getElementById('rp-export-json')?.addEventListener('click', _exportAsJSON);
  document.getElementById('rp-export-txt')?.addEventListener('click',  _exportAsTXT);
  document.getElementById('rp-export-md')?.addEventListener('click',   _exportAsMarkdown);
  document.getElementById('rp-export-db')?.addEventListener('click',   _exportFullBackup);

  // Importar backup
  document.getElementById('rp-import-file')?.addEventListener('change', (e) => {
    if (e.target.files[0]) _importFromFile(e.target.files[0]);
  });
}

// ─────────────────────────────────────────────────────────
// UTILIDADES
// ─────────────────────────────────────────────────────────

function _formatDate(iso) {
  return new Date(iso).toLocaleString('es-ES', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}
function _dateSlug() {
  return new Date().toISOString().replace(/[:.T]/g, '-').slice(0, 16);
}
function _escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function _downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

window.ResearchPanel = { init: initResearchPanel, open: openResearchPanel, close: closeResearchPanel };
console.log('[ResearchPanel] ✓ Módulo definido.');
