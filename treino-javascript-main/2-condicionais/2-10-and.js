/**
 * Escreva um script que declara duas variáveis:
 * - Uma numérica `idade`
 * - e uma booleana `possuiCarteira`
 * e imprime "Pode dirigir" caso a idade seja maior ou igual a 18 e
 * possuiCarteira seja true.
 * Imprima "Não pode dirigir" caso contrário.
 * 
 * && - and
 * || - or
 * ! - not
 */

const idade = 20
const possuiCarteira = true

if (idade >= 18 && possuiCarteira) {
  console.log('Pode dirigir')
} else {
  console.log('Não pode dirigir')
}
