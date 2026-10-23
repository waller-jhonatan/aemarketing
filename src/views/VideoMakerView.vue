<script setup>
import VideoHero from '../components/VideoHero.vue'
import ManifestoSection from '../components/ManifestoSection.vue'
import StoriesEtapas from '../components/StoriesEtapas.vue'
import ContatoSection from '../components/ContatoSection.vue'
import { whatsappEvento } from '../data/contato'
</script>

<template>
  <VideoHero />
  <ManifestoSection />
  <StoriesEtapas />
  <ContatoSection
    :whatsapp="whatsappEvento"
    texto="Conte pra gente sobre o seu evento. A conversa é rápida e sem compromisso."
  />
</template>
