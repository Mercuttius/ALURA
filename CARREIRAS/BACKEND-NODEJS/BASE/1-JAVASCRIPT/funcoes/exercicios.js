const rl = require(`readline`);

const leitor = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

function saudacao(nome){
    console.log('ola ', nome)
}
saudacao('guga')

function apresentarPessoa(nome, idade){
    console.log("Olá, meu nome é "+nome+" e tenho "+idade+" anos.")
}
apresentarPessoa('guga', 31)

function calcularIMC(peso, altura){
    const imc = peso / (altura ** 2);
    console.log("Seu IMC é "+imc.toFixed(2));
}
calcularIMC(95, 1.83)

function verificarAprovacao(nota){
    if(nota >= 7){
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}
verificarAprovacao(8);

function ehPar(num){
    return num % 2 === 0;
}
console.log(ehPar(3));

function soma(a, b){
    return a + b;
}
console.log("a sua soma deu "+soma(5, 3));

function calcularTroco(valorCompra, valorPago){
    return valorPago - valorCompra;
}
console.log("o seu troco é "+calcularTroco(50, 80));

const soma1 = (a, b) => a + b;
console.log("a sua soma deu "+soma1(5, 3));

function executarAcao(acao){
    acao();
}
executarAcao(() => console.log("executando acao"));

function fazerPergunta(pergunta, respostaCorreta){
    console.log(pergunta);

    const resposta = "preto";
    if(resposta == respostaCorreta){
        console.log("acertou!");
    }else{
        console.log("errou!");
    }

}
fazerPergunta("qual é a minha cor?", "preto");


