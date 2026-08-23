const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((numero)=>{
    return numero % 2 === 0;
})

const numerosImpares = numeros.filter((numero)=>{
    return numero % 2 !== 0;
})

const numerosDobrados = numeros.map((numero)=>{
    return numero * 2;
})

console.log('todos os numeros: ',numeros);
console.log('numeros pares: ',numerosPares);
console.log('numeros impares: ',numerosImpares);
console.log('numeros dobrados', numerosDobrados);










