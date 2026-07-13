// Theme toggle. The stored choice is stamped onto <html> by a blocking inline
// snippet in each page's <head>; this only handles the button and keeps its
// label in sync. With nothing stored, the page follows the OS.
(function () {
  var root = document.documentElement;
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  var button = document.querySelector('.theme-toggle');
  if (!button) return;

  function isDark() {
    var chosen = root.getAttribute('data-theme');
    return chosen ? chosen === 'dark' : systemDark.matches;
  }

  function sync() {
    var dark = isDark();
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
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

  // Only reaches the label when nothing is stored — otherwise data-theme wins.
  systemDark.addEventListener('change', sync);

  sync();
})();
