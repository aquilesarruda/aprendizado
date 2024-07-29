/**
 * Escreva um script que declara uma const numérica e imprime
 * "Calor" caso o valor seja maior que 28,
 * "Frio" caso o valor seja menor que 18,
 * ou "Médio" caso contrário.
 */

const temperatura = 25

if (temperatura > 28) {
  console.log('Calor')
} else if (temperatura < 18) {
  console.log('Frio')
} else {
  console.log('Médio')
}

// Irá imprimir 'Médio'
