// const readline = require(`readline`);
import { createInterface } from 'readline'
import { soma, subtracao, divisao, exponencial } from './operacoes.js'

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('digite o primeiro numero:\n>', (numero1)=>{

    leitor.question('Digite a operaçao:\n+ : soma\n- : subtracao\n/ : divisão\n** : exponencial>', (operacao)=>{
        
        leitor.question('Digite o segundo número:\n>', (numero2)=>{
            const num1 = Number(numero1)
            const num2 = Number(numero2)
            let resultado = null

            if(operacao == '+'){
                resultado = soma(num1, num2)
            }else if(operacao == '-'){
                resultado = subtracao(num1, num2)

            }else if(operacao == '/'){
                resultado = divisao(num1,num2)
            }else if(operacao == '**'){
                resultado = exponencial(num1, num2)
            }else{
                console.log('operacao invalida')
            }

            if(resultado != null){
                console.log('o resultado da opracao é: ', resultado)
            }

            leitor.close();
        })

    })
})















