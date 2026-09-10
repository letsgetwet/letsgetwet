/* Let's Get Wet Pressure Washing — site scripts */
(function () {
  'use strict';

  // ---- Config: where quote requests go -------------------------------------
  // Option A (recommended): sign up at https://formspree.io, create a form, and
  //   paste its endpoint here, e.g. 'https://formspree.io/f/abcdwxyz'.
  // Option B: leave blank and the form falls back to opening the visitor's
  //   email client with the details pre-filled (mailto).
  var FORM_ENDPOINT = '';
  var FALLBACK_EMAIL = 'xanderd.case@gmail.com';

  // ---- Mobile nav ----------------------------------------------------------
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Before/after compare slider ----------------------------------------
  document.querySelectorAll('.compare').forEach(function (box) {
    var range = box.querySelector('.compare__range');
    if (!range) return;
    var update = function () { box.style.setProperty('--pos', range.value + '%'); };
    range.addEventListener('input', update);
    update();
  });

  // ---- Footer year ---------------------------------------------------------
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ---- Scroll reveal -------------------------------------------------------
  var revealTargets = document.querySelectorAll('.service, .step, .result, .section__head');
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ---- Quote forms ---------------------------------------------------------
  document.querySelectorAll('[data-quote-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var button = form.querySelector('button[type="submit"]');

      if (FORM_ENDPOINT) {
        button.disabled = true;
        button.textContent = 'Sending…';
        fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: data
        }).then(function (res) {
          if (!res.ok) throw new Error('Request failed');
          showSuccess(form);
        }).catch(function () {
          button.disabled = false;
          button.textContent = 'Try Again';
          alert('Sorry, something went wrong. Please call us at (404) 710-4081.');
        });
        return;
      }

      // mailto fallback
      var lines = [];
      data.forEach(function (value, key) {
        if (value) lines.push(key.charAt(0).toUpperCase() + key.slice(1) + ': ' + value);
      });
      var subject = encodeURIComponent('Quote request: ' + (data.get('service') || 'Home services'));
      var body = encodeURIComponent(lines.join('\n'));
      window.location.href = 'mailto:' + FALLBACK_EMAIL + '?subject=' + subject + '&body=' + body;
      showSuccess(form);
    });
  });

  function showSuccess(form) {
    var msg = document.createElement('div');
    msg.className = 'form-success';
    msg.textContent = "Thanks! We've received your request and will be in touch within one business day.";
    form.replaceWith(msg);
  }
})();
