<script setup>
const caminhos = [
  {
    to: '/empresas',
    rotulo: 'Para empresas',
    titulo: 'Sua marca presente nas redes, todo mês',
    texto: 'Tudo o que a sua marca precisa para crescer nas redes, com planos mensais.',
    servicos: [
      { icone: 'share', titulo: 'Social Media', texto: 'Gestão de redes sociais e presença digital.' },
      { icone: 'video', titulo: 'Criação de conteúdo', texto: 'Artes, vídeos e conteúdos para marcas.' },
      { icone: 'target', titulo: 'Tráfego pago', texto: 'Campanhas para alcançar o público certo.' },
      { icone: 'trend', titulo: 'Marketing digital', texto: 'Estratégia para fortalecer sua marca.' },
    ],
    cta: 'Ver serviços para empresas',
    escuro: false,
  },
  {
    to: '/eventos',
    rotulo: 'Para eventos',
    titulo: 'Seu evento ao vivo nas redes',
    texto: 'Vídeo maker e storymaker cobrindo o seu evento em tempo real, com material editado e pronto para postar.',
    itens: ['Vídeos e fotos do evento', 'Stories em tempo real', 'Bastidores e entrega editada'],
    cta: 'Ver cobertura de eventos',
    escuro: true,
  },
]
</script>

<template>
  <section id="caminhos" style="background: #F6F4F9; color: #16131D; padding: 120px 24px">
    <div style="max-width: 1240px; margin: 0 auto">
      <div class="rv" style="max-width: 720px; margin-bottom: 56px">
        <p class="m" style="margin: 0 0 20px; font-size: 13px; color: #6B12C9; display: flex; align-items: center; gap: 12px">
          <span aria-hidden="true" style="width: 32px; height: 2px; background: #6B12C9; display: inline-block"></span>Escolha seu caminho
        </p>
        <h2 style="margin: 0; font-size: clamp(36px, 4.6vw, 60px); line-height: 1.05; font-weight: 800; letter-spacing: -0.03em">
          Como a AE Marketing <span class="grad">pode te ajudar?</span>
        </h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px">
        <RouterLink
          v-for="c in caminhos"
          :key="c.to"
          :to="c.to"
          class="card rv gx caminho"
          :class="{ 'gx-dark': c.escuro }"
          :style="{
            background: c.escuro ? '#16131D' : '#FFFFFF',
            color: c.escuro ? '#F4F1FA' : '#16131D',
            border: `1px solid ${c.escuro ? '#16131D' : '#E7E2EF'}`,
          }"
        >
          <div class="gx-shine" aria-hidden="true"></div>
          <div class="gx-bg" aria-hidden="true">
            <div class="gx-tiles"><i v-for="n in 10" :key="n"></i></div>
            <div class="gx-line gx-l1"></div><div class="gx-line gx-l2"></div><div class="gx-line gx-l3"></div>
          </div>
          <span
            class="m"
            :style="{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              borderRadius: '999px',
              fontSize: '12px',
              background: c.escuro ? 'rgba(255,255,255,0.08)' : '#F0E6FF',
              color: c.escuro ? '#FFFFFF' : '#6B12C9',
            }"
          >
            <span v-if="c.escuro" class="live" aria-hidden="true" style="width: 8px; height: 8px; border-radius: 50%; background: #FF4D6D; display: inline-block"></span>{{ c.rotulo }}
          </span>
          <h3 class="d" style="margin: 0; font-size: 30px; line-height: 1.15; font-weight: 700">{{ c.titulo }}</h3>
          <p :style="{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: c.escuro ? '#B9B2C7' : '#5E5869' }">{{ c.texto }}</p>
          <ul v-if="c.servicos" class="caminho-servicos">
            <li v-for="s in c.servicos" :key="s.titulo">
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
          <ul v-else style="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 15px">
            <li v-for="item in c.itens" :key="item" style="display: flex; gap: 10px">
              <span aria-hidden="true" :style="{ color: c.escuro ? '#B57BFF' : '#8B2CF5', fontWeight: 700 }">+</span>{{ item }}
            </li>
          </ul>
          <span :style="{ marginTop: 'auto', paddingTop: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '16px', color: c.escuro ? '#C9A4FF' : '#6B12C9' }">
            {{ c.cta }}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
