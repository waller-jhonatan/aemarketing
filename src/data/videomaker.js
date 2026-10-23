// Conteúdo do vídeo maker, usado em /video-maker e /eventos.

export const etapas = [
  { n: '01', titulo: 'Alinhamos', texto: 'Estilo do evento, roteiro e momentos-chave que não podem faltar.' },
  { n: '02', titulo: 'Cobrimos', texto: 'Vídeos, fotos e stories ao vivo, do primeiro ao último momento.' },
  { n: '03', titulo: 'Entregamos', texto: 'Vídeo editado e material pronto para postar e compartilhar.' },
]

// Reel que toca no celular do topo. A capa é o primeiro quadro do vídeo, e a
// versão leve (540x960, ~12 MB) basta porque o quadro do celular é estreito.
export const reel = { video: '/video/video-mobile.mp4', capa: '/video/video-capa.jpg' }

// Faixa que passa abaixo do topo em /eventos e /video-maker.
export const faixa = ['Vídeo maker', 'Storymaker', 'Stories ao vivo', 'Bastidores', 'Fotos', 'Filme editado', 'Momentos eternizados']
