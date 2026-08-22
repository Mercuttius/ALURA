

const pessoa = {
    nome: 'guga',
    idade: 32,
    pets: ['banguela', 'neguinho', 'mel', 'minimel'],
    nacionalidade: 'brasileiro'
}

for(const chave in pessoa){
    console.log('chave', chave)
    console.log('valor', pessoa[chave])

}

const chaves = Object.keys(pessoa);
const valores = Object.values(pessoa);
const entradas = Object.entries(pessoa);

console.log('chaves', chaves)
console.log('valores', valores)
console.log('entradas', entradas)














