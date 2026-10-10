(function () {
  var dict = window.I18N || {}, langs = window.LANGS || [];
  var selects = document.querySelectorAll('.lang-select');
  function htmlLang(code) { for (var i = 0; i < langs.length; i++) if (langs[i][0] === code) return langs[i][2]; return code; }
  function setLang(lang) {
    if (!dict[lang]) lang = 'en';
    var t = dict[lang], en = dict.en || {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n'); el.textContent = t[k] != null ? t[k] : (en[k] || '');
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html'); el.innerHTML = t[k] != null ? t[k] : (en[k] || '');
    });
    document.documentElement.lang = htmlLang(lang);
    document.body.className = document.body.className.replace(/\blang-\w+/g, '').trim() + ' lang-' + lang;
    selects.forEach(function (s) { s.value = lang; });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  selects.forEach(function (s) { s.addEventListener('change', function () { setLang(s.value); }); });
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (!saved || !dict[saved]) {
    var nav = (navigator.language || 'en').toLowerCase().slice(0, 2);
    saved = dict[nav] ? nav : 'en';
  }
  setLang(saved);

  var values = { EMAIL: 'advjustie@gmail.com', GITHUB: 'github.com/Justie0x11', SCHOLAR: '—' };
  var tabs = document.querySelectorAll('.terminal-tabs span');
  var target = document.getElementById('copy-target');
  if (target) tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (x) { x.classList.toggle('active', x === t); });
      target.textContent = values[t.textContent];
    });
  });
  var copy = document.querySelector('.copy');
  if (copy && target) copy.addEventListener('click', function () {
    var txt = target.textContent;
    if (navigator.clipboard) navigator.clipboard.writeText(txt);
    copy.classList.add('done');
    setTimeout(function () { copy.classList.remove('done'); }, 1200);
  });
})();
