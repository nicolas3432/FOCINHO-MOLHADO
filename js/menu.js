/* Menu hambúrguer (telas < 992px). Sem JS o menu continua visível. */
(() => {
  const nav = document.getElementById('menu-principal');
  const botao = document.querySelector('.menu-toggle');
  if (!nav || !botao) return;

  nav.classList.add('menu--js');
  botao.hidden = false;

  const alternar = (abrir) => {
    nav.classList.toggle('is-open', abrir);
    botao.setAttribute('aria-expanded', String(abrir));
  };

  botao.addEventListener('click', () => alternar(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) alternar(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      alternar(false);
      botao.focus();
    }
  });
})();
