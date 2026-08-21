// Click-to-enlarge for the photo wall.
//
// The wall itself is plain <img> tags: with this script blocked the page still
// renders exactly as it always has, just without the enlarge. So the affordances
// that only mean something once JS is running — the button role, the tab stop,
// the pointer cursor — are added here rather than baked into the markup.
//
// The overlay is a native <dialog> opened with showModal(). That buys the focus
// trap, the Escape handler, the inert background and focus restore on close from
// the platform, so none of it is re-implemented below.
(function () {
  var wall = document.querySelector('.photowall');
  if (!wall || typeof HTMLDialogElement === 'undefined') return;

  var shots = Array.prototype.slice.call(wall.querySelectorAll('img'));
  if (!shots.length) return;

  var index = 0;

  var dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.setAttribute('aria-label', 'Photo viewer');
  dialog.innerHTML =
    '<figure class="lightbox-figure">' +
      '<img class="lightbox-img" alt="" />' +
      '<figcaption class="lightbox-cap"><span class="lightbox-text"></span>' +
        '<span class="lightbox-count"></span></figcaption>' +
    '</figure>' +
    '<button class="lightbox-close" type="button" aria-label="Close">✕</button>' +
    '<button class="lightbox-nav prev" type="button" aria-label="Previous photo">‹</button>' +
    '<button class="lightbox-nav next" type="button" aria-label="Next photo">›</button>';
  document.body.appendChild(dialog);

  var big = dialog.querySelector('.lightbox-img');
  var text = dialog.querySelector('.lightbox-text');
  var count = dialog.querySelector('.lightbox-count');

  // Most of these photos are small originals — a 360px-wide frame stretched to
  // fill a desktop viewport is mush. Each one is allowed to double, and no more;
  // the viewport caps it from there. The cap and the aspect ratio ride along as
  // custom properties so the sizing itself stays in the stylesheet.
  function show(i) {
    index = (i + shots.length) % shots.length;
    var src = shots[index];
    big.src = src.currentSrc || src.src;
    big.alt = src.alt;
    var w = src.naturalWidth || src.width;
    var h = src.naturalHeight || src.height;
    big.style.setProperty('--nat-w', w * 2 + 'px');
    big.style.setProperty('--ar', w / h);
    text.textContent = src.alt;
    count.textContent = (index + 1) + ' / ' + shots.length;

    // Warm the neighbours so stepping through does not flash empty.
    [index - 1, index + 1].forEach(function (n) {
      var near = shots[(n + shots.length) % shots.length];
      new Image().src = near.currentSrc || near.src;
    });
  }

  function open(i) {
    show(i);
    dialog.showModal();
  }

  shots.forEach(function (img, i) {
    img.classList.add('shot');
    img.setAttribute('role', 'button');
    img.setAttribute('tabindex', '0');
    img.setAttribute('aria-label', 'Enlarge: ' + img.alt);
    img.addEventListener('click', function () { open(i); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();          // Space would otherwise scroll the page
        open(i);
      }
    });
  });

  dialog.querySelector('.lightbox-close').addEventListener('click', function () {
    dialog.close();
  });
  dialog.querySelector('.prev').addEventListener('click', function () { show(index - 1); });
  dialog.querySelector('.next').addEventListener('click', function () { show(index + 1); });

  dialog.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
  });

  // Clicking the backdrop closes. The dialog fills the viewport so the backdrop
  // is never the event target; what counts as "outside" is the photo's own box.
  dialog.addEventListener('click', function (e) {
    if (e.target.closest('.lightbox-img, .lightbox-nav, .lightbox-close')) return;
    dialog.close();
  });

  // Dropping the src on close stops a closed viewer from holding the full-size
  // decode of whichever photo was last open.
  dialog.addEventListener('close', function () {
    big.removeAttribute('src');
  });
})();
