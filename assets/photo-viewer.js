/* One accessible, closable photo viewer shared by the landing and the press page. */
(function () {
  const photos = [...document.querySelectorAll('button[data-photo]')];
  if (!photos.length) return;

  const nativeDialog = typeof HTMLDialogElement !== 'undefined' && typeof HTMLDialogElement.prototype.showModal === 'function';
  const viewer = document.createElement(nativeDialog ? 'dialog' : 'div');
  viewer.className = 'photo-viewer';
  if (!nativeDialog) viewer.setAttribute('role', 'dialog');
  viewer.setAttribute('aria-modal', 'true');
  viewer.setAttribute('aria-label', 'Photo viewer');
  viewer.innerHTML = `
    <div class="pv-top"><span class="pv-brand">EL KICKER ESPAÑOL · #41</span><button type="button" class="pv-close" aria-label="Cerrar foto">Cerrar <span aria-hidden="true">×</span></button></div>
    <div class="pv-stage"><button type="button" class="pv-arrow pv-prev" aria-label="Foto anterior">‹</button><img class="pv-image" alt=""><button type="button" class="pv-arrow pv-next" aria-label="Foto siguiente">›</button></div>
    <div class="pv-bottom"><span class="pv-index"></span><span class="pv-caption"></span><button type="button" class="pv-return">← Volver a la web</button></div>`;
  document.body.appendChild(viewer);

  const stage = viewer.querySelector('.pv-stage');
  const image = viewer.querySelector('.pv-image');
  const caption = viewer.querySelector('.pv-caption');
  const counter = viewer.querySelector('.pv-index');
  const closeButton = viewer.querySelector('.pv-close');
  const backButton = viewer.querySelector('.pv-return');
  const prevButton = viewer.querySelector('.pv-prev');
  const nextButton = viewer.querySelector('.pv-next');
  let current = 0;
  let opener = null;
  let priorOverflow = '';
  let historyAdded = false;
  const isOpen = () => nativeDialog ? viewer.open : viewer.classList.contains('pv-open');

  function updateLabels() {
    const en = document.documentElement.dataset.lang === 'en' || (!document.documentElement.dataset.lang && document.documentElement.lang === 'en');
    viewer.setAttribute('aria-label', en ? 'Photo viewer' : 'Visor de fotos');
    closeButton.setAttribute('aria-label', en ? 'Close photo' : 'Cerrar foto');
    closeButton.innerHTML = `${en ? 'Close' : 'Cerrar'} <span aria-hidden="true">×</span>`;
    backButton.textContent = en ? '← Back to the page' : '← Volver a la web';
    prevButton.setAttribute('aria-label', en ? 'Previous photo' : 'Foto anterior');
    nextButton.setAttribute('aria-label', en ? 'Next photo' : 'Foto siguiente');
  }

  function showPhoto(index) {
    current = (index + photos.length) % photos.length;
    const button = photos[current];
    const alt = button.querySelector('img')?.alt || '';
    image.src = button.dataset.photo;
    image.alt = alt;
    caption.textContent = button.dataset.caption || alt;
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
    prevButton.hidden = nextButton.hidden = photos.length < 2;
  }

  function close(fromHistory = false) {
    if (!isOpen()) return;
    if (nativeDialog) viewer.close();
    else viewer.classList.remove('pv-open');
    document.body.style.overflow = priorOverflow;
    image.removeAttribute('src');
    if (!fromHistory && historyAdded && history.state?.photoViewer) history.back();
    historyAdded = false;
    opener?.focus({ preventScroll: true });
  }

  photos.forEach((button, index) => button.addEventListener('click', () => {
    if (isOpen()) return;
    opener = button;
    priorOverflow = document.body.style.overflow;
    updateLabels();
    showPhoto(index);
    if (nativeDialog) viewer.showModal();
    else viewer.classList.add('pv-open');
    document.body.style.overflow = 'hidden';
    closeButton.focus();
    try { history.pushState({ ...history.state, photoViewer: true }, '', location.href); historyAdded = true; }
    catch (_) { historyAdded = false; }
  }));

  closeButton.addEventListener('click', () => close());
  backButton.addEventListener('click', () => close());
  prevButton.addEventListener('click', () => showPhoto(current - 1));
  nextButton.addEventListener('click', () => showPhoto(current + 1));
  viewer.addEventListener('click', event => { if (event.target === viewer || event.target === stage) close(); });
  viewer.addEventListener('cancel', event => { event.preventDefault(); close(); });
  window.addEventListener('popstate', () => { if (isOpen()) close(true); });
  document.addEventListener('keydown', event => {
    if (!isOpen()) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft' && photos.length > 1) showPhoto(current - 1);
    if (event.key === 'ArrowRight' && photos.length > 1) showPhoto(current + 1);
  });

  let touchStartX = null;
  stage.addEventListener('touchstart', event => { touchStartX = event.changedTouches[0]?.screenX ?? null; }, { passive: true });
  stage.addEventListener('touchend', event => {
    if (touchStartX === null || photos.length < 2) return;
    const delta = (event.changedTouches[0]?.screenX ?? touchStartX) - touchStartX;
    if (Math.abs(delta) > 65) showPhoto(current + (delta < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });
})();
