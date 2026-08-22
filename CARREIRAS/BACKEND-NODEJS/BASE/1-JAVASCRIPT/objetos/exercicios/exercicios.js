import { soma } from "./somas.js";

const pessoa = {
    nome: 'guginha',
    idade: 32,
    email: 'gg@gmail.com',
}
const { nome, idade } = pessoa;
console.log(nome, idade)
//-----------------------------------------
const linguagens = ['typescript', 'nestjs', 'node.js']
const [ling1, ling2, ling3] = linguagens
console.log(ling1, ling2, ling3)
//-----------------------------------------
function somarTudo(...numero){
    let soma = 0;
    for(let i = 0; i < numero.length; i++){
        soma += numero[i];
    }
    return soma;
}
console.log(somarTudo(10, 20, 30, 40))
//-----------------------------------------
const frutas1 = ['uva', 'limao', 'maca', 'abacate']
const frutas2 = ['pessego', 'acerola', 'caju']
const todasFrutas = [...frutas1, ...frutas2]
console.log(todasFrutas)
//-----------------------------------------
const pessoa1 = {
    nome: 'guguinha',
}
const pessoa2 = {
    idade: 32
}
const pessoaCompleta = {
    ...pessoa1,
    ...pessoa2,
}
console.log(pessoaCompleta)
//-----------------------------------------
function saudacao(nome){
    if(nome == null){
        console.log('visitante')
    }else{
        console.log('ola ', nome)
    }
}
saudacao('guguinha')
saudacao()
//-----------------------------------------
const data = new Date()
console.log(data.toLocaleDateString('pt-BR'))
//-----------------------------------------
console.log(soma(1, 2, 3))
//-----------------------------------------
function Livro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
    this.descrever = function(){
        return `seu livro é ${titulo}, e o autor é ${autor}`
    }
}
const livro1 = new Livro('senhor dos aneis', 'j.r.r. tolkien')
const livro2 = new Livro('senhor dos aneis 2', 'j.r.r. tolkien')
console.log(livro1, livro2)
console.log(livro1.descrever())
 //-----------------------------------------
