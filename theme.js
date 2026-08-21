// Theme toggle. Light is the default for every visitor — the OS preference is
// not consulted, and the stylesheet carries the light palette on bare :root.
// Dark is reached only by pressing the button, and that choice is remembered;
// a blocking snippet in each page's <head> stamps it back onto <html> before
// first paint so a returning visitor never sees a flash of the wrong ground.
//
// The glyph names the destination, not the current state: a moon on paper means
// "go dark", a sun on night means "go light".
(function () {
  // Drawn rather than typed: ☾ and ☀ are at the mercy of whichever font has
  // them, and on some platforms the sun arrives as colour emoji. Two strokes of
  // currentColor instead, so both follow the palette and match at any size.
  function svg(body) {
    return '<svg class="glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
           ' stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"' +
           ' aria-hidden="true" focusable="false">' + body + '</svg>';
  }
  var MOON = svg('<path d="M20.5 14.3A8.5 8.5 0 1 1 9.7 3.5a6.8 6.8 0 0 0 10.8 10.8Z"/>');
  var SUN  = svg('<circle cx="12" cy="12" r="4"/><path d="M12 2.6v2M12 19.4v2' +
                 'M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2.6 12h2M19.4 12h2' +
                 'M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>');

  var BG = { light: '#EAEDF2', dark: '#10141A' };

  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  if (!button) return;

  function isDark() {
    return root.getAttribute('data-theme') === 'dark';
  }

  // The label names the action, so there is no aria-pressed: a "pressed"
  // state alongside "Switch to light theme" reads as a contradiction.
  // Until this deferred script runs the button carries the light-mode moon from
  // the nav partial, which is wrong for one frame for a returning dark visitor.
  // The two markup constants are fixed strings, so innerHTML carries no risk.
  function sync() {
    var dark = isDark();
    button.innerHTML = dark ? SUN : MOON;
    button.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? BG.dark : BG.light);
  }

  button.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // private browsing: the flip still holds for this page
    }
    sync();
  });

  sync();
})();
