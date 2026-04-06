(function () {
  var nav = document.querySelector('nav');
  var btn = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-nav-menu');
  if (!nav || !btn || !menu) return;

  function setOpen(open) {
    nav.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  btn.addEventListener('click', function () {
    setOpen(!nav.classList.contains('nav-open'));
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 768px)').matches) {
        setOpen(false);
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
      setOpen(false);
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      setOpen(false);
    }
  });
})();
