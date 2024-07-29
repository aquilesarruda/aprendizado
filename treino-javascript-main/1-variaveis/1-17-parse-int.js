/**
 * Conversão de tipos
 */

// Se você tentar somar duas strings, irá resultar em uma concatenação

const num1 = '12'
const num2 = '34'

const concatenação = num1 + num2 // Irá concatenar, pois são strings, não numbers

console.log(`Resultado: ${concatenação}`) // Resultado: 1234

const soma = parseInt(num1) + parseInt(num2) // Irá somar, pois num1 e num2 estão sendo convertidos em números

console.log(`Resultado: ${soma}`) // Resultado: 46
