/**
 * Escreva um script que declara duas variáveis:
 * - `isStudent`, com um valor booleano
 * - `age`, com um valor numérico.
 *
 * O script deve imprimir "Direito a disconto"
 * caso a idade seja maior ou igual 60 ou `isStudent` seja `true`.
 */

const isStudent = true
const age = 25

if (isStudent || age >= 60) {
  console.log('Você tem direito a desconto')
} else {
  console.log('Você não tem direito a desconto')
}
