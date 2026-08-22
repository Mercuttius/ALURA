
const array = [1, 'a', 30, 'ss', true, 'q'];
console.log(array[2]);
console.log(array.length);
array.push('novo elemento');
console.log(array);
array.splice(2, 1);
console.log(array);
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
array.forEach((valor, indice)=>{
    console.log('indice', indice, 'valor', valor);
})
for(elemento of array){
    console.log(elemento);
}
array.filter((valor)=>{
    if(typeof valor === 'number'){
        console.log('Elemento numérico',valor);
    }else{
        console.log('Elemento não numérico:', valor);
    }
})
let array1 = array.map((valor)=>{
    return valor + ' - modificado';
}
)
console.log(array1);













