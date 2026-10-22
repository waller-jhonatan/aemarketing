<script setup>
import VideoHero from '../components/VideoHero.vue'
import ContatoSection from '../components/ContatoSection.vue'
import { reelVideomaker, whatsappEvento } from '../data/contato'

const pilares = [
  {
    icone: 'olhar',
    titulo: 'Olhares e emoções',
    texto: 'Os abraços, os sorrisos e a energia de quem viveu tudo intensamente — os detalhes que fazem a história.',
  },
  {
    icone: 'live',
    titulo: 'Ao vivo nas redes',
    texto: 'Stories e bastidores publicados em tempo real, para quem está longe sentir o evento junto.',
  },
  {
    icone: 'filme',
    titulo: 'Filme editado',
    texto: 'Material editado com estética profissional, pronto para postar e para guardar para sempre.',
  },
]

const etapas = [
  { n: '01', titulo: 'Alinhamos', texto: 'Estilo do evento, roteiro e momentos-chave que não podem faltar.' },
  { n: '02', titulo: 'Cobrimos', texto: 'Vídeos, fotos e stories ao vivo, do primeiro ao último momento.' },
  { n: '03', titulo: 'Entregamos', texto: 'Vídeo editado e material pronto para postar e compartilhar.' },
]
</script>

<template>
  <VideoHero />

  <section id="manifesto" style="position: relative; overflow: hidden; background: #0D0B12; padding: 120px 24px">
    <div class="glow" aria-hidden="true" style="position: absolute; left: -240px; top: -260px; width: 700px; height: 700px; border-radius: 50%; background: radial-gradient(circle, rgba(140,40,240,0.35) 0%, rgba(13,11,18,0) 65%); pointer-events: none"></div>
    <div style="position: relative; max-width: 1040px; margin: 0 auto; text-align: center">
      <p class="m rv" style="margin: 0 0 28px; font-size: 13px; color: #C9A4FF">Por que registrar</p>
      <h2 class="rv" style="margin: 0; font-size: clamp(34px, 4.8vw, 64px); line-height: 1.08; font-weight: 300; letter-spacing: -0.035em; color: #FFFFFF">
        Registrar uma festa é contar a <span class="grad" style="font-weight: 800">história de um dia único.</span>
      </h2>
      <p class="rv" style="margin: 28px auto 0; max-width: 620px; font-size: 18px; line-height: 1.6; color: #B9B2C7">
        Através dos olhares, abraços, sorrisos e da energia de quem viveu tudo intensamente — para que cada
        celebração seja lembrada com o mesmo brilho do dia.
      </p>
    </div>
  </section>

  <section id="como-registramos" style="background: #F6F4F9; color: #16131D; padding: 120px 24px">
    <div style="max-width: 1240px; margin: 0 auto">
      <div class="rv" style="max-width: 720px; margin-bottom: 56px">
        <p class="m" style="margin: 0 0 20px; font-size: 13px; color: #6B12C9; display: flex; align-items: center; gap: 12px">
          <span aria-hidden="true" style="width: 32px; height: 2px; background: #6B12C9; display: inline-block"></span>Como registramos
        </p>
        <h2 style="margin: 0; font-size: clamp(36px, 4.6vw, 60px); line-height: 1.05; font-weight: 800; letter-spacing: -0.03em">
          Do primeiro brinde <span class="grad">à última música.</span>
        </h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px">
        <article
          v-for="(p, i) in pilares"
          :key="p.titulo"
          class="card rv gx vm-pilar"
          :class="{ 'gx-dark': i === 1 }"
          :style="{ background: i === 1 ? '#16131D' : '#FFFFFF', color: i === 1 ? '#F4F1FA' : '#16131D', border: `1px solid ${i === 1 ? '#16131D' : '#E7E2EF'}` }"
        >
          <div class="gx-shine" aria-hidden="true"></div>
          <div class="gx-bg" aria-hidden="true">
            <div class="gx-tiles"><i v-for="n in 10" :key="n"></i></div>
            <div class="gx-line gx-l1"></div><div class="gx-line gx-l2"></div><div class="gx-line gx-l3"></div>
          </div>
          <span class="vm-icone" :class="{ 'is-escuro': i === 1 }" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <template v-if="p.icone === 'olhar'">
                <path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0" /><circle cx="12" cy="12" r="3" />
              </template>
              <template v-else-if="p.icone === 'live'">
                <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5M19.1 4.9C23 8.8 23 15.1 19.1 19" /><circle cx="12" cy="12" r="2" />
              </template>
              <template v-else>
                <rect x="2" y="2" width="20" height="20" rx="2.18" /><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
              </template>
            </svg>
          </span>
          <h3 class="d" style="margin: 0; font-size: 24px; line-height: 1.2; font-weight: 700">{{ p.titulo }}</h3>
          <p :style="{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: i === 1 ? '#B9B2C7' : '#5E5869' }">{{ p.texto }}</p>
        </article>
      </div>

      <ol class="rv vm-etapas">
        <li v-for="e in etapas" :key="e.n">
          <span class="d grad">{{ e.n }}</span>
          <div>
            <h3 class="d">{{ e.titulo }}</h3>
            <p>{{ e.texto }}</p>
          </div>
        </li>
      </ol>

      <div class="rv" style="margin-top: 48px; display: flex; flex-wrap: wrap; gap: 14px">
        <a class="btn btn-p" :href="whatsappEvento" style="display: inline-flex; align-items: center; gap: 10px; min-height: 56px; padding: 0 28px; border-radius: 999px; background: linear-gradient(100deg,#6A0DC9,#9B3BFF); color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 16px">
          Orçar meu evento
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
        </a>
        <a :href="reelVideomaker" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 56px; padding: 0 28px; border-radius: 999px; border: 1px solid #DDD6E8; color: #16131D; text-decoration: none; font-weight: 500; font-size: 16px">
          Ver mais no Instagram
        </a>
      </div>
    </div>
  </section>

  <ContatoSection
    :whatsapp="whatsappEvento"
    texto="Conte pra gente sobre o seu evento. A conversa é rápida e sem compromisso."
  />
</template>
