<script setup>
import { useRoute } from 'vue-router'
import { contato } from '../data/contato'

const route = useRoute()
</script>

<template>
<header style="position: sticky; top: 0; z-index: 20; background: rgba(13,11,18,0.86); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,0.06)">
<nav aria-label="Principal" style="max-width: 1240px; margin: 0 auto; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; gap: 24px">
<RouterLink to="/" aria-label="AE Marketing — início" style="display: flex; align-items: center; gap: 12px; text-decoration: none; color: #FFFFFF">
<svg viewBox="205 210 845 625" width="40" height="30" role="img" aria-label="Logo AE Marketing"><defs><linearGradient id="aeLg1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6A0DC9"></stop><stop offset="1" stop-color="#A63BFF"></stop></linearGradient></defs><polygon points="533,218 705,525 908,525 848,643 625,643 533,472 345,825 215,825" fill="#FFFFFF"></polygon><polygon points="608,240 1040,240 1040,353 664,353" fill="url(#aeLg1)"></polygon><polygon points="637,707 1040,707 1040,826 695,826" fill="url(#aeLg1)"></polygon></svg>
<span class="d" style="font-weight: 700; letter-spacing: 0.22em; font-size: 14px">MARKETING</span>
</RouterLink>
<div class="navlinks" style="display: flex; gap: 32px; font-size: 15px">
<RouterLink class="navlink" :class="{ 'is-current': route.path === '/empresas' }" to="/empresas">Para empresas</RouterLink>
<RouterLink class="navlink" :class="{ 'is-current': route.path === '/eventos' }" to="/eventos">Para eventos</RouterLink>
<RouterLink class="navlink" to="/empresas#processo">Como trabalhamos</RouterLink>
<RouterLink class="navlink" to="/empresas#planos">Planos</RouterLink>
</div>
<a class="btn btn-p" :href="contato.whatsapp" style="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 20px; border-radius: 999px; background: linear-gradient(100deg,#6A0DC9,#9B3BFF); color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 15px">Falar no WhatsApp</a>
</nav>
<div class="navmobile">
<RouterLink :class="{ 'is-current': route.path === '/empresas' }" to="/empresas">Para empresas</RouterLink>
<RouterLink :class="{ 'is-current': route.path === '/eventos' }" to="/eventos">Para eventos</RouterLink>
</div>
<div class="prog" aria-hidden="true" style="position: absolute; left: 0; bottom: -1px; width: 100%; height: 3px; background: linear-gradient(90deg,#6A0DC9,#B57BFF); transform-origin: 0 50%"></div>
</header>
</template>
