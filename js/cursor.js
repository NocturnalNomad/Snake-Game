// ── NOCTURNAL NOMAD CUSTOM CURSOR ──
(function () {
  // Don't run on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // Inject elements
  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'cursor-dot';
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = -100, mouseY = -100;
  let ringX  = -100, ringY  = -100;
  const RING_SPEED = 0.12;

  // Track mouse
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Smooth lag for ring
  function animateRing() {
    ringX += (mouseX - ringX) * RING_SPEED;
    ringY += (mouseY - ringY) * RING_SPEED;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const hoverSelectors = 'a, button, .game-card, .btn, input, textarea, [onclick]';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverSelectors)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverSelectors)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  // Click pulse
  document.addEventListener('mousedown', () => {
    document.body.classList.add('cursor-click');
  });
  document.addEventListener('mouseup', () => {
    document.body.classList.remove('cursor-click');
  });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();
