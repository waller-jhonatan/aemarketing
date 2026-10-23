<script setup>
// "Escolha seu caminho" da home: empresas (presença todo mês) e eventos (um
// dia único), lado a lado, com a mesma estrutura para ficarem do mesmo
// tamanho: título, texto, um bloco ilustrado, quatro itens e os botões.

// No celular a semana vira uma lista, com o nome do dia por extenso.
const semana = [
  { dia: 'Seg', itens: [{ nome: 'Post', tipo: 'post' }] },
  { dia: 'Ter', itens: [{ nome: 'Reels', tipo: 'reels' }, { nome: 'Stories', tipo: 'stories' }] },
  { dia: 'Qua', itens: [{ nome: 'Post', tipo: 'post' }] },
  { dia: 'Qui', itens: [{ nome: 'Anúncio', tipo: 'anuncio' }, { nome: 'Stories', tipo: 'stories' }] },
  { dia: 'Sex', itens: [{ nome: 'Reels', tipo: 'reels' }] },
  { dia: 'Sáb', itens: [{ nome: 'Stories', tipo: 'stories' }, { nome: 'Post', tipo: 'post' }] },
  { dia: 'Dom', itens: [{ nome: 'Relatório', tipo: 'relatorio' }] },
]

const servicos = [
  { icone: 'share', titulo: 'Social Media', texto: 'Gestão de redes sociais e presença digital.' },
  { icone: 'video', titulo: 'Criação de conteúdo', texto: 'Artes, vídeos e conteúdos para marcas.' },
  { icone: 'target', titulo: 'Tráfego pago', texto: 'Campanhas para alcançar o público certo.' },
  { icone: 'trend', titulo: 'Marketing digital', texto: 'Estratégia para fortalecer sua marca.' },
]

const momentos = [
  { hora: '16h', nome: 'Cerimônia', tag: 'Stories ao vivo', aoVivo: true },
  { hora: '18h', nome: 'Brinde', tag: 'Fotos' },
  { hora: '21h', nome: 'Pista', tag: 'Bastidores', aoVivo: true },
  { hora: '+1 dia', nome: 'Entrega', tag: 'Vídeo editado' },
]

const entregas = [
  { icone: 'video', titulo: 'Vídeos e fotos', texto: 'Registrados durante o evento.' },
  { icone: 'live', titulo: 'Stories ao vivo', texto: 'Publicados na hora, para quem está longe.' },
  { icone: 'olhar', titulo: 'Bastidores', texto: 'Os detalhes que ninguém viu.' },
  { icone: 'filme', titulo: 'Filme editado', texto: 'Com estética profissional, pronto para postar.' },
]
</script>

