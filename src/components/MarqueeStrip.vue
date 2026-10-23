<script setup>
defineProps({
  itens: {
    type: Array,
    default: () => ['Gestão de redes', 'Criação de conteúdo', 'Vídeo maker', 'Storymaker', 'Tráfego pago', 'Cobertura de eventos', 'Posicionamento'],
  },
})
</script>

<template>
<div aria-hidden="true" style="overflow: hidden; border-top: 1px solid rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.08); background: #120E1A; padding: 22px 0">
<div class="marq d" style="display: flex; width: max-content; gap: 48px; font-size: 22px; font-weight: 600; color: #E6DDF5; white-space: nowrap">
<!-- Two identical copies so the loop scrolls without a gap. -->
<template v-for="copia in 2" :key="copia"><template v-for="item in itens" :key="`${copia}-${item}`"><span>{{ item }}</span><span style="color: #9B3BFF">✦</span></template></template>
</div>
</div>
</template>
