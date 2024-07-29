/**
 * Escreva um script que declara uma string
 * e imprime "Palavrão" se a string possui 10 ou mais caracteres,
 * ou "Palavrinha" caso contrário.
 */

const palavra = 'Probabilidade'

const tamanho = palavra.length // .length retorna o tamanho da string

if (tamanho >= 10) {
  console.log('Palavrão')
} else {
  console.log('Palavrinha')
}
