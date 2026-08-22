const pessoa = {
    nome: 'julia',
    idade: 34,
    profissao: 'programadora',
}

const {nome, idade, profissao} = pessoa;

console.log(nome);
console.log(idade);
console.log(profissao);

function saudacao({ nome, profissao }){
    console.log('ola, meu nome é', nome, 'e minha profissao é', profissao);
}

saudacao(pessoa);


const frutas = ['uva','abacaxi', 'coco', 'kiwi']

const [primeira, segunda] = frutas

console.log(primeira, segunda)















