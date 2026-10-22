<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { cases as todosCases, numeros as todosNumeros } from '../data/resultados'

const props = defineProps({
  escuro: { type: Boolean, default: false },
})

// Placeholder data never reaches production.
const visivel = (item) => import.meta.env.DEV || !item.provisorio
const cases = todosCases.filter(visivel)
const numeros = todosNumeros.filter(visivel)

const cores = computed(() =>
  props.escuro
    ? { fundo: '#0D0B12', texto: '#F4F1FA', suave: '#B9B2C7', rotulo: '#C9A4FF', linha: 'rgba(255,255,255,0.12)', card: '#16131D', borda: '#2A2436' }
    : { fundo: '#FFFFFF', texto: '#16131D', suave: '#5E5869', rotulo: '#6B12C9', linha: '#E7E2EF', card: '#FFFFFF', borda: '#E7E2EF' },
)

// Odometer: each digit is a strip of two 0–9 cycles that rolls into place
// once the numbers row scrolls into view.
const digitos = (valor) => String(valor).split('').map(Number)
const ativo = ref(false)
const statsEl = ref(null)
let observer

function holofote(ev) {
  const r = statsEl.value.getBoundingClientRect()
  statsEl.value.style.setProperty('--mx', `${ev.clientX - r.left}px`)
  statsEl.value.style.setProperty('--my', `${ev.clientY - r.top}px`)
}

onMounted(() => {
  if (!statsEl.value) return
  if (!('IntersectionObserver' in window)) {
    ativo.value = true
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        observer.disconnect()
        ativo.value = true
      }
    },
    { threshold: 0.5 },
  )
  observer.observe(statsEl.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section
    v-if="cases.length || numeros.length"
    id="resultados"
    :style="{ background: cores.fundo, color: cores.texto, padding: '120px 24px' }"
  >
    <div style="max-width: 1240px; margin: 0 auto">
      <div class="rv" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 32px; margin-bottom: 64px">
        <div style="flex: 1 1 560px">
          <p class="m" :style="{ margin: '0 0 20px', fontSize: '13px', color: cores.rotulo, display: 'flex', alignItems: 'center', gap: '12px' }">
            <span aria-hidden="true" :style="{ width: '32px', height: '2px', background: cores.rotulo, display: 'inline-block' }"></span>Resultados
          </p>
          <h2 style="margin: 0; font-size: clamp(36px, 4.6vw, 60px); line-height: 1.05; font-weight: 800; letter-spacing: -0.03em">
            Estratégia que vira <span class="grad">número de verdade.</span>
          </h2>
        </div>
        <p :style="{ flex: '0 1 380px', margin: 0, fontSize: '17px', lineHeight: 1.6, color: cores.suave }">
          Alguns dos resultados que construímos junto com nossos clientes.
        </p>
      </div>

      <div v-if="cases.length" class="resultados-cases">
        <article
          v-for="(c, i) in cases"
          :key="i"
          class="card rv gx resultado"
          :class="{ 'gx-dark': escuro, 'is-provisorio': c.provisorio }"
          :style="{ background: cores.card, border: `1px solid ${cores.borda}` }"
        >
          <div class="gx-shine" aria-hidden="true"></div>
          <div class="gx-bg" aria-hidden="true">
            <div class="gx-tiles"><i v-for="n in 10" :key="n"></i></div>
            <div class="gx-line gx-l1"></div><div class="gx-line gx-l2"></div><div class="gx-line gx-l3"></div>
          </div>
          <span v-if="c.provisorio" class="m badge-provisorio">Provisório</span>
          <p class="m" :style="{ margin: 0, fontSize: '12px', color: cores.rotulo }">{{ c.segmento }}</p>
          <div>
            <div class="d grad" style="font-size: 56px; line-height: 1; font-weight: 800; letter-spacing: -0.03em">{{ c.metrica }}</div>
            <p :style="{ margin: '10px 0 0', fontSize: '16px', fontWeight: 600 }">{{ c.rotulo }}</p>
          </div>
          <p :style="{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: cores.suave }">{{ c.texto }}</p>
          <p class="d" :style="{ margin: 'auto 0 0', paddingTop: '16px', borderTop: `1px solid ${cores.linha}`, fontSize: '15px', fontWeight: 600 }">{{ c.cliente }}</p>
        </article>
      </div>

      <dl
        v-if="numeros.length"
        ref="statsEl"
        class="rv resultados-numeros"
        :class="{ 'is-ativo': ativo }"
        @pointermove="holofote"
      >
        <span class="odo-fundo" aria-hidden="true"></span>
        <div v-for="(n, i) in numeros" :key="n.rotulo" :class="{ 'is-provisorio': n.provisorio }">
          <dd class="d odo" :aria-label="`${n.prefixo}${n.valor}`">
            <span v-if="n.prefixo" class="odo-prefixo" aria-hidden="true">{{ n.prefixo }}</span>
            <span v-for="(d, j) in digitos(n.valor)" :key="j" class="odo-col" aria-hidden="true">
              <span
                class="odo-faixa"
                :style="{
                  transform: ativo ? `translateY(-${(d + 10) * 5}%)` : 'translateY(0)',
                  transitionDelay: `${i * 0.18 + j * 0.12}s`,
                }"
              >
                <span v-for="k in 20" :key="k">{{ (k - 1) % 10 }}</span>
              </span>
            </span>
          </dd>
          <dt>
            {{ n.rotulo }}<span v-if="n.provisorio" class="m badge-provisorio badge-inline">Provisório</span>
          </dt>
        </div>
      </dl>
    </div>
  </section>
</template>
