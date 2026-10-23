<script setup>
import { useRoute } from 'vue-router'
import { contato } from '../data/contato'

const route = useRoute()
</script>

<template>
<header style="position: sticky; top: 0; z-index: 20; background: rgba(13,11,18,0.86); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,0.06)">
<nav aria-label="Principal" style="max-width: 1240px; margin: 0 auto; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; gap: 24px">
<RouterLink to="/" aria-label="AE Marketing — início" style="display: flex; align-items: center; gap: 12px; text-decoration: none; color: #FFFFFF">
<img src="/icon-192.png" alt="Logo AE Marketing" width="44" height="44" style="width: 44px; height: 44px; border-radius: 12px; display: block; background: #FFFFFF">
<span class="d" style="font-weight: 700; letter-spacing: 0.22em; font-size: 14px">MARKETING</span>
</RouterLink>
<div class="navlinks" style="display: flex; gap: 28px; font-size: 15px">
<RouterLink class="navlink" :class="{ 'is-current': route.path === '/empresas' }" to="/empresas">Para empresas</RouterLink>
<RouterLink class="navlink" :class="{ 'is-current': route.path === '/eventos' }" to="/eventos">Para eventos</RouterLink>
<RouterLink class="navlink" :class="{ 'is-current': route.path === '/video-maker' }" to="/video-maker">Vídeo maker</RouterLink>
<RouterLink class="navlink" to="/empresas#processo">Como trabalhamos</RouterLink>
<RouterLink class="navlink" to="/empresas#planos">Planos</RouterLink>
</div>
<a class="btn btn-p" :href="contato.whatsapp" style="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 20px; border-radius: 999px; background: linear-gradient(100deg,#6A0DC9,#9B3BFF); color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 15px">Falar no WhatsApp</a>
</nav>
<div class="navmobile">
<RouterLink :class="{ 'is-current': route.path === '/empresas' }" to="/empresas">Para empresas</RouterLink>
<RouterLink :class="{ 'is-current': route.path === '/eventos' }" to="/eventos">Para eventos</RouterLink>
<RouterLink :class="{ 'is-current': route.path === '/video-maker' }" to="/video-maker">Vídeo maker</RouterLink>
</div>
<div class="prog" aria-hidden="true" style="position: absolute; left: 0; bottom: -1px; width: 100%; height: 3px; background: linear-gradient(90deg,#6A0DC9,#B57BFF); transform-origin: 0 50%"></div>
</header>
</template>
