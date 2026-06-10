let currentLang = localStorage.getItem('geops_lang') || 'en';
let translations = { en: null, es: null };

async function setLang(lang) {
  if (!translations[lang]) {
    try {
      const res = await fetch(`i18n/${lang}.json`);
      translations[lang] = await res.json();
    } catch (e) {
      console.error('Failed to load translations', e);
      return;
    }
  }

  currentLang = lang;
  localStorage.setItem('geops_lang', lang);
  document.documentElement.lang = lang;
  
  const elEn = document.getElementById('langEn');
  const elEs = document.getElementById('langEs');
  if (elEn) elEn.classList.toggle('active', lang === 'en');
  if (elEs) elEs.classList.toggle('active', lang === 'es');

  const d = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (d[key] !== undefined) el.innerHTML = d[key];
  });
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
});

// Make it global so HTML onclick="setLang('en')" still works
window.setLang = setLang;
