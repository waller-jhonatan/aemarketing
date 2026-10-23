<script setup>
defineProps({ escuro: Boolean })

const etapas = [
  { n: '01', titulo: 'Alinhamos', texto: 'Estilo do evento, roteiro e momentos-chave que não podem faltar.' },
  { n: '02', titulo: 'Cobrimos', texto: 'Vídeos, fotos e stories ao vivo, do primeiro ao último momento.' },
  { n: '03', titulo: 'Entregamos', texto: 'Vídeo editado e material pronto para postar e compartilhar.' },
]
</script>

<template>
  <ol class="rv vm-etapas" :class="{ 'is-escuro': escuro }">
    <li v-for="e in etapas" :key="e.n">
      <span class="d grad">{{ e.n }}</span>
      <div>
        <h3 class="d">{{ e.titulo }}</h3>
        <p>{{ e.texto }}</p>
      </div>
    </li>
  </ol>
</template>
