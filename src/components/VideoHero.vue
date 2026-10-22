<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { reelVideomaker, whatsappEvento } from '../data/contato'

// Desktop usa o vídeo original do reel; celular usa uma versão mais leve
// (540x960, ~12 MB) para começar a tocar mais rápido. A capa é o primeiro
// quadro do vídeo, então a página já abre com a imagem certa.
const VIDEO_DESKTOP = '/video/video1.mp4'
const VIDEO_CELULAR = '/video/video-mobile.mp4'
const POSTER = '/video/video-capa.jpg'
const QUERY_DESKTOP = '(min-width: 980px)'

const fundo = ref(null)
const quadro = ref(null)
// Read synchronously so the first render already picks the right file.
const desktop = ref(matchMedia(QUERY_DESKTOP).matches)
const VIDEO = computed(() => (desktop.value ? VIDEO_DESKTOP : VIDEO_CELULAR))
const tocando = ref(false)
const semVideo = ref(false)
// Whether the videos should be playing: off for reduced motion or after the
// visitor pauses. Each video starts itself once it can play, so the desktop
// frame (rendered later) joins in sync with the background.
const deveTocar = ref(false)
// Sound starts on when the browser allows it (e.g. the visitor clicked a
// link to get here). Otherwise the video plays muted and sound turns on at the
// first click, tap or key press on the page. Only one video plays audio: the
// phone frame on desktop, the full-screen background on mobile.
const somAtivo = ref(false)
let escolheuSom = false
let mq

function videos() {
  return [fundo.value, quadro.value].filter(Boolean)
}

// Decide from what is on screen, not from `deveTocar`: when the browser blocks
// autoplay (e.g. iPhone in Low Power Mode) the video sits paused while
// `deveTocar` is still true, and flipping the flag would need two taps.
function alternar() {
  deveTocar.value = !tocando.value
  // This tap counts as the gesture browsers require for sound, so turn it on
  // unless the visitor already chose with the sound button.
  if (deveTocar.value && !escolheuSom) {
    pararDeEsperar()
    somAtivo.value = true
    aplicarSom()
  }
  videos().forEach((v) => (deveTocar.value ? v.play().catch(() => {}) : v.pause()))
}

function aplicarSom() {
  const comSom = videoComSom()
  videos().forEach((v) => (v.muted = !(somAtivo.value && v === comSom)))
}

function videoComSom() {
  return desktop.value && quadro.value ? quadro.value : fundo.value
}

function tocar(v) {
  v.play().catch((err) => {
    if (err.name !== 'NotAllowedError' || v.muted) return
    // Autoplay with sound blocked: keep playing muted, wait for a gesture.
    somAtivo.value = false
    aplicarSom()
    v.play().catch(() => {})
    esperarGesto()
  })
}

const GESTOS = ['click', 'touchend', 'keydown']

function aoGesto(ev) {
  pararDeEsperar()
  // The sound button handles its own click.
  if (escolheuSom || ev.target.closest?.('.vh-controles')) return
  somAtivo.value = true
  aplicarSom()
  deveTocar.value = true
  videos().forEach((v) => v.paused && v.play().catch(() => {}))
}

function esperarGesto() {
  GESTOS.forEach((t) => document.addEventListener(t, aoGesto, { capture: true }))
}

function pararDeEsperar() {
  GESTOS.forEach((t) => document.removeEventListener(t, aoGesto, { capture: true }))
}

function alternarSom() {
  escolheuSom = true
  pararDeEsperar()
  somAtivo.value = !somAtivo.value
  aplicarSom()
  if (somAtivo.value && !deveTocar.value) alternar()
}



// Runs once per video element. `canplay` fires again after every seek, so
// syncing on each event would seek in a loop and chop up the audio.
const iniciados = new WeakSet()

// Crossing the breakpoint swaps the background file, so let it start again.
watch(desktop, () => {
  if (fundo.value) iniciados.delete(fundo.value)
  nextTick(aplicarSom)
})

function pronto(ev) {
  const v = ev.target
  if (iniciados.has(v)) return
  iniciados.add(v)
  if (v !== fundo.value && fundo.value) v.currentTime = fundo.value.currentTime
  aplicarSom()
  if (deveTocar.value && v.paused) tocar(v)
}

// Browsers pause muted background videos in hidden tabs; resume on return.
function aoVoltar() {
  if (document.visibilityState === 'visible' && deveTocar.value) {
    videos().forEach((v) => v.paused && v.play().catch(() => {}))
  }
}

function sincronizarTamanho() {
  desktop.value = mq.matches
}

onMounted(() => {
  mq = matchMedia(QUERY_DESKTOP)
  sincronizarTamanho()
  mq.addEventListener('change', sincronizarTamanho)
  document.addEventListener('visibilitychange', aoVoltar)
  deveTocar.value = !matchMedia('(prefers-reduced-motion: reduce)').matches
  somAtivo.value = deveTocar.value
  videos().forEach((v) => v.readyState >= 3 && pronto({ target: v }))
})

