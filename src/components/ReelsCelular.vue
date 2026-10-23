<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { contato, reelVideomaker, whatsappEvento } from '../data/contato'
import { reel } from '../data/videomaker'

// Celular mostrando o reel como se fosse o Instagram: um toque liga o som,
// dois toques curtem. Usado no topo de /video-maker e /video-maker-2.

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
// Whether the video should be playing: off for reduced motion, on after a tap.
const deveTocar = ref(false)

const coracoes = [
  { x: '-10px', del: '0s' },
  { x: '8px', del: '.7s' },
  { x: '-4px', del: '1.4s' },
  { x: '12px', del: '2.1s' },
  { x: '-14px', del: '2.8s' },
]

// Only plays while the phone is on screen: besides saving battery, calling
// play() drops the poster, and a video paused before its first frame shows
// up black. Browsers also refuse or pause muted video in hidden tabs, so this
// runs again on `canplay`, when the tab is shown and when the phone scrolls
// back into view.
let visivel = false
function tocar() {
  const v = video.value
  if (v?.paused && deveTocar.value && visivel) v.play().catch(() => {})
}

// Play/pause for a control outside the phone.
function alternar() {
  const v = video.value
  if (!v) return
  deveTocar.value = v.paused
  if (v.paused) tocar()
  else v.pause()
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

function aoVoltar() {
  if (document.visibilityState === 'visible') tocar()
}

let observador
onMounted(() => {
  deveTocar.value = !matchMedia('(prefers-reduced-motion: reduce)').matches
  document.addEventListener('visibilitychange', aoVoltar)
  observador = new IntersectionObserver(([e]) => {
    visivel = e.isIntersecting
    if (visivel) tocar()
    else video.value?.pause()
  })
  observador.observe(video.value)
})

onBeforeUnmount(() => {
  clearTimeout(toqueTimer)
  observador?.disconnect()
  document.removeEventListener('visibilitychange', aoVoltar)
})

defineExpose({ video, tocando, alternar })
</script>

<template>
  <div class="ig-celular">
    <div class="ig-tela">
      <div class="ig-ilha" aria-hidden="true"></div>
      <video
        ref="video"
        :src="reel.video"
        :poster="reel.capa"
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
</template>
