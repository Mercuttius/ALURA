const frutas = ['uva', 'maça', 'banana', 'laranja'];

console.log('lista de frutas: ',frutas);
// console.log('primeira fruta:',frutas[0]);
// console.log('total de frutas: ', frutas.length);
// frutas.push('pera');
// console.log('nova lista de frutas',frutas);
// console.log('total de frutas depois de adicionar a pera: ', frutas.length);
// console.log('ultima fruta: ', frutas[frutas.length -1]);

// frutas.splice(2, 1);
// console.log('lista de frutas apos remover banana', frutas);

console.log('percorrendo array com "for": ');
 for(let i = 0; i < frutas.length; i++){
    console.log('frutas na posiçao i: ', i);
    console.log(frutas[i]);
 }

console.log('percorrendo array com "forEach"');
frutas.forEach((valor, indice)=>{
    console.log('indice: ', indice, valor);
})

console.log('com for of');
for (const fruta of frutas){
    console.log('fruta da vez: ', fruta);
}


frutas.forEach(fruta => { 
console.log(fruta); 
});