onBeforeUnmount(() => {
  mq?.removeEventListener('change', sincronizarTamanho)
  document.removeEventListener('visibilitychange', aoVoltar)
  pararDeEsperar()
})
</script>

<template>
  <section id="video-hero" class="vh">
    <video
      ref="fundo"
      class="vh-fundo"
      :class="{ 'is-desfocado': desktop }"
      :src="VIDEO"
      :poster="POSTER"
      muted
      loop
      playsinline
      preload="auto"
      aria-hidden="true"
      @canplay="pronto"
      @play="tocando = true"
      @pause="tocando = false"
      @error="semVideo = true"
    ></video>
    <div class="vh-sombra" aria-hidden="true"></div>

    <div class="vh-grade">
      <div class="vh-texto">
        <p class="m in t1" style="margin: 0 0 24px; font-size: 13px; color: #C9A4FF; display: flex; align-items: center; gap: 12px">
          <span aria-hidden="true" style="width: 32px; height: 2px; background: #9B3BFF; display: inline-block"></span>Vídeo maker · Storymaker
        </p>
        <h1 class="in t2" style="margin: 0; font-size: clamp(42px, 6vw, 80px); line-height: 1.02; font-weight: 300; letter-spacing: -0.035em; color: #FFFFFF">
          Momentos que <span class="grad" style="font-weight: 800">merecem</span> ser <span style="font-weight: 800">eternizados.</span>
        </h1>
        <p class="in t3" style="margin: 28px 0 0; max-width: 520px; font-size: 19px; line-height: 1.6; color: #D6D0E2">
          Registramos o seu evento com o olhar de quem conta histórias: a alegria, a emoção, a dança e cada detalhe que
          faz daquele dia um dia único.
        </p>
        <div class="in t4" style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 14px">
          <a class="btn btn-p" :href="whatsappEvento" style="display: inline-flex; align-items: center; gap: 10px; min-height: 56px; padding: 0 28px; border-radius: 999px; background: linear-gradient(100deg,#6A0DC9,#9B3BFF); color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 16px">
            Orçar meu evento
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
          </a>
          <a class="btn btn-g" :href="reelVideomaker" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 10px; min-height: 56px; padding: 0 28px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.28); color: #F4F1FA; text-decoration: none; font-weight: 500; font-size: 16px; background: rgba(13,11,18,0.35); backdrop-filter: blur(6px)">
            Assistir no Instagram
          </a>
        </div>
        <ul class="in t5 vh-tags">
          <li>Vídeos</li>
          <li>Stories ao vivo</li>
          <li>Bastidores</li>
          <li>Fotos</li>
        </ul>
      </div>

      <div v-if="desktop" class="vh-celular in t3">
        <div class="vh-barras" aria-hidden="true">
          <div class="bar" style="width: 200px; height: 26px; border-radius: 6px; background: linear-gradient(90deg,#6A0DC9,#A63BFF); animation-delay: .3s"></div>
          <div class="bar" style="width: 130px; height: 26px; border-radius: 6px; background: linear-gradient(90deg,#6A0DC9,#A63BFF); animation-delay: .45s"></div>
          <div class="bar" style="width: 200px; height: 26px; border-radius: 6px; background: linear-gradient(90deg,#6A0DC9,#A63BFF); animation-delay: .6s"></div>
        </div>
        <figure class="vh-quadro">
          <video
            ref="quadro"
            :src="VIDEO"
            :poster="POSTER"
            muted
            loop
            playsinline
            preload="auto"
            @canplay="pronto"
            aria-label="Trecho de uma cobertura de casamento feita pela AE Marketing"
          ></video>
          <span class="m vh-ao-vivo"><span class="live" aria-hidden="true"></span>Ao vivo</span>
        </figure>
      </div>
    </div>

    <div v-if="!semVideo" class="vh-controles">
    <button type="button" class="vh-play" :aria-label="tocando ? 'Pausar vídeo' : 'Reproduzir vídeo'" @click="alternar">
      <svg v-if="tocando" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
      <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" /></svg>
      <span class="m">{{ tocando ? 'Pausar' : 'Reproduzir' }}</span>
    </button>
    <button type="button" class="vh-play" :class="{ 'is-ativo': somAtivo }" :aria-pressed="somAtivo" @click="alternarSom">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M11 4.7a.7.7 0 0 0-1.2-.5L6.4 7.6A1.4 1.4 0 0 1 5.4 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.4a1.4 1.4 0 0 1 1 .4l3.4 3.4a.7.7 0 0 0 1.2-.5Z" />
        <template v-if="somAtivo"><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.4 18.4a9 9 0 0 0 0-12.8" /></template>
        <template v-else><path d="m22 9-6 6M16 9l6 6" /></template>
      </svg>
      <span class="m">{{ somAtivo ? 'Desativar som' : 'Ativar som' }}</span>
    </button>
    </div>
  </section>
</template>
