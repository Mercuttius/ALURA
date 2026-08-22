
const pessoa = {
    nome: 'guguinha',
    idade: 31,
    CNH: true,
    pets: ['banguela', 'neguinho', 'mel', 'minimel'],
}
console.log(pessoa)
//--------------------------------------------------
pessoa.idade = 32;
console.log(pessoa)
//--------------------------------------------------
delete pessoa.CNH;
console.log(pessoa)
//--------------------------------------------------
console.log(pessoa.pets[2]);
console.log(pessoa['pets'][2]);
//--------------------------------------------------
const valores = Object.values(pessoa);
console.log(valores)
//--------------------------------------------------
const chaves = Object.keys(pessoa);
console.log(chaves)
//--------------------------------------------------
const entradas = Object.entries(pessoa);
console.log(entradas)
//--------------------------------------------------
















