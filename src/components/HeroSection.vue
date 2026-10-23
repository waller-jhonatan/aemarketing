<script setup>
import { contato, whatsappEmpresa } from '../data/contato'
import { anosDeOperacao } from '../data/empresa'

// Em /empresas o botão "Para empresas" vira "Ver planos" e a proposta já
// chega no WhatsApp com a mensagem de empresa.
defineProps({ empresas: Boolean })

const anos = anosDeOperacao()
</script>

<template>
<section id="topo" style="position: relative; overflow: hidden; padding: 88px 24px 96px">
<div class="glow" aria-hidden="true" style="position: absolute; right: -200px; top: -240px; width: 760px; height: 760px; border-radius: 50%; background: radial-gradient(circle, rgba(140,40,240,0.45) 0%, rgba(13,11,18,0) 65%); pointer-events: none"></div>
<div style="position: relative; max-width: 1240px; margin: 0 auto; display: flex; flex-wrap: wrap; align-items: center; gap: 56px">
<div style="flex: 1 1 540px; min-width: 0">
<p class="m in t1" style="margin: 0 0 28px; font-size: 13px; color: #C9A4FF; display: flex; align-items: center; gap: 12px"><span aria-hidden="true" style="width: 32px; height: 2px; background: #9B3BFF; display: inline-block"></span>Conexão · Estratégia · Vídeo maker</p>
<h1 class="in t2" style="margin: 0; font-size: clamp(44px, 6.4vw, 84px); line-height: 1.02; font-weight: 300; letter-spacing: -0.035em; color: #FFFFFF">Sua marca <span class="grad" style="font-weight: 800">vista,</span><br><span style="font-weight: 800">lembrada</span> e <span class="grad" style="font-weight: 800">escolhida.</span></h1>
<p class="in t3" style="margin: 28px 0 0; max-width: 540px; font-size: 19px; line-height: 1.6; color: #B9B2C7">Cuidamos das suas redes sociais, criamos conteúdo e registramos seus eventos em tempo real — com estratégia, cuidado e bom humor.</p>
<div class="in t4" style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 14px">
<a class="btn btn-p" :href="empresas ? whatsappEmpresa : contato.whatsapp" style="display: inline-flex; align-items: center; gap: 10px; min-height: 56px; padding: 0 28px; border-radius: 999px; background: linear-gradient(100deg,#6A0DC9,#9B3BFF); color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 16px">Quero uma proposta <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
<RouterLink class="btn btn-g" :to="empresas ? '/empresas#planos' : '/empresas'" style="display: inline-flex; align-items: center; min-height: 56px; padding: 0 28px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.22); color: #F4F1FA; text-decoration: none; font-weight: 500; font-size: 16px">{{ empresas ? 'Ver planos' : 'Para empresas' }}</RouterLink>
<RouterLink class="btn btn-g" to="/eventos" style="display: inline-flex; align-items: center; min-height: 56px; padding: 0 28px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.22); color: #F4F1FA; text-decoration: none; font-weight: 500; font-size: 16px">Para eventos</RouterLink>
</div>
<div class="in t5" style="margin-top: 56px; display: flex; flex-wrap: wrap; gap: 40px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.1)">
<div><div class="d" style="font-size: 36px; font-weight: 700; color: #FFFFFF">+{{ anos }}</div><div style="font-size: 14px; color: #A9A3B5; margin-top: 4px">anos no mercado</div></div>
<div><div class="d" style="font-size: 36px; font-weight: 700; color: #FFFFFF">3</div><div style="font-size: 14px; color: #A9A3B5; margin-top: 4px">redes: Instagram, Facebook e TikTok</div></div>
<div><div class="d grad" style="font-size: 36px; font-weight: 700">100%</div><div style="font-size: 14px; color: #A9A3B5; margin-top: 4px">conteúdo personalizado</div></div>
</div>
</div>

<div style="flex: 1 1 420px; min-width: 0; position: relative; min-height: 560px">
<div aria-hidden="true" style="position: absolute; right: -24px; top: 8px; display: flex; flex-direction: column; align-items: flex-end; gap: 14px; z-index: 0">
<div class="bar" style="width: 220px; height: 28px; border-radius: 6px; transform: skewX(-28deg); background: linear-gradient(90deg,#6A0DC9,#A63BFF); animation-delay: .3s"></div>
<div class="bar" style="width: 150px; height: 28px; border-radius: 6px; transform: skewX(-28deg); background: linear-gradient(90deg,#6A0DC9,#A63BFF); animation-delay: .45s"></div>
<div class="bar" style="width: 220px; height: 28px; border-radius: 6px; transform: skewX(-28deg); background: linear-gradient(90deg,#6A0DC9,#A63BFF); animation-delay: .6s"></div>
</div>
<figure class="photo in t3" style="position: absolute; left: 0; top: 60px; width: 72%; height: 480px; margin: 0; border-radius: 24px; overflow: hidden; box-shadow: 0 40px 80px -30px rgba(122,18,224,0.6); z-index: 1">
<img src="/img/equipe-estabilizador.jpg" alt="Integrante da AE Marketing segurando celular com estabilizador e luz" style="width: 100%; height: 100%; object-fit: cover; display: block">
<span class="m" style="position: absolute; left: 16px; top: 16px; display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 999px; background: rgba(13,11,18,0.78); color: #FFFFFF; font-size: 12px"><span class="live" aria-hidden="true" style="width: 8px; height: 8px; border-radius: 50%; background: #FF4D6D; display: inline-block"></span>Ao vivo</span>
</figure>
<figure class="photo float" style="position: absolute; right: 0; bottom: 0; width: 46%; height: 300px; margin: 0; border-radius: 20px; overflow: hidden; border: 6px solid #0D0B12; z-index: 2">
<img src="/img/equipe-filmando.jpg" alt="Integrante da AE Marketing filmando com celular" style="width: 100%; height: 100%; object-fit: cover; display: block">
</figure>
</div>
</div>
</section>
</template>
