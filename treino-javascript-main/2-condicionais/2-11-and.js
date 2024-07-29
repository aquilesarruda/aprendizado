/**
 * Escreva um script que declara duas variáveis
 * - email, do tipo string
 * - senha, do tipo string
 * - aceitaOsTermos, do tipo boolean
 * 
 * O script deve imprimir "Cadastro aceito" caso o email não seja vazio,
 * a senha seja maior que 12 caracteres, e aceitaOsTermos seja true.
 * 
 * Caso o email esteja vazio, imprima "Email inválido".
 * Caso a senha seja menor que 12 caracteres, imprima "Senha fraca".
 * Caso aceitaOsTermos seja false, imprima "Você precisa aceitar os termos e condições".
 */

const senha = 'suasenha1234'
const aceitarOsTermos = -1
const tamanhoDaPalavra = senha.length

if (email === ''){
  console.log('Digite seu email')
}else{
console.log(email)
}

if (tamanhoDaPalavra >= 12){
  console.log('Senha Forte')
  }else{
  console.log('Senha fraca')
}

if (aceitarOsTermos > 0){
  console.log('Termos aceitos')
}else{
  console.log('Voce pracisa aceitar os termos')
}
