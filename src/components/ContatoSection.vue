<script setup>
import { contato } from '../data/contato'

defineProps({
  whatsapp: { type: String, default: contato.whatsapp },
  texto: {
    type: String,
    default: 'Conte pra gente sobre o seu negócio ou evento. A conversa é rápida e sem compromisso.',
  },
})
</script>

<template>
<section id="contato" style="position: relative; overflow: hidden; padding: 136px 24px 120px; background: linear-gradient(160deg,#1B0838 0%,#0D0B12 70%)">
<div class="sbars rv" aria-hidden="true" style="left: -24px; top: 72px; align-items: flex-start; z-index: 0"><div class="sbar" style="width: 180px; background: linear-gradient(270deg,#6A0DC9,#A63BFF)"></div><div class="sbar" style="width: 120px; background: linear-gradient(270deg,#6A0DC9,#A63BFF)"></div><div class="sbar" style="width: 180px; background: linear-gradient(270deg,#6A0DC9,#A63BFF)"></div></div>
<div class="glow" aria-hidden="true" style="position: absolute; right: -180px; top: -200px; width: 700px; height: 700px; border-radius: 50%; background: radial-gradient(circle, rgba(160,70,255,0.4) 0%, rgba(13,11,18,0) 65%); pointer-events: none"></div>
<div style="position: relative; max-width: 1040px; margin: 0 auto; text-align: center">
<p class="m rv" style="margin: 0 0 28px; font-size: 13px; color: #C9A4FF">Vamos conversar?</p>
<h2 class="rv" style="margin: 0; font-size: clamp(36px, 5vw, 68px); line-height: 1.06; font-weight: 300; letter-spacing: -0.035em; color: #FFFFFF">Os melhores resultados nascem da <span class="grad" style="font-weight: 800">melhor equipe</span> com o <span class="grad" style="font-weight: 800">melhor cliente.</span></h2>
<p class="rv" style="margin: 28px auto 0; max-width: 560px; font-size: 18px; line-height: 1.6; color: #B9B2C7">{{ texto }}</p>
<div class="rv" style="margin-top: 40px; display: flex; flex-wrap: wrap; justify-content: center; gap: 14px">
<a class="btn btn-p" :href="whatsapp" style="display: inline-flex; align-items: center; gap: 10px; min-height: 56px; padding: 0 30px; border-radius: 999px; background: linear-gradient(100deg,#6A0DC9,#9B3BFF); color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 16px">Chamar no WhatsApp <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>
<div class="rv" style="margin-top: 72px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.12); display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; text-align: left">
<div><p class="m" style="margin: 0 0 8px; font-size: 11px; color: #B57BFF">WhatsApp</p><a :href="contato.whatsapp" style="font-family: Sora, sans-serif; font-size: 18px; font-weight: 600; color: #FFFFFF; text-decoration: none">{{ contato.whatsappLabel }}</a></div>
<div><p class="m" style="margin: 0 0 8px; font-size: 11px; color: #B57BFF">Instagram</p><a :href="contato.instagram" style="font-family: Sora, sans-serif; font-size: 18px; font-weight: 600; color: #FFFFFF; text-decoration: none">{{ contato.instagramLabel }}</a></div>
</div>
</div>
</section>
</template>
