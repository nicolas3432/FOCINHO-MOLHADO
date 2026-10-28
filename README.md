# ONG Focinho Molhado — Entrega II (CSS3)

Abra `index.html` no navegador (não precisa de servidor nem instalação).
A fonte *Outfit* vem do Google Fonts; sem internet o site usa Arial e continua funcionando.

```
index.html · sobre.html · projetos.html · cadastro.html · contato.html
css/
  style.css            só importa os módulos
  base/                variaveis.css (design system) · reset.css (estilos globais e hierarquia de títulos)
  layout/              grid.css (12 colunas, 5 breakpoints) · cabecalho · conteudo · rodape
  components/          menu · botoes · cards · badges · formularios · feedback · indicadores · hero
js/                    menu.js (hambúrguer) · mascaras.js (telefone/CPF/CEP) · feedback.js (toast/modal)
img/                   fotos (.jpg/.webp) e logo-focinho.svg
```

## Design system (css/base/variaveis.css)
- **Cores:** 20+ variáveis (primárias, secundárias, neutras e de estado).
- **Tipografia:** 8 tamanhos (`--fs-xs` a `--fs-hero`); h1/h2/h3 usam a escala (reset.css).
- **Espaçamento:** 8, 16, 24, 32, 48 e 64px (`--esp-1` a `--esp-6`) + meio-passos de 4px e 12px.
- **Breakpoints:** 480, 768, 992, 1200 e 1400px (grid.css, conteudo.css, menu.css, hero.css, botoes.css).

Os formulários validam no navegador (visual com `:user-valid` / `:user-invalid`), mas ainda
não enviam dados (não há servidor nesta entrega).
