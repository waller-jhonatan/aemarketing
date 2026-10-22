// Data de início das operações da AE Marketing.
export const INICIO_OPERACAO = new Date(2021, 0, 1)

// Anos completos de operação até `hoje`.
export function anosDeOperacao(hoje = new Date()) {
  let anos = hoje.getFullYear() - INICIO_OPERACAO.getFullYear()
  const aniversario = new Date(hoje.getFullYear(), INICIO_OPERACAO.getMonth(), INICIO_OPERACAO.getDate())
  if (hoje < aniversario) anos--
  return anos
}
