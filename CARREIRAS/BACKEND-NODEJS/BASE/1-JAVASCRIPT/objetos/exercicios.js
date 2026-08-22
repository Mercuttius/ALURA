
const gustavo = {
    nome: 'Gustavo',
    idade: 31,
    profissao: 'Programador',
}
//--------------------------------------------------
console.log(gustavo.nome);
//--------------------------------------------------
gustavo.idade = 32;
//--------------------------------------------------
gustavo.cidade = 'São Paulo';
//--------------------------------------------------
const dados = (objeto)=>{
    return 'Meu nome é ' + objeto.nome + ', minha idade é ' + objeto.idade + ' e minha profissão é ' + objeto.profissao;
}
console.log(dados(gustavo));
//--------------------------------------------------
const pessoas = [
    gustavinho = {
        nome: 'Gustavo',
        idade: 31,
    },
    guguinha = {
        nome: 'Guguinha',
        idade: 10,
    },
    gu = {
        nome: 'Gu',
        idade: 20,
    }
]
//--------------------------------------------------
const pessoamior = pessoas.filter((pessoa)=>{
    return pessoa.idade > 18;
})
console.log(pessoamior);
//--------------------------------------------------
const usuario = {
    nome: 'guguzinho',
    saudacao: function(){
        console.log('olá meu nome é', usuario.nome);
    }
}
//--------------------------------------------------
for(const chave in gustavo){
    console.log('chave', chave);
    console.log('valor', gustavo[chave])
}
//--------------------------------------------------
const produto = {
    preco: 30,
    quantidade: 3,
}
console.log('preço total', produto.preco * produto.quantidade);
//------------------------------------------------


