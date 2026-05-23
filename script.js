function contactar(producto) {
  document.getElementById('modal-product').textContent = 'Producto: ' + producto;
  document.getElementById('modal-overlay').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal-overlay').style.display = 'none';
}

document.getElementById('modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) cerrarModal();
});

document.querySelectorAll('model-viewer').forEach(function(mv) {
  mv.addEventListener('error', function() {
    var wrap = mv.closest('.viewer-wrap');
    wrap.innerHTML = '<div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;color:#888;font-size:14px;padding:2rem;text-align:center"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E85C1A" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg><strong style="color:#333">Modelo 3D</strong><p style="margin:0">Coloca tu archivo .glb en la carpeta <code>models/</code></p></div>';
  });
});

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
