/* DEBUG CURSOR — remove this file and its <script> tags before production */
(function () {
  var dot = document.createElement('div');
  dot.id = 'dbg-cursor';
  dot.setAttribute('aria-hidden', 'true');
  dot.style.cssText = [
    'position:fixed', 'z-index:99999', 'top:0', 'left:0',
    'pointer-events:none', 'display:flex', 'align-items:center', 'gap:6px',
  ].join(';');

  dot.innerHTML =
    '<div style="width:20px;height:20px;border-radius:50%;flex-shrink:0;' +
    'background:rgba(255,50,50,0.85);' +
    'box-shadow:0 0 0 2px #fff,0 0 0 3px rgba(255,50,50,0.6)"></div>' +
    '<span id="dbg-coords" style="font:600 11px/1 monospace;color:#fff;white-space:nowrap;' +
    'background:rgba(0,0,0,0.65);padding:2px 6px;border-radius:4px"></span>';

  document.body.appendChild(dot);

  var coords = document.getElementById('dbg-coords');

  document.addEventListener('mousemove', function (e) {
    dot.style.transform = 'translate(' + (e.clientX - 10) + 'px,' + (e.clientY - 10) + 'px)';
    coords.textContent = e.clientX + ', ' + e.clientY;
  }, { passive: true });
})();
