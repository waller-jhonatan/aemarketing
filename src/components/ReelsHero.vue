<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { contato, reelVideomaker, whatsappEvento } from '../data/contato'

// The phone frame is narrow, so the lighter mobile file is enough everywhere.
const VIDEO = '/video/video-mobile.mp4'
const POSTER = '/video/video-capa.jpg'
const QUERY_PARALAXE = '(min-width: 980px) and (hover: hover)'

const palco = ref(null)
const video = ref(null)
const tocando = ref(false)
const somAtivo = ref(false)
const curtido = ref(false)
const salvo = ref(false)
const interagiu = ref(false)
const progresso = ref(0)
// Icon flashed in the middle of the screen; the key restarts the animation.
const flash = ref({ tipo: '', k: 0 })
const coracaoK = ref(0)

const entregas = ['Vídeos', 'Stories ao vivo', 'Bastidores', 'Fotos']
const coracoes = [
  { x: '-10px', del: '0s' },
  { x: '8px', del: '.7s' },
  { x: '-4px', del: '1.4s' },
  { x: '12px', del: '2.1s' },
  { x: '-14px', del: '2.8s' },
]

// Whether the video should be playing: off for reduced motion, on after a tap.
const deveTocar = ref(false)

// Browsers refuse or pause muted video in hidden tabs and offscreen, so this
// runs again on `canplay`, when the tab is shown and when the phone scrolls
// back into view.
function tocar() {
  const v = video.value
  if (v?.paused && deveTocar.value) v.play().catch(() => {})
}

function alternarSom() {
  const v = video.value
  if (!v) return
  // A paused video starts with sound: the tap is the gesture browsers need.
  somAtivo.value = v.paused ? true : !somAtivo.value
  v.muted = !somAtivo.value
  deveTocar.value = true
  tocar()
  flash.value = { tipo: somAtivo.value ? 'som' : 'mudo', k: flash.value.k + 1 }
}

function curtir() {
  curtido.value = true
  coracaoK.value++
}

// Like Instagram: one tap toggles the sound, two quick taps like the video.
let ultimoToque = 0
let toqueTimer
function aoTocar() {
  interagiu.value = true
  const agora = Date.now()
  if (agora - ultimoToque < 300) {
    clearTimeout(toqueTimer)
    ultimoToque = 0
    curtir()
    return
  }
  ultimoToque = agora
  toqueTimer = setTimeout(alternarSom, 300)
}

function aoAvancar() {
  const v = video.value
  if (v?.duration) progresso.value = v.currentTime / v.duration
}

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

function aoVoltar() {
  if (document.visibilityState === 'visible') tocar()
}

let observador
onMounted(() => {
  atualizarRelogio()
  tick = setInterval(atualizarRelogio, 1000)
  deveTocar.value = !matchMedia('(prefers-reduced-motion: reduce)').matches
  document.addEventListener('visibilitychange', aoVoltar)
  // Pause offscreen to save battery; resume when the phone is back in view.
  observador = new IntersectionObserver(([e]) => (e.isIntersecting ? tocar() : video.value?.pause()))
  observador.observe(video.value)
  tocar()
})

onBeforeUnmount(() => {
  clearInterval(tick)
  clearTimeout(toqueTimer)
  cancelAnimationFrame(raf)
  observador?.disconnect()
  document.removeEventListener('visibilitychange', aoVoltar)
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

      <div class="ig-celular in t3">
        <div class="ig-tela">
          <div class="ig-ilha" aria-hidden="true"></div>
          <video
            ref="video"
            :src="VIDEO"
            :poster="POSTER"
            muted
            loop
            playsinline
            preload="auto"
            aria-label="Trecho de uma cobertura de casamento feita pela AE Marketing"
            @canplay="tocar"
            @play="tocando = true"
            @pause="tocando = false"
            @timeupdate="aoAvancar"
          ></video>
          <button type="button" class="ig-toque" :aria-label="somAtivo ? 'Desativar som' : 'Ativar som'" @click="aoTocar"></button>

          <div class="ig-topo" aria-hidden="true">
            <span>Reels</span>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
          </div>
          <div v-if="!interagiu" class="ig-dica" aria-hidden="true">Toque para ouvir · 2 toques para curtir</div>
          <div v-if="!tocando" class="ig-play" aria-hidden="true">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" /></svg>
          </div>

          <div class="ig-rail">
            <button type="button" :class="{ 'is-on': curtido }" :aria-pressed="curtido" aria-label="Curtir" @click="curtido ? (curtido = false) : curtir()">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            </button>
            <a :href="reelVideomaker" target="_blank" rel="noopener" aria-label="Comentar no Instagram">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
            </a>
            <a :href="whatsappEvento" aria-label="Compartilhar no WhatsApp">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4Z" /></svg>
            </a>
            <button type="button" :class="{ 'is-on': salvo }" :aria-pressed="salvo" aria-label="Salvar" @click="salvo = !salvo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" /></svg>
            </button>
            <span class="ig-disco" aria-hidden="true"></span>
          </div>

          <div class="ig-rodape">
            <div class="ig-perfil">
              <span class="ig-avatar"><img src="/favicon.svg" alt="" /></span>
              <span>aemarketiing</span>
              <a class="ig-seguir" :href="contato.instagram" target="_blank" rel="noopener">Seguir</a>
            </div>
            <p class="ig-legenda">Momentos que merecem ser eternizados 💜 <span>#videomaker #storymaker #eventos</span></p>
            <p class="ig-som">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
              aemarketiing · Som original
            </p>
          </div>

          <div class="ig-barra" aria-hidden="true"><i :style="{ '--p': progresso }"></i></div>

          <div :key="flash.k" class="ig-flash" :class="{ 'is-on': flash.tipo }" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 5 6 9H2v6h4l5 4z" />
              <template v-if="flash.tipo === 'som'"><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M19 5a10 10 0 0 1 0 14" /></template>
              <template v-else><path d="m23 9-6 6M17 9l6 6" /></template>
            </svg>
          </div>
          <div :key="coracaoK" class="ig-coracao" :class="{ 'is-on': coracaoK > 0 }" aria-hidden="true">
            <svg width="96" height="96" viewBox="0 0 24 24" fill="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
          </div>
          <div v-if="tocando" class="ig-flutua" aria-hidden="true">
            <i v-for="c in coracoes" :key="c.del" :style="{ '--x': c.x, '--del': c.del }"></i>
          </div>
        </div>
      </div>

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
            <img class="ig-miniatura" :src="POSTER" alt="" />
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
