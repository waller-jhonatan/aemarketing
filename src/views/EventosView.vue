<script setup>
import ManifestoSection from '../components/ManifestoSection.vue'
import StoriesEtapas from '../components/StoriesEtapas.vue'
import EventosSection from '../components/EventosSection.vue'
import MarqueeStrip from '../components/MarqueeStrip.vue'
import ContatoSection from '../components/ContatoSection.vue'
import LinkEmpresas from '../components/LinkEmpresas.vue'
import { whatsappEvento } from '../data/contato'

const faixa = ['Vídeo maker', 'Storymaker', 'Stories ao vivo', 'Bastidores', 'Fotos', 'Filme editado', 'Momentos eternizados']
</script>

<template>
  <EventosSection />
  <MarqueeStrip :itens="faixa" />
  <ManifestoSection />
  <StoriesEtapas />
  <ContatoSection
    :whatsapp="whatsappEvento"
    texto="Conte pra gente sobre o seu evento. A conversa é rápida e sem compromisso."
  >
    O dia passa rápido. Os <span class="grad" style="font-weight: 800">momentos</span> ficam
    <span class="grad" style="font-weight: 800">para sempre.</span>
  </ContatoSection>
  <LinkEmpresas />
</template>
