function setLanguage(lang) {
  document.querySelectorAll('[data-' + lang + ']').forEach(function (el) {
    el.textContent = el.getAttribute('data-' + lang);
  });
}
