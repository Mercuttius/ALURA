let listaDeNumerosSorteados = []
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto ')
    exibirTextoNaTela('p', 'escolha um número de 1 a 10')
}

mensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `voce acertou com ${tentativas} ${palavraTentativa}!`
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!')
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero secreto é menor!')
        }else{
            exibirTextoNaTela('p', 'o numero secreto é maior')
        }
        tentativas++
        limparCampo();
    }
    
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 3 + 1)
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosDaLista == 3){
        listaDeNumerosSorteados = [ '' ] 
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
 
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}









