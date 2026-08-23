
import { soma } from './somas.js'

const agora = new Date();
console.log(agora)
console.log('ano', agora.getFullYear());
console.log('mes', agora.getMonth());
console.log('dia', agora.getDate());
console.log('hora', agora.getHours());
console.log('aminutos', agora.getMinutes());
//-------------------------------------------------
// Criação customizada usando construtores separados
const dataCustomizada = new Date(2025, 11, 31, 23, 45, 30); // ano, mês 0-11, dia, hora, minuto, segundo
console.log('data customizada (construtor separado)', dataCustomizada);

// Criação customizada usando string ISO 8601 com timezone
const dataIsoTimezone = new Date('2025-12-31T23:45:30-03:00');
console.log('data customizada ISO 8601 com timezone', dataIsoTimezone);
//-------------------------------------------------
console.log(agora.toLocaleDateString('pt-BR'))
//-------------------------------------------------
const pessoaOriginal = {
    nome: 'guguinha',
    idade: 32,
    cor: 'preto',
}
const pessoaAtualizada = {
    ...pessoaOriginal,
    idade: 33,
    cor: 'branco',
}
console.log(pessoaOriginal)
console.log(pessoaAtualizada)
//-------------------------------------------------
const fruta1 = ['maca', 'limao', 'uva']
const fruta2 = ['manga', 'caju', 'pitaya']
const todasFrutas = [...fruta1, ...fruta2]
console.log(fruta1)
console.log(fruta2)
console.log(todasFrutas)
const [primeira, segunda, ...restante] = todasFrutas
console.log(primeira, segunda, restante)
//-------------------------------------------------
const pessoa = {
    nome: 'calanguinho',
    idade: 98,
    cor: 'verde',
    status: 'vivo',
}
const animais = ['calango', 'tigre', 'onca']
const { nome, idade, status } = pessoa
const [ calango, tigre ] = animais
console.log(nome)
console.log(idade)
console.log(status)
console.log(calango)
console.log(tigre)
//-------------------------------------------------
console.log(soma(1, 2, 3))
//-------------------------------------------------






