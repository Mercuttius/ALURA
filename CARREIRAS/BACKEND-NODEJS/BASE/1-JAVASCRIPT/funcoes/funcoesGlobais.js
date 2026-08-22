

function saudacao(){
    console.log("Olá, seja bem-vindo(a)!");
}

//setTimeout(saudacao, 2000);

let contador = 0;

const id = setInterval(()=>{
    contador++;
    console.log('tempo em segundos:', contador);
    if(contador === 10){
        clearInterval(id);
    }
}, 1000);







