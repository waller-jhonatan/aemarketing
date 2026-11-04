<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { cidades } from '../data/cidades'

// Mapa com as cidades atendidas. O Leaflet só é carregado quando a seção
// chega perto da tela, para não pesar no carregamento da página.
const props = defineProps({
  escuro: { type: Boolean, default: false },
})

const mapaEl = ref(null)
const ativa = ref(null)
let mapa
let marcadores = {}
let observador

async function montar() {
  const [{ default: L }] = await Promise.all([import('leaflet'), import('leaflet/dist/leaflet.css')])
  const toque = window.matchMedia('(pointer: coarse)').matches

  mapa = L.map(mapaEl.value, {
    scrollWheelZoom: false,
    // No celular um dedo rola a página; o mapa fica parado.
    dragging: !toque,
    tap: false,
    zoomControl: true,
    attributionControl: true,
  })

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(mapa)

  cidades.forEach((c) => {
    const icone = L.divIcon({
      className: '',
      html: `<span class="mc-pino"><i></i></span>`,
      iconSize: [22, 22],
      iconAnchor: [11, 11],
    })
    const m = L.marker([c.lat, c.lng], { icon: icone, title: c.nome, keyboard: false })
      .bindTooltip(c.nome, { direction: 'top', offset: [0, -10], className: 'mc-tip' })
      .addTo(mapa)
    m.on('mouseover', () => (ativa.value = c.nome))
    m.on('mouseout', () => (ativa.value = null))
    marcadores[c.nome] = m
  })

  enquadrar()
}

function enquadrar() {
  if (!mapa) return
  const limites = cidades.map((c) => [c.lat, c.lng])
  mapa.fitBounds(limites, { padding: [36, 36] })
}

function destacar(nome) {
  ativa.value = nome
  marcadores[nome]?.openTooltip()
}

function soltar(nome) {
  if (ativa.value === nome) ativa.value = null
  marcadores[nome]?.closeTooltip()
}

function focar(c) {
  if (!mapa) return
  mapa.flyTo([c.lat, c.lng], 11, { duration: 0.8 })
  marcadores[c.nome]?.openTooltip()
}

onMounted(() => {
  if (!('IntersectionObserver' in window)) return montar()
  observador = new IntersectionObserver(
    (entradas) => {
      if (entradas.some((e) => e.isIntersecting)) {
        observador.disconnect()
        montar()
      }
    },
    { rootMargin: '400px 0px' },
  )
  observador.observe(mapaEl.value)
})

onBeforeUnmount(() => {
  observador?.disconnect()
  mapa?.remove()
})
</script>

<template>
  <section id="cidades" class="mc" :class="{ 'is-escuro': props.escuro }">
    <div class="mc-grade">
      <div class="mc-texto">
        <p class="m rv mc-rotulo">
          <span aria-hidden="true"></span>Onde a gente atende
        </p>
        <h2 class="rv">
          Da Zona da Mata <span class="grad">a BH.</span>
        </h2>
        <p class="rv mc-sub">
          O mapa reúne as cidades onde já desenvolvemos projetos.
        </p>
        <p class="rv mc-nota">
          <span class="mc-nota-ponto" aria-hidden="true"></span>
          Videomaker incluído, nas mesmas cidades.
        </p>
        <ul class="rv mc-lista" aria-label="Cidades atendidas">
          <li v-for="c in cidades" :key="c.nome">
            <button
              type="button"
              :class="{ 'is-ativa': ativa === c.nome }"
              @mouseenter="destacar(c.nome)"
              @mouseleave="soltar(c.nome)"
              @focus="destacar(c.nome)"
              @blur="soltar(c.nome)"
              @click="focar(c)"
            >
              {{ c.nome }}
            </button>
          </li>
        </ul>
        <button type="button" class="rv mc-ver-todas" @click="enquadrar">Ver todas no mapa</button>
      </div>

      <div class="rv mc-cartao">
        <div ref="mapaEl" class="mc-mapa" role="region" aria-label="Mapa das cidades atendidas"></div>
      </div>
    </div>
  </section>
</template>
