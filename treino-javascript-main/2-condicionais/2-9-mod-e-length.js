/**
 * Escreva um script que declara uma string
 * e imprime "Tamanho par" caso o tamanho da string seja um número par
 * ou "Tamanho ímpar" caso o tamanho da string seja um número ímpar.
 */

const tamanhoLetra = 'PalavraMagica'
const contadorLetra = tamanhoLetra.length

if (contadorLetra % 2 === 0){
    console.log('Tamanho: PAR')
}else{
    console.log('Tamanho: Impar')
}

