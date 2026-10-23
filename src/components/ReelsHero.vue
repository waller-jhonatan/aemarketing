<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ReelsCelular from './ReelsCelular.vue'
import { reelVideomaker, whatsappEvento } from '../data/contato'
import { reel } from '../data/videomaker'

const QUERY_PARALAXE = '(min-width: 980px) and (hover: hover)'

const palco = ref(null)
const entregas = ['Vídeos', 'Stories ao vivo', 'Bastidores', 'Fotos']

// Cards drift a little with the pointer, each at its own depth (--z).
let raf
function aoMover(ev) {
  if (!palco.value || !matchMedia(QUERY_PARALAXE).matches) return
  const r = palco.value.getBoundingClientRect()
  const px = ((ev.clientX - r.left) / r.width - 0.5) * 2
  const py = ((ev.clientY - r.top) / r.height - 0.5) * 2
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    palco.value.style.setProperty('--px', px.toFixed(3))
    palco.value.style.setProperty('--py', py.toFixed(3))
  })
}

// Decorative "live for" clock on one of the cards.
const relogio = ref('')
let segundos = 4 * 3600 + 37 * 60 + 12
let tick
function atualizarRelogio() {
  const h = Math.floor(segundos / 3600)
  const m = Math.floor((segundos % 3600) / 60)
  const s = segundos % 60
  relogio.value = [h, m, s].map((n) => String(n).padStart(2, '0')).join(':')
  segundos++
}

onMounted(() => {
  atualizarRelogio()
  tick = setInterval(atualizarRelogio, 1000)
})

onBeforeUnmount(() => {
  clearInterval(tick)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <section id="reels" class="ig" @pointermove="aoMover">
    <div class="ig-linhas" aria-hidden="true"></div>
    <div class="ig-glow glow" aria-hidden="true"></div>
    <div class="ig-grao" aria-hidden="true"></div>

    <p class="m in t1 ig-rotulo">Vídeo maker · Storymaker · Para eventos</p>

    <div ref="palco" class="ig-palco">
      <h1 class="ig-titulo">
        <span class="ig-palavra in t2">Momentos</span>
        <span class="ig-palavra in t3">eternizados</span>
      </h1>

      <ReelsCelular class="in t3" />

      <div class="ig-chips">
        <div class="ig-chip ig-c1">
          <div class="ig-cartao is-claro">
            <span class="ig-titulo-cartao"><span class="ig-live live" aria-hidden="true"></span>Stories ao vivo</span>
            <small>Publicados enquanto a festa acontece, para quem está longe sentir tudo junto.</small>
          </div>
        </div>

        <div class="ig-chip ig-c2">
          <div class="ig-cartao">
            <strong>Cobertura completa</strong>
            <ul class="ig-lista">
              <li v-for="e in entregas" :key="e"><span>{{ e }}</span><i class="ig-toggle" aria-hidden="true"></i></li>
            </ul>
            <a class="ig-botao" :href="whatsappEvento">Orçar meu evento</a>
            <a class="ig-link" :href="reelVideomaker" target="_blank" rel="noopener">Ver mais no Instagram</a>
          </div>
        </div>

        <div class="ig-chip ig-c3">
          <div class="ig-cartao ig-dm">
            <span class="ig-avatar"><img src="/favicon.svg" alt="" /></span>
            <div>
              <strong>aemarketiing enviou um vídeo</strong>
              <small>Editado e pronto para postar.</small>
            </div>
            <img class="ig-miniatura" :src="reel.capa" alt="" />
          </div>
        </div>

        <div class="ig-chip ig-c4">
          <div class="ig-cartao ig-foto-cartao">
            <img src="/img/equipe-sorrindo.jpg" alt="" />
            <div>
              <span class="ig-titulo-cartao">★ Olhares</span>
              <small>Os abraços, os sorrisos e a energia de quem viveu tudo intensamente.</small>
            </div>
          </div>
        </div>

        <div class="ig-chip ig-c5">
          <div class="ig-cartao">
            <span class="m" style="color: #C9A4FF; display: flex; align-items: center; gap: 8px">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              Ao vivo há
            </span>
            <span class="ig-relogio">{{ relogio }}</span>
            <small>Do primeiro brinde à última música.</small>
          </div>
        </div>

        <div class="ig-chip ig-c6">
          <div class="ig-cartao is-claro">
            <span class="ig-titulo-cartao">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="2.18" /><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" /></svg>
              Filme editado*
            </span>
            <small>*com estética profissional, pronto para guardar para sempre.</small>
          </div>
        </div>
      </div>
    </div>

    <div class="ig-lead in t5">
      <p>
        Registramos o seu evento com o olhar de quem conta histórias: a alegria, a emoção, a dança e cada detalhe que
        faz daquele dia um dia único.
      </p>
      <div class="ig-botoes">
        <a class="btn btn-p" :href="whatsappEvento" style="display: inline-flex; align-items: center; gap: 10px; min-height: 56px; padding: 0 28px; border-radius: 999px; background: linear-gradient(100deg,#6A0DC9,#9B3BFF); color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 16px">
          Orçar meu evento
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
        </a>
        <a class="btn btn-g" :href="reelVideomaker" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 56px; padding: 0 28px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.28); color: #F4F1FA; text-decoration: none; font-weight: 500; font-size: 16px">
          Assistir no Instagram
        </a>
      </div>
    </div>
  </section>
</template>
