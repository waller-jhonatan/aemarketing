<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ReelsCelular from './ReelsCelular.vue'
import { reelVideomaker, whatsappEvento } from '../data/contato'
import { reel } from '../data/videomaker'

// O reel toca dentro do celular (ReelsCelular). Atrás, o mesmo vídeo
// desfocado acompanha o celular: toca, pausa e fica no mesmo ponto.
const fundo = ref(null)
const celular = ref(null)
let desligar = () => {}

function sincronizar() {
  const f = fundo.value
  const v = celular.value?.video
  if (!f || !v) return
  if (Math.abs(f.currentTime - v.currentTime) > 0.3) f.currentTime = v.currentTime
  if (v.paused) f.pause()
  else if (f.paused) f.play().catch(() => {})
}

onMounted(() => {
  const v = celular.value.video
  const eventos = ['play', 'pause', 'seeked', 'timeupdate']
  eventos.forEach((t) => v.addEventListener(t, sincronizar))
  fundo.value.addEventListener('canplay', sincronizar)
  desligar = () => eventos.forEach((t) => v.removeEventListener(t, sincronizar))
})

onBeforeUnmount(() => desligar())
</script>

<template>
  <section id="video-hero" class="vh">
    <video ref="fundo" class="vh-fundo" :src="reel.video" :poster="reel.capa" muted loop playsinline preload="auto" aria-hidden="true"></video>
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

      <div class="vh-celular in t3">
        <div class="vh-barras" aria-hidden="true">
          <div class="bar" style="width: 200px; height: 26px; border-radius: 6px; background: linear-gradient(90deg,#6A0DC9,#A63BFF); animation-delay: .3s"></div>
          <div class="bar" style="width: 130px; height: 26px; border-radius: 6px; background: linear-gradient(90deg,#6A0DC9,#A63BFF); animation-delay: .45s"></div>
          <div class="bar" style="width: 200px; height: 26px; border-radius: 6px; background: linear-gradient(90deg,#6A0DC9,#A63BFF); animation-delay: .6s"></div>
        </div>
        <ReelsCelular ref="celular" />
      </div>
    </div>

    <div class="vh-controles">
      <button type="button" class="vh-play" :aria-label="celular?.tocando ? 'Pausar vídeo' : 'Reproduzir vídeo'" @click="celular.alternar()">
        <svg v-if="celular?.tocando" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" /></svg>
        <span class="m">{{ celular?.tocando ? 'Pausar' : 'Reproduzir' }}</span>
      </button>
    </div>
  </section>
</template>
