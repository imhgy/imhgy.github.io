/* Full navigation switches to an anchored menu when the complete row cannot fit. */
(function () {
  'use strict';
  var nav = document.getElementById('site-nav');
  var fullLinks = nav.querySelector('.visible-links');
  var toggle = nav.querySelector('.site-nav-toggle');
  var drawer = document.getElementById('mobile-navigation');
  var drawerContent = drawer.querySelector('nav');
  var drawerLinks = Array.from(drawer.querySelectorAll('a'));
  var allLinks = Array.from(fullLinks.querySelectorAll('a')).concat(drawerLinks);
  var restoreFocus = true;
  var scrolling = false;

  function targetFor(link) {
    return document.getElementById(link.hash.slice(1));
  }

  function closeDrawer(focusToggle) {
    restoreFocus = focusToggle !== false;
    if (drawer.open) drawer.close();
  }

  function updateNav() {
    if (drawer.open) return;
    var compact = window.innerWidth <= 700 || fullLinks.getBoundingClientRect().width > nav.clientWidth + 1;
    nav.classList.toggle('is-compact', compact);
    fullLinks.inert = compact;
    fullLinks.setAttribute('aria-hidden', String(compact));
    toggle.hidden = !compact;
    if (!compact) closeDrawer(false);
  }

  function updateCurrentSection() {
    var current = drawerLinks[0];
    var edge = document.querySelector('.masthead').offsetHeight + 36;
    drawerLinks.forEach(function (link) {
      var target = targetFor(link);
      if (target && target.getBoundingClientRect().top <= edge) current = link;
    });
    allLinks.forEach(function (link) {
      if (link.hash === current.hash) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  toggle.addEventListener('click', function (event) {
    if (drawer.open) { closeDrawer(true); return; }
    updateCurrentSection();
    restoreFocus = true;
    document.documentElement.classList.add('nav-drawer-open');
    var anchor = toggle.getBoundingClientRect();
    drawer.style.top = (anchor.bottom + 10) + 'px';
    drawer.showModal();
    // Pointer users enter the container; keyboard users start at the first link.
    var initialFocus = event.detail > 0 ? drawerContent : drawerLinks[0];
    initialFocus.focus({preventScroll: true});
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
  });

  drawer.addEventListener('cancel', function (event) {
    event.preventDefault();
    closeDrawer(true);
  });
  drawer.addEventListener('close', function () {
    document.documentElement.classList.remove('nav-drawer-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    updateNav();
    if (restoreFocus && !toggle.hidden) toggle.focus({preventScroll: true});
  });
  drawer.addEventListener('click', function (event) {
    var rect = drawer.getBoundingClientRect();
    if (event.target === drawer && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closeDrawer(true);
  });
  drawer.addEventListener('click', function (event) {
    var link = event.target.closest('a');
    if (!link) return;
    var target = targetFor(link);
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();
    closeDrawer(false);
    var heading = target.getAttribute('aria-labelledby');
    var destination = heading ? document.getElementById(heading) : target;
    destination.classList.add('section-navigation-target');
    destination.setAttribute('tabindex', '-1');
    destination.focus({preventScroll: true});
    destination.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start'});
    updateCurrentSection();
  }, true);

  window.addEventListener('resize', function () { updateNav(); updateCurrentSection(); });
  window.addEventListener('scroll', function () {
    if (!scrolling) {
      scrolling = true;
      window.requestAnimationFrame(function () { updateCurrentSection(); scrolling = false; });
    }
  }, {passive: true});
  new ResizeObserver(updateNav).observe(nav);
  document.fonts.ready.then(updateNav);
  updateNav();
  updateCurrentSection();
}());
