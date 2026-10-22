# AE Marketing — site

Landing page da AE Marketing em Vue 3 + Vite + Vue Router.

## Rotas

| Rota        | Conteúdo                                                                 |
|-------------|--------------------------------------------------------------------------|
| `/`         | Hero, faixa de serviços, "Escolha seu caminho" (empresas × eventos), contato |
| `/empresas` | Serviços para empresas, como ajudamos, como trabalhamos, planos, contato |
| `/eventos`  | Vídeo maker / storymaker para eventos, contato com orçamento de evento   |

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Os arquivos ficam em `dist/`. O roteamento usa o History API (`/empresas`, `/eventos`),
então o servidor precisa devolver `index.html` para rotas desconhecidas
(ex.: `try_files $uri /index.html` no Nginx, ou um rewrite `/* /index.html 200` no Netlify).

## Estrutura

- `src/views/` — uma view por rota
- `src/components/` — seções da página (cabeçalho, hero, serviços, planos, eventos, contato…)
- `src/data/contato.js` — WhatsApp, e-mail e Instagram usados no site todo
- `src/composables/useReveal.js` — animação de entrada das seções ao rolar
- `src/styles/` — fontes (Inter, Sora, JetBrains Mono, servidas localmente) e estilos globais
- `public/img/` — fotos da equipe
