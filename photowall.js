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
    '<div class="lightbox-frame"><img class="lightbox-img" alt="" /></div>' +
    '<button class="lightbox-close" type="button" aria-label="Close">✕</button>' +
    '<button class="lightbox-nav prev" type="button" aria-label="Previous photo">‹</button>' +
    '<button class="lightbox-nav next" type="button" aria-label="Next photo">›</button>';
  document.body.appendChild(dialog);

  var big = dialog.querySelector('.lightbox-img');

  // Two files back every photo: the wall loads a 480px thumbnail, and opening one
  // wants the original. Rather than open onto a blank frame while a half-megabyte
  // download runs, the thumbnail goes up first — it is already decoded and on
  // screen, so it appears instantly — and the full file replaces it once it has
  // arrived. The swap is invisible apart from the detail arriving.
  //
  // The size is settled before either lands, from the full file's width in
  // data-full-w and the ratio the wall img already declares, so the frame never
  // jumps when the real photo takes over. Each photo may double and no more:
  // ten of these are 360x480 and there is no detail to reveal past that.
  var token = 0;

  function show(i) {
    index = (i + shots.length) % shots.length;
    var src = shots[index];
    var full = src.getAttribute('data-full');
    var mine = ++token;   // a later step must not be overtaken by an earlier load

    big.alt = src.alt;
    big.style.setProperty('--ar', (src.width || 1) / (src.height || 1));
    big.style.setProperty('--nat-w',
      (parseInt(src.getAttribute('data-full-w'), 10) || src.naturalWidth) * 2 + 'px');
    big.src = src.currentSrc || src.src;

    if (full) {
      var hires = new Image();
      hires.onload = function () {
        if (mine === token) big.src = full;   // still the photo on screen
      };
      hires.src = full;
    }

    // Warm the neighbours so stepping through does not stall on the download.
    [index - 1, index + 1].forEach(function (n) {
      var near = shots[(n + shots.length) % shots.length];
      new Image().src = near.getAttribute('data-full') || near.src;
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
