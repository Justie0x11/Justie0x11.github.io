(function () {
  var body = document.body;
  var buttons = document.querySelectorAll('.lang-switch button');
  function setLang(lang) {
    body.classList.remove('lang-zh', 'lang-en');
    body.classList.add('lang-' + lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    buttons.forEach(function (b) { b.classList.toggle('active', b.dataset.lang === lang); });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  buttons.forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.lang); }); });
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (!saved) saved = /^zh/i.test(navigator.language) ? 'zh' : 'en';
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
