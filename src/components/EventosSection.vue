<script setup>
import EtapasEvento from './EtapasEvento.vue'
import { whatsappEvento } from '../data/contato'
</script>

<template>
<section id="video" style="position: relative; overflow: hidden; background: #0D0B12; padding: 128px 24px">
<div class="glow" aria-hidden="true" style="position: absolute; left: -260px; bottom: -300px; width: 760px; height: 760px; border-radius: 50%; background: radial-gradient(circle, rgba(140,40,240,0.35) 0%, rgba(13,11,18,0) 65%); pointer-events: none"></div>
<div style="position: relative; max-width: 1240px; margin: 0 auto; display: flex; flex-wrap: wrap; gap: 64px; align-items: center">
<div style="flex: 1 1 520px; min-width: 0">
<p class="m rv" style="margin: 0 0 24px; font-size: 13px; color: #C9A4FF; display: flex; align-items: center; gap: 12px"><span aria-hidden="true" style="width: 32px; height: 2px; background: #9B3BFF; display: inline-block"></span>Para eventos · Cobertura em tempo real</p>
<h2 class="rv" style="margin: 0; font-size: clamp(38px, 5vw, 68px); line-height: 1.04; font-weight: 300; letter-spacing: -0.035em; color: #FFFFFF">Seu evento <span class="grad" style="font-weight: 800">visto, sentido</span> e <span style="font-weight: 800">lembrado.</span></h2>
<p class="rv" style="margin: 28px 0 0; max-width: 520px; font-size: 18px; line-height: 1.6; color: #B9B2C7">Registramos os bastidores, os encontros, os sorrisos e a emoção de um dia único — e transformamos tudo em conteúdo que mantém seu evento vivo nas redes.</p>
<div class="rv" style="margin-top: 32px; display: flex; flex-wrap: wrap; gap: 10px">
<span class="m" style="padding: 12px 20px; border-radius: 999px; background: linear-gradient(100deg,#6A0DC9,#9B3BFF); color: #FFFFFF; font-size: 12px">Vídeos</span>
<span class="m" style="padding: 12px 20px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.22); color: #E6DDF5; font-size: 12px">Stories</span>
<span class="m" style="padding: 12px 20px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.22); color: #E6DDF5; font-size: 12px">Bastidores</span>
<span class="m" style="padding: 12px 20px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.22); color: #E6DDF5; font-size: 12px">Fotos</span>
</div>
<EtapasEvento escuro />
<div class="rv" style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 14px"><a class="btn btn-p" :href="whatsappEvento" style="display: inline-flex; align-items: center; gap: 10px; min-height: 56px; padding: 0 28px; border-radius: 999px; background: linear-gradient(100deg,#6A0DC9,#9B3BFF); color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 16px">Orçar meu evento <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
<RouterLink class="btn btn-g" to="/video-maker" style="display: inline-flex; align-items: center; min-height: 56px; padding: 0 28px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.22); color: #F4F1FA; text-decoration: none; font-weight: 500; font-size: 16px">Ver o vídeo maker em ação</RouterLink></div>
</div>
<div style="flex: 1 1 420px; min-width: 0; position: relative; min-height: 560px">
<div class="sbars rv" aria-hidden="true" style="right: -24px; top: -36px; align-items: flex-end; z-index: 0"><div class="sbar" style="width: 200px; background: linear-gradient(90deg,#6A0DC9,#A63BFF)"></div><div class="sbar" style="width: 130px; background: linear-gradient(90deg,#6A0DC9,#A63BFF)"></div><div class="sbar" style="width: 200px; background: linear-gradient(90deg,#6A0DC9,#A63BFF)"></div></div>

<!-- Mesma colagem do hero da home: evento ao vivo como principal e as duas fotos da equipe à direita. -->
<figure class="photo rv" style="position: absolute; left: 0; top: 30px; width: 60%; height: 500px; margin: 0; border-radius: 24px; overflow: hidden; box-shadow: 0 40px 80px -30px rgba(122,18,224,0.6); z-index: 1"><img src="/img/evento-igreja.jpg" alt="Vídeo maker da AE Marketing gravando com celular e luz durante um evento em uma igreja" style="width: 100%; height: 100%; object-fit: cover; object-position: 50% 30%; display: block"><span class="m chip" style="position: absolute; left: 16px; top: 16px; display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 999px; background: rgba(13,11,18,0.78); color: #FFFFFF; font-size: 12px"><span class="live" aria-hidden="true" style="width: 8px; height: 8px; border-radius: 50%; background: #FF4D6D; display: inline-block"></span>Ao vivo</span></figure>
<figure class="photo rv" style="--d: .12s; position: absolute; right: 0; top: 0; width: 38%; height: 236px; margin: 0; border-radius: 20px; overflow: hidden; border: 6px solid #0D0B12; z-index: 2"><img src="/img/equipe-celular.jpg" alt="Duas integrantes da AE Marketing sorrindo e conferindo o celular" style="width: 100%; height: 100%; object-fit: cover; object-position: 50% 22%; display: block"></figure>
<figure class="photo float" style="position: absolute; right: 0; bottom: 0; width: 46%; height: 300px; margin: 0; border-radius: 20px; overflow: hidden; border: 6px solid #0D0B12; z-index: 2"><img src="/img/equipe-notebooks.jpg" alt="Duas integrantes da AE Marketing trabalhando nos notebooks, vistas de cima" style="width: 100%; height: 100%; object-fit: cover; object-position: 50% 45%; display: block"></figure>
</div>
</div>
</section>
</template>
