<script setup>
import ManifestoSection from '../components/ManifestoSection.vue'
import ComoRegistramos from '../components/ComoRegistramos.vue'
import EventosSection from '../components/EventosSection.vue'
import MarqueeStrip from '../components/MarqueeStrip.vue'
import ContatoSection from '../components/ContatoSection.vue'
import { whatsappEvento } from '../data/contato'

const faixa = ['Vídeo maker', 'Storymaker', 'Stories ao vivo', 'Bastidores', 'Fotos', 'Filme editado', 'Momentos eternizados']
</script>

<template>
  <EventosSection />
  <MarqueeStrip :itens="faixa" />
  <ManifestoSection />
  <ComoRegistramos :com-etapas="false" />
  <ContatoSection
    :whatsapp="whatsappEvento"
    texto="Conte pra gente sobre o seu evento. A conversa é rápida e sem compromisso."
  />
</template>
