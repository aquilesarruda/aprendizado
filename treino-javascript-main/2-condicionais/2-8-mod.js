/**
 * Escreva um script que declara uma variável numérica
 * e imprime "Par" caso o valor seja par,
 * ou "Ímpar" caso o valor seja ímpar.
 * 
 * O operador '%' retorna o resto da divisão.
 * 
 * '10 % 2' retorna 0, porque o resto da divisão 10/2 é zero.
 * '100 % 60' retorna 40, porque o resto da divisão 100/60 é 40.
 */

const num = 37

if (num % 2 === 0) { // Se o resto da divisão num/2 for zero, significa que o número é par
  console.log('Par')
} else {
  console.log('Ímpar')
}

// Uma outra forma de escrever esse script:

const éPar = num % 2 === 0

if (éPar) { // O valor de éPar neste momento é "true"
  console.log('Par')
} else {
  console.log('Ímpar')
}
