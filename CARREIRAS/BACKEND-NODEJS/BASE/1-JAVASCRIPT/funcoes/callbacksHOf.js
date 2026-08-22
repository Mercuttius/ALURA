




function calcular(num1, num2, operacao){
     
    return operacao(num1, num2);
}

function soma(numero1, numero2){
    return numero1 + numero2;
}

function subtracao(numero1, numero2){
    return numero1 - numero2;
}

const resultadoSoma = calcular(10, 5, soma);
const resultadoSubtracao = calcular(10, 5, subtracao);

console.log("resultado soma", resultadoSoma);
console.log("resultado subtração", resultadoSubtracao);



