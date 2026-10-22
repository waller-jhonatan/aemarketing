<script setup>
import ServicosEmpresas from '../components/ServicosEmpresas.vue'
import ComoAjudamos from '../components/ComoAjudamos.vue'
import ProcessoSection from '../components/ProcessoSection.vue'
import ResultadosSection from '../components/ResultadosSection.vue'
import PlanosSection from '../components/PlanosSection.vue'
import ContatoSection from '../components/ContatoSection.vue'
import { whatsappEmpresa } from '../data/contato'
</script>

<template>
  <ServicosEmpresas />
  <ComoAjudamos />
  <ProcessoSection />
  <ResultadosSection escuro />
  <PlanosSection />
  <ContatoSection
    :whatsapp="whatsappEmpresa"
    texto="Conte pra gente sobre o seu negócio. A conversa é rápida e sem compromisso."
  />
</template>
