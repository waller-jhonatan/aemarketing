<script setup>
import { whatsappEmpresa } from '../data/contato'
</script>

<template>
<section id="planos" style="background: #FFFFFF; color: #16131D; padding: 120px 24px">
<div style="max-width: 1240px; margin: 0 auto">
<div class="rv" style="text-align: center; max-width: 720px; margin: 0 auto 64px">
<p class="m" style="margin: 0 0 20px; font-size: 13px; color: #6B12C9">Planos mensais para empresas</p>
<h2 style="margin: 0; font-size: clamp(36px, 4.6vw, 60px); line-height: 1.05; font-weight: 800; letter-spacing: -0.03em">Três caminhos para <span class="grad">tirar sua marca do papel.</span></h2>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; align-items: stretch">

<article class="card rv" style="border: 1px solid #E7E2EF; border-radius: 24px; padding: 40px 36px; display: flex; flex-direction: column; background: #FFFFFF">
<p class="m" style="margin: 0; font-size: 12px; color: #6B12C9">Plano inicial</p>
<h3 style="margin: 12px 0 0; font-size: 30px; font-weight: 700">Essencial</h3>
<p style="margin: 8px 0 0; font-size: 15px; line-height: 1.5; color: #5E5869">Para quem está começando e quer presença constante no Instagram.</p>
<div style="margin-top: 28px"><span class="d grad" style="font-size: 32px; font-weight: 800; letter-spacing: -0.02em">Sob proposta</span><p style="margin: 6px 0 0; font-size: 14px; color: #5E5869">Valor ajustado ao seu negócio</p></div>
<ul style="margin: 28px 0 32px; padding: 0; list-style: none; font-size: 15px; color: #2A2533; flex: 1">
<li style="padding: 12px 0; border-top: 1px solid #EEEAF3">Gestão completa do Instagram</li>
<li style="padding: 12px 0; border-top: 1px solid #EEEAF3">8 posts + stories por mês</li>
<li style="padding: 12px 0; border-top: 1px solid #EEEAF3">Criação de artes e textos</li>
<li style="padding: 12px 0; border-top: 1px solid #EEEAF3">Consultoria de posicionamento</li>
<li style="padding: 12px 0; border-top: 1px solid #EEEAF3; border-bottom: 1px solid #EEEAF3">Análise do perfil + relatórios</li>
</ul>
<a class="btn" :href="whatsappEmpresa" style="display: flex; align-items: center; justify-content: center; min-height: 52px; border-radius: 999px; border: 1px solid #16131D; color: #16131D; text-decoration: none; font-weight: 600; font-size: 15px">Solicitar proposta</a>
</article>

<article class="card rv" style="position: relative; border: 1px solid #16131D; border-radius: 24px; padding: 40px 36px; display: flex; flex-direction: column; background: #16131D; color: #F4F1FA">
<span class="m" style="position: absolute; top: -14px; left: 36px; padding: 6px 14px; border-radius: 999px; background: linear-gradient(100deg,#6A0DC9,#9B3BFF); color: #FFFFFF; font-size: 11px">Mais pedido</span>
<p class="m" style="margin: 0; font-size: 12px; color: #C9A4FF">Plano empreendedor</p>
<h3 style="margin: 12px 0 0; font-size: 30px; font-weight: 700; color: #FFFFFF">Crescer</h3>
<p style="margin: 8px 0 0; font-size: 15px; line-height: 1.5; color: #B9B2C7">Para marcas que querem consistência, alcance e conversão em duas redes.</p>
<div style="margin-top: 28px"><span class="d" style="font-size: 32px; font-weight: 800; letter-spacing: -0.02em; color: #C9A4FF">Sob proposta</span><p style="margin: 6px 0 0; font-size: 14px; color: #B9B2C7">Valor ajustado ao seu negócio</p></div>
<ul style="margin: 28px 0 32px; padding: 0; list-style: none; font-size: 15px; color: #E6DDF5; flex: 1">
<li style="padding: 12px 0; border-top: 1px solid rgba(255,255,255,0.1)">Gestão do Instagram e Facebook</li>
<li style="padding: 12px 0; border-top: 1px solid rgba(255,255,255,0.1)">12 posts + stories por mês</li>
<li style="padding: 12px 0; border-top: 1px solid rgba(255,255,255,0.1)">Criação de artes e textos</li>
<li style="padding: 12px 0; border-top: 1px solid rgba(255,255,255,0.1)">Consultoria de posicionamento</li>
<li style="padding: 12px 0; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1)">Análise do perfil + relatórios</li>
</ul>
<a class="btn btn-p" :href="whatsappEmpresa" style="display: flex; align-items: center; justify-content: center; min-height: 52px; border-radius: 999px; background: linear-gradient(100deg,#6A0DC9,#9B3BFF); color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 15px">Solicitar proposta</a>
</article>

