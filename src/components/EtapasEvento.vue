<script setup>
import { etapas } from '../data/videomaker'

defineProps({ escuro: Boolean })
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
