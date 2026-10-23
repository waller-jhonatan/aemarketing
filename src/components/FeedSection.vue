<script setup>
import { pilares } from '../data/videomaker'
</script>

<template>
  <section id="feed" class="feed">
    <div style="max-width: 1240px; margin: 0 auto">
      <div class="rv" style="max-width: 720px">
        <p class="m" style="margin: 0 0 20px; font-size: 13px; color: #6B12C9; display: flex; align-items: center; gap: 12px">
          <span aria-hidden="true" style="width: 32px; height: 2px; background: #6B12C9; display: inline-block"></span>Feed
        </p>
        <h2 style="margin: 0; font-size: clamp(36px, 4.6vw, 60px); line-height: 1.05; font-weight: 800; letter-spacing: -0.03em">
          Três jeitos de <span class="grad">contar o seu dia.</span>
        </h2>
      </div>

      <div class="feed-grade">
        <article v-for="p in pilares" :key="p.titulo" class="post card rv">
          <header class="post-cab">
            <span class="ig-avatar"><img src="/favicon.svg" alt="" /></span>
            <div>aemarketiing<small>{{ p.local }}</small></div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></svg>
          </header>
          <figure class="post-foto photo">
            <img :src="p.foto" :alt="p.alt" loading="lazy" />
            <span class="m post-tag">{{ p.titulo }}</span>
          </figure>
          <div class="post-acoes" aria-hidden="true">
            <svg class="is-on" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4Z" /></svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" /></svg>
          </div>
          <p class="post-curtidas">{{ p.curtidas }}</p>
          <p class="post-texto"><b>aemarketiing</b> {{ p.texto }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
