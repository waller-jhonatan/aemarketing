import { anosDeOperacao } from './empresa'

// Resultados exibidos no bloco "Resultados" (home e /empresas).
//
// Itens com `provisorio: true` aparecem marcados em `npm run dev` e são
// OMITIDOS no build de produção. Ao trocar por dados reais, remova a flag.

// Exemplos genéricos de como a gente trabalha em cada tipo de negócio.
// Não citam números nem clientes, para não soar como promessa de resultado.
export const cases = [
  {
    segmento: 'Restaurantes e bares',
    titulo: 'Pratos que dão vontade',
    texto: 'Fotos e reels que mostram o cardápio, o ambiente e a rotina da casa.',
    itens: ['Reels', 'Fotos', 'Stories'],
  },
  {
    segmento: 'Clínicas e consultórios',
    titulo: 'Confiança antes da consulta',
    texto: 'Conteúdo que apresenta a equipe, tira dúvidas comuns e aproxima o paciente.',
    itens: ['Posts educativos', 'Stories', 'Anúncios locais'],
  },
  {
    segmento: 'Lojas e comércio',
    titulo: 'Vitrine aberta todo dia',
    texto: 'Lançamentos, promoções e produtos em destaque, com calendário de publicações.',
    itens: ['Posts', 'Reels', 'Tráfego pago'],
  },
]

export const numeros = [
  { valor: anosDeOperacao(), prefixo: '+', rotulo: 'anos de operação' },
  { valor: 40, prefixo: '+', rotulo: 'clientes' },
  { valor: 14, prefixo: '+', rotulo: 'cidades atendidas' },
]