<template>
  <section id="caminhos" class="dc">
    <div style="max-width: 1240px; margin: 0 auto">
      <div class="rv dc-cab">
        <p class="m" style="margin: 0 0 20px; font-size: 13px; color: #6B12C9; display: flex; align-items: center; gap: 12px">
          <span aria-hidden="true" style="width: 32px; height: 2px; background: #6B12C9; display: inline-block"></span>Escolha seu caminho
        </p>
        <h2 style="margin: 0; font-size: clamp(36px, 4.6vw, 60px); line-height: 1.05; font-weight: 800; letter-spacing: -0.03em">
          Todo mês ou um dia único. <span class="grad">A gente cuida dos dois.</span>
        </h2>
        <p class="dc-sub">
          Marcas precisam aparecer todo dia. Eventos acontecem uma vez só. São olhares diferentes, e a gente tem os dois.
        </p>
      </div>

      <div class="dc-grade">
        <article class="card rv dc-painel is-claro">
          <header class="dc-topo">
            <span class="m dc-chip">Para empresas</span>
            <span class="m dc-nota">Planos mensais</span>
          </header>
          <h3 class="d">Presença todo mês</h3>
          <p class="dc-texto">Gestão de redes, conteúdo e tráfego pago para a sua marca aparecer sempre — e ser escolhida.</p>

          <div class="dc-bloco" role="img" aria-label="Exemplo de uma semana de conteúdo: posts, reels, stories, anúncio e relatório">
            <span class="m dc-bloco-titulo" aria-hidden="true">Sua semana nas redes</span>
            <div class="dc-semana">
              <div v-for="(d, i) in semana" :key="i" class="dc-dia">
                <span class="m dc-dia-nome" aria-hidden="true"><b>{{ d.dia[0] }}</b><i>{{ d.dia }}</i></span>
                <span v-for="(it, j) in d.itens" :key="it.nome" class="dc-pilula" :class="`is-${it.tipo}`" :style="{ '--i': i + j }">{{ it.nome }}</span>
              </div>
            </div>
          </div>

          <ul class="caminho-servicos">
            <li v-for="s in servicos" :key="s.titulo">
              <span class="caminho-icone" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <template v-if="s.icone === 'share'">
                    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                    <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
                  </template>
                  <template v-else-if="s.icone === 'video'">
                    <path d="m16 13 5.22 3.48a.5.5 0 0 0 .78-.42V7.87a.5.5 0 0 0-.75-.43L16 10.5" />
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                  </template>
                  <template v-else-if="s.icone === 'target'">
                    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                  </template>
                  <template v-else>
                    <path d="M22 7 13.5 15.5 8.5 10.5 2 17" /><path d="M16 7h6v6" />
                  </template>
                </svg>
              </span>
              <strong class="d">{{ s.titulo }}</strong>
              <span class="caminho-desc">{{ s.texto }}</span>
            </li>
          </ul>

          <div class="dc-acoes">
            <RouterLink class="btn btn-p dc-botao" to="/empresas#planos">
              Ver planos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
            </RouterLink>
            <RouterLink class="dc-link" to="/empresas">Tudo para empresas</RouterLink>
          </div>
        </article>

        <span class="m dc-ou" aria-hidden="true">ou</span>

        <article class="card rv dc-painel is-escuro">
          <header class="dc-topo">
            <span class="m dc-chip"><span class="live" aria-hidden="true"></span>Para eventos</span>
            <span class="m dc-nota">Cobertura ao vivo</span>
          </header>
          <h3 class="d">Um dia único, ao vivo</h3>
          <p class="dc-texto">Vídeo maker e storymaker registrando o seu evento em tempo real, com material editado pronto para postar.</p>

          <div class="dc-bloco">
            <span class="m dc-bloco-titulo">O dia do evento</span>
            <ol class="dc-dia-evento" aria-label="Exemplo de cobertura de um evento">
              <li v-for="(m, i) in momentos" :key="m.hora" class="dc-momento" :style="{ '--i': i }">
                <span class="m dc-hora">{{ m.hora }}</span>
                <span class="dc-ponto" :class="{ 'is-live': m.aoVivo }" aria-hidden="true"></span>
                <span class="dc-nome">{{ m.nome }}</span>
                <span class="m dc-tag"><span v-if="m.aoVivo" class="live" aria-hidden="true"></span>{{ m.tag }}</span>
              </li>
            </ol>
          </div>

          <ul class="caminho-servicos">
            <li v-for="e in entregas" :key="e.titulo">
              <span class="caminho-icone" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <template v-if="e.icone === 'video'">
                    <path d="m16 13 5.22 3.48a.5.5 0 0 0 .78-.42V7.87a.5.5 0 0 0-.75-.43L16 10.5" />
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                  </template>
                  <template v-else-if="e.icone === 'live'">
                    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5M19.1 4.9C23 8.8 23 15.1 19.1 19" /><circle cx="12" cy="12" r="2" />
                  </template>
                  <template v-else-if="e.icone === 'olhar'">
                    <path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0" /><circle cx="12" cy="12" r="3" />
                  </template>
                  <template v-else>
                    <rect x="2" y="2" width="20" height="20" rx="2.18" /><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
                  </template>
                </svg>
              </span>
              <strong class="d">{{ e.titulo }}</strong>
              <span class="caminho-desc">{{ e.texto }}</span>
            </li>
          </ul>

          <div class="dc-acoes">
            <RouterLink class="btn btn-p dc-botao" to="/eventos">
              Ver cobertura de eventos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
            </RouterLink>
            <RouterLink class="dc-link" to="/video-maker">Ver o vídeo maker</RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
