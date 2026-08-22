
const camila1 = {
    nome: 'camila',
    idade: 30,
    profissao: 'programadora',
}

const camila2 = {
    ...camila1,//spread operator, copia o objeto camila1
    cidade: 'São Paulo',//rest operator, adiciona a propriedade cidade ao objeto camila2
    idade: 31,//rest operator, sobrescreve a propriedade idade do objeto camila2 
} 

console.log(camila1)
console.log(camila2)

const { nome, ...restante} = camila2 //rest operator, cria uma variável nome com o valor da propriedade nome do objeto camila2 e uma variável restante com o restante das propriedades do objeto camila2
console.log(nome)
console.log(restante)





