<article class="card rv" style="border: 1px solid #E7E2EF; border-radius: 24px; padding: 40px 36px; display: flex; flex-direction: column; background: #FFFFFF">
<p class="m" style="margin: 0; font-size: 12px; color: #6B12C9">Plano profissional</p>
<h3 style="margin: 12px 0 0; font-size: 30px; font-weight: 700">Acelerar</h3>
<p style="margin: 8px 0 0; font-size: 15px; line-height: 1.5; color: #5E5869">Para quem quer escala: presença forte e foco em transformar seguidores em clientes.</p>
<div style="margin-top: 28px"><span class="d grad" style="font-size: 32px; font-weight: 800; letter-spacing: -0.02em">Sob proposta</span><p style="margin: 6px 0 0; font-size: 14px; color: #5E5869">Valor ajustado ao seu negócio</p></div>
<ul style="margin: 28px 0 32px; padding: 0; list-style: none; font-size: 15px; color: #2A2533; flex: 1">
<li style="padding: 12px 0; border-top: 1px solid #EEEAF3">Gestão do Instagram e Facebook</li>
<li style="padding: 12px 0; border-top: 1px solid #EEEAF3">20 posts + stories por mês</li>
<li style="padding: 12px 0; border-top: 1px solid #EEEAF3">Criação de artes e textos</li>
<li style="padding: 12px 0; border-top: 1px solid #EEEAF3">Estratégias para atrair, engajar e converter</li>
<li style="padding: 12px 0; border-top: 1px solid #EEEAF3; border-bottom: 1px solid #EEEAF3">Consultoria de posicionamento</li>
</ul>
<a class="btn" :href="whatsappEmpresa" style="display: flex; align-items: center; justify-content: center; min-height: 52px; border-radius: 999px; border: 1px solid #16131D; color: #16131D; text-decoration: none; font-weight: 600; font-size: 15px">Solicitar proposta</a>
</article>
</div>

<div class="rv" style="margin-top: 56px; padding: 32px 36px; border-radius: 24px; background: #F6F4F9; display: flex; flex-wrap: wrap; align-items: center; gap: 24px 40px">
<p class="m" style="margin: 0; font-size: 12px; color: #6B12C9; flex: 0 0 auto">Para somar ao seu plano</p>
<div style="display: flex; flex-wrap: wrap; gap: 10px; flex: 1 1 480px">
<span style="padding: 10px 16px; border-radius: 999px; background: #FFFFFF; border: 1px solid #E7E2EF; font-size: 14px; color: #2A2533">Tráfego pago · Meta Ads</span>
<span style="padding: 10px 16px; border-radius: 999px; background: #FFFFFF; border: 1px solid #E7E2EF; font-size: 14px; color: #2A2533">Calendário + campanhas</span>
<span style="padding: 10px 16px; border-radius: 999px; background: #FFFFFF; border: 1px solid #E7E2EF; font-size: 14px; color: #2A2533">Atendimento ao cliente</span>
<span style="padding: 10px 16px; border-radius: 999px; background: #FFFFFF; border: 1px solid #E7E2EF; font-size: 14px; color: #2A2533">Gestão de contratos</span>
<span style="padding: 10px 16px; border-radius: 999px; background: #FFFFFF; border: 1px solid #E7E2EF; font-size: 14px; color: #2A2533">Vídeo · Foto · Gráfica · Áudio</span>
</div>
</div>
<p class="rv" style="margin: 20px 0 0; text-align: center; font-size: 14px; color: #5E5869">Cada marca tem seu próprio ritmo — conte sobre o seu negócio e enviamos uma proposta personalizada para o plano escolhido.</p>
</div>
</section>
</template>
