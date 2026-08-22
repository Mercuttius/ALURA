const readline = require(`readline`);

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question(`qual e o seu nome?`, (nome)=>{
    console.log('ola', nome);
    console.log(`boas vindas`);

    leitor.question('qual é a sua idade? ', (idade)=>{
        if(idade >= 18){
            console.log('voce é maior de idade');
        }else{
            console.log('voce é menor de idade');
        }
        leitor.close();
    })
})







