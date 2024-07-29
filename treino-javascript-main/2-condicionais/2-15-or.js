/**
 * Escreva um script que declara duas variáveis booleanas:
 * - hasPaidSubscription
 * - isTrialPeriod
 * O script deve imprimir "Acesso permitido" caso uma das duas seja `true`,
 * ou imprimir "Acesso bloqueado" caso contrário.
 */

let hasPaidSubscription = true
let isTrialPeriod = false

if (hasPaidSubscription || isTrialPeriod && !false ){

    console.log('Acesso Permitido')
}else{
    console.log('Acesso Negado!')
}
