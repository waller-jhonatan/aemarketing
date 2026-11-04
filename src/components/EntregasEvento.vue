<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { reel } from '../data/videomaker'

// "O que fica do seu evento": grade com o reel de verdade tocando, as fotos
// de cobertura com o que entra em cada entrega e três motivos de por que
// registrar importa. Fica em /eventos, entre o topo e o "Por que registrar".

const video = ref(null)
let observador

// O reel toca sem som só enquanto está na tela; com movimento reduzido fica
// na capa.
onMounted(() => {
  const v = video.value
  if (!v || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  observador = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) v.play().catch(() => {})
    else v.pause()
  })
  observador.observe(v)
})

onBeforeUnmount(() => observador?.disconnect())

const entregas = [
  { foto: '/img/evento-igreja.jpg', pos: '50% 30%', aoVivo: true, titulo: 'Stories ao vivo', texto: 'Publicados na hora, para quem está longe sentir que estava lá.', alt: 'Videomaker gravando ao vivo em uma igreja' },
  { foto: '/img/equipe-sorrindo.jpg', pos: '50% 28%', titulo: 'Fotos', texto: 'Os encontros, os abraços e os detalhes que passam rápido.', alt: 'Integrante da AE Marketing sorrindo com celular e luz de gravação' },
  { foto: '/img/equipe-filmando.jpg', pos: '50% 30%', titulo: 'Bastidores', texto: 'O que ninguém viu, contado com estética profissional.', alt: 'Videomaker filmando com celular' },
]

const motivos = [
  { n: 'Na hora', texto: 'Os primeiros stories sobem ainda durante a festa. Quem não pôde ir acompanha em tempo real.' },
  { n: 'Semanas', texto: 'De conteúdo para as redes depois que a festa acaba: o seu evento continua rendendo.' },
  { n: 'Pra sempre', texto: 'O filme editado guarda o que a memória deixa escapar, com o mesmo brilho do dia.' },
]
</script>

<template>
  <section id="entregas" class="ev">
    <div class="glow" aria-hidden="true" style="position: absolute; right: -240px; top: -220px; width: 720px; height: 720px; border-radius: 50%; background: radial-gradient(circle, rgba(140,40,240,0.16) 0%, rgba(246,244,249,0) 65%); pointer-events: none"></div>
    <div class="ev-grade" style="position: relative">
      <div class="rv ev-cab">
        <p class="m" style="margin: 0 0 20px; font-size: 13px; color: #6B12C9; display: flex; align-items: center; gap: 12px">
          <span aria-hidden="true" style="width: 32px; height: 2px; background: #6B12C9; display: inline-block"></span>O que fica do seu evento
        </p>
        <h2 style="margin: 0; font-size: clamp(36px, 4.8vw, 64px); line-height: 1.05; font-weight: 300; letter-spacing: -0.035em; color: #16131D">
          O dia dura horas. <span class="grad" style="font-weight: 800; display: inline-block">O registro, para sempre.</span>
        </h2>
        <p class="ev-sub">
          Quem não pôde ir acompanha ao vivo. Quem foi, revive. E o seu evento continua nas redes semanas depois, com o olhar de quem conta histórias.
        </p>
      </div>

      <div class="ev-bento">
        <div class="rv ev-tile is-video">
          <video ref="video" :src="reel.video" :poster="reel.capa" muted loop playsinline preload="metadata" aria-label="Trecho de um filme de evento feito pela AE Marketing"></video>
          <div class="ev-sombra" aria-hidden="true"></div>
          <span class="m ev-chip"><span class="live" aria-hidden="true"></span>Filme editado</span>
          <RouterLink class="ev-som" to="/video-maker">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" /></svg>
            Ver com som
          </RouterLink>
        </div>

        <template v-for="(e, i) in entregas" :key="e.titulo">
          <div class="rv ev-tile is-foto photo" :style="{ '--d': `${0.1 + i * 0.12}s` }">
            <img :src="e.foto" :alt="e.alt" loading="lazy" :style="{ objectPosition: e.pos }" />
            <div class="ev-sombra" aria-hidden="true"></div>
            <span v-if="e.aoVivo" class="m ev-chip"><span class="live" aria-hidden="true"></span>Ao vivo</span>
            <div class="ev-legenda">
              <strong class="d">{{ e.titulo }}</strong>
              <span>{{ e.texto }}</span>
            </div>
          </div>
          <div class="rv ev-tile is-motivo" :style="{ '--d': `${0.16 + i * 0.12}s` }">
            <span class="d grad ev-n">{{ motivos[i].n }}</span>
            <p>{{ motivos[i].texto }}</p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
