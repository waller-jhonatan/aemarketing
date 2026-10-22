import { anosDeOperacao } from './empresa'

// Resultados exibidos no bloco "Resultados" (home e /empresas).
//
// Itens com `provisorio: true` aparecem marcados em `npm run dev` e são
// OMITIDOS no build de produção. Ao trocar por dados reais, remova a flag.

export const cases = [
  {
    cliente: 'Nome do cliente',
    segmento: 'Segmento (ex.: Restaurante)',
    metrica: '+120%',
    rotulo: 'de alcance no Instagram em 3 meses',
    texto: 'Resumo do que foi feito: planejamento de conteúdo, reels semanais e campanhas no Meta Ads.',
    provisorio: true,
  },
  {
    cliente: 'Nome do cliente',
    segmento: 'Segmento (ex.: Clínica)',
    metrica: '+80',
    rotulo: 'novos contatos por mês no WhatsApp',
    texto: 'Resumo do que foi feito: posicionamento do perfil e anúncios direcionados para a região.',
    provisorio: true,
  },
  {
    cliente: 'Nome do cliente',
    segmento: 'Segmento (ex.: Loja)',
    metrica: '3x',
    rotulo: 'mais engajamento nos posts',
    texto: 'Resumo do que foi feito: nova identidade visual do feed e calendário de publicações.',
    provisorio: true,
  },
]

export const numeros = [
  { valor: anosDeOperacao(), prefixo: '+', rotulo: 'anos de operação' },
  { valor: 40, prefixo: '+', rotulo: 'clientes ativos', provisorio: true },
  { valor: 10, prefixo: '', rotulo: 'cidades atendidas', provisorio: true },
]
