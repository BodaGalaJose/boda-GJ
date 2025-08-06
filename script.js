function setLanguage(lang) {
  // Cambia el contenido traducido
  document.querySelectorAll('[data-' + lang + ']').forEach(function (el) {
    el.textContent = el.getAttribute('data-' + lang);
  });

  // Cambia el formulario visible
  document.querySelectorAll('.form-container > div').forEach(function (form) {
    form.style.display = form.getAttribute('data-lang') === lang ? 'block' : 'none';
  });
}
