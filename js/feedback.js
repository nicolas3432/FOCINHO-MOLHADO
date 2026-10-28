/* Feedback dos formulários: toast (contato) ou modal (cadastro).
   O navegador já valida os campos; este código só roda se tudo estiver válido.
   Ainda não há servidor nesta entrega, então nada é enviado. */
(() => {
  const MENSAGEM = 'Dados validados com sucesso. O envio ao servidor será implementado nas próximas entregas.';

  // A área de avisos nasce vazia junto com a página: leitores de tela só
  // anunciam o que entra numa região que já existia.
  const obterArea = () => {
    let area = document.querySelector('.toasts');
    if (!area) {
      area = document.createElement('div');
      area.className = 'toasts';
      area.setAttribute('role', 'status');
      document.body.appendChild(area);
    }
    return area;
  };

  const mostrarToast = (texto) => {
    const area = obterArea();
    const toast = document.createElement('div');
    toast.className = 'toast';
    const p = document.createElement('p');
    p.textContent = texto;
    const fechar = document.createElement('button');
    fechar.type = 'button';
    fechar.className = 'toast__fechar';
    fechar.setAttribute('aria-label', 'Fechar aviso');
    fechar.textContent = '×';
    fechar.addEventListener('click', () => toast.remove());
    toast.append(p, fechar);
    area.appendChild(toast);
    setTimeout(() => toast.remove(), 6000);
  };

  if (document.querySelector('form[data-feedback="toast"]')) obterArea();

  document.querySelectorAll('form[data-feedback]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.reset();
      const modal = document.getElementById('modal-cadastro');
      if (form.dataset.feedback === 'modal' && modal && modal.showModal) modal.showModal();
      else mostrarToast(MENSAGEM);
    });
  });

  document.querySelectorAll('[data-fechar-modal]').forEach((b) =>
    b.addEventListener('click', () => b.closest('dialog').close()));
})();
