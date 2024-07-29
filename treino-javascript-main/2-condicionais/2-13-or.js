/**
 * Escreva um script que verifica se um número está dentro do intervalo de 0 a 10.
 * O script deve imprimir:
 * "O número está fora do intervalo" se o número estiver fora e
 * "O número está dentro do intervalo" caso contrário.
 */

const number = 8

// Como ler o "if":
// number é menor que 0? number é maior que 10?
// Uma dessas duas operações é verdadeira? Se sim, está fora do intervalo.

if (number < 0 || number > 10) {
  console.log('O número está fora do intervalo')
} else {
  console.log('O número está dentro do intervalo')
}
