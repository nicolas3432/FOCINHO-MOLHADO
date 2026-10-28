/* Máscaras de digitação: elementos com data-mascara="telefone|cpf|cep" */
(() => {
  const so = (v, n) => v.replace(/\D/g, '').slice(0, n);

  const mascaras = {
    telefone: (v) => {
      const d = so(v, 11);
      if (!d) return '';
      if (d.length <= 2) return '(' + d;
      const fim = d.length > 10 ? d.slice(2, 7) + '-' + d.slice(7)
                                : d.slice(2, 6) + (d.length > 6 ? '-' + d.slice(6) : '');
      return '(' + d.slice(0, 2) + ') ' + fim;
    },
    cpf: (v) => {
      const d = so(v, 11);
      return d.slice(0, 3) + (d.length > 3 ? '.' + d.slice(3, 6) : '') +
             (d.length > 6 ? '.' + d.slice(6, 9) : '') + (d.length > 9 ? '-' + d.slice(9) : '');
    },
    cep: (v) => {
      const d = so(v, 8);
      return d.slice(0, 5) + (d.length > 5 ? '-' + d.slice(5) : '');
    }
  };

  document.addEventListener('input', (e) => {
    const campo = e.target;
    const tipo = campo.dataset && campo.dataset.mascara;
    if (tipo && mascaras[tipo]) campo.value = mascaras[tipo](campo.value);
  });
})();
