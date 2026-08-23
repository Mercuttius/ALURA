
const frutas = ['banana', 'laranja', 'maçã', 'uva', 'abacaxi']
const maisFrutas = ['limão', 'morango', 'kiwi', 'pêssego']

const clone = [...frutas]

frutas.push('pera')

console.log(frutas)
console.log(maisFrutas)
console.log(clone)

const todasFrutas = [...frutas, ...maisFrutas]
console.log(todasFrutas)

const [primeira, segunda, ...restante] = todasFrutas //rest operator, cria uma variável primeira com o valor da primeira posição do array todasFrutas, uma variável segunda com o valor da segunda posição do array todasFrutas e uma variável restante com o restante das posições do array todasFrutas
console.log(primeira)
console.log(segunda)
console.log(restante)

















