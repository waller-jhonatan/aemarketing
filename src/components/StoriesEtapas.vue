<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { etapas } from '../data/videomaker'
import { reelVideomaker, whatsappEvento } from '../data/contato'

const FOTOS = ['/img/equipe-sorrindo.jpg', '/img/equipe-filmando.jpg', '/img/storymaker.jpg']
const DURACAO = 5000

const cartao = ref(null)
const atual = ref(0)
// Bumped on every change so the active segment restarts its animation.
const ciclo = ref(0)
let timer
let automatico = true
let visivel = false
let observador

function ir(i) {
  atual.value = (i + etapas.length) % etapas.length
  ciclo.value++
  agendar()
}

// Advances on its own only while the card is on screen.
function agendar() {
  clearTimeout(timer)
  if (automatico && visivel) timer = setTimeout(() => ir(atual.value + 1), DURACAO)
}

onMounted(() => {
  automatico = !matchMedia('(prefers-reduced-motion: reduce)').matches
  observador = new IntersectionObserver(([e]) => {
    visivel = e.isIntersecting
    agendar()
  })
  observador.observe(cartao.value)
})

onBeforeUnmount(() => {
  clearTimeout(timer)
  observador?.disconnect()
})
</script>

<template>
  <section id="etapas" class="st">
    <div class="glow" aria-hidden="true" style="position: absolute; right: -260px; top: -200px; width: 760px; height: 760px; border-radius: 50%; background: radial-gradient(circle, rgba(140,40,240,0.3) 0%, rgba(13,11,18,0) 65%); pointer-events: none"></div>
    <div class="st-grade" style="position: relative">
      <div class="st-texto">
        <p class="m rv" style="margin: 0 0 24px; font-size: 13px; color: #C9A4FF; display: flex; align-items: center; gap: 12px">
          <span aria-hidden="true" style="width: 32px; height: 2px; background: #9B3BFF; display: inline-block"></span>Como funciona
        </p>
        <h2 class="rv" style="margin: 0; font-size: clamp(36px, 4.6vw, 60px); line-height: 1.05; font-weight: 300; letter-spacing: -0.03em; color: #FFFFFF">
          Do primeiro brinde <span class="grad" style="font-weight: 800">à última música.</span>
        </h2>
        <p class="rv" style="margin: 24px 0 0; max-width: 520px; font-size: 18px; line-height: 1.6; color: #B9B2C7">
          Três etapas, do alinhamento à entrega. Toque no story para avançar.
        </p>

        <ol class="rv st-lista">
          <li v-for="(e, i) in etapas" :key="e.n" :class="{ 'is-ativa': i === atual }">
            <button type="button" :aria-current="i === atual ? 'step' : null" @click="ir(i)">
              <span class="m st-n">{{ e.n }}</span>
              <span><strong>{{ e.titulo }}</strong><span class="st-tx">{{ e.texto }}</span></span>
            </button>
          </li>
        </ol>

        <div class="rv" style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 14px">
          <a class="btn btn-p" :href="whatsappEvento" style="display: inline-flex; align-items: center; gap: 10px; min-height: 56px; padding: 0 28px; border-radius: 999px; background: linear-gradient(100deg,#6A0DC9,#9B3BFF); color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 16px">
            Orçar meu evento
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
          </a>
          <a class="btn btn-g" :href="reelVideomaker" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 56px; padding: 0 28px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.22); color: #F4F1FA; text-decoration: none; font-weight: 500; font-size: 16px">
            Ver mais no Instagram
          </a>
        </div>
      </div>

      <div ref="cartao" class="st-cartao rv" role="group" aria-roledescription="stories" aria-label="Etapas do trabalho">
        <img v-for="(f, i) in FOTOS" :key="f" :src="f" alt="" :class="{ 'is-ativa': i === atual }" loading="lazy" />
        <div class="st-sombra" aria-hidden="true"></div>
        <div class="st-segs" aria-hidden="true">
          <i v-for="(e, i) in etapas" :key="i === atual ? `ativa-${ciclo}` : e.n" :class="{ 'is-feita': i < atual, 'is-ativa': i === atual }" :style="{ '--t': `${DURACAO}ms` }"></i>
        </div>
        <div class="st-cab">
          <span class="ig-avatar" style="width: 30px; height: 30px"><img src="/favicon.svg" alt="" /></span>
          aemarketiing <span>agora</span>
        </div>
        <button type="button" class="st-zona is-esq" aria-label="Etapa anterior" @click="ir(atual - 1)"></button>
        <button type="button" class="st-zona is-dir" aria-label="Próxima etapa" @click="ir(atual + 1)"></button>
        <Transition name="st" mode="out-in">
          <div :key="atual" class="st-corpo" aria-live="polite">
            <span class="d grad st-num">{{ etapas[atual].n }}</span>
            <h3 class="d">{{ etapas[atual].titulo }}</h3>
            <p>{{ etapas[atual].texto }}</p>
          </div>
        </Transition>
        <div class="st-resposta">
          <a :href="whatsappEvento">
            Responder a aemarketiing…
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4Z" /></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
