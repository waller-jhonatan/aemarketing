<script setup>
import ReelsHero from '../components/ReelsHero.vue'
import MarqueeStrip from '../components/MarqueeStrip.vue'
import FeedSection from '../components/FeedSection.vue'
import StoriesEtapas from '../components/StoriesEtapas.vue'
import ContatoSection from '../components/ContatoSection.vue'
import { whatsappEvento } from '../data/contato'
import '../styles/reels.css'

const faixa = ['Reels', 'Stories ao vivo', 'Bastidores', 'Fotos', 'Filme editado', 'Vídeo maker', 'Storymaker']
</script>

<template>
  <ReelsHero />
  <MarqueeStrip :itens="faixa" />
  <FeedSection />
  <StoriesEtapas />
  <ContatoSection
    :whatsapp="whatsappEvento"
    texto="Conte pra gente sobre o seu evento. A conversa é rápida e sem compromisso."
  />
</template>
