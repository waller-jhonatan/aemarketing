<script setup>
import { nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { useReveal } from './composables/useReveal'

const route = useRoute()
const { refresh } = useReveal()

watch(() => route.fullPath, () => nextTick(refresh))
</script>

<template>
  <div class="ae" style="width: 100%; background: #0D0B12; color: #F4F1FA">
    <SiteHeader />
    <main>
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
