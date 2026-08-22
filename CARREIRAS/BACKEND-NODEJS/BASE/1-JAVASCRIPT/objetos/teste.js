const livro = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  paginas: 310,
  grande: 'tamanho da rola do autor'
};

const propriedade = "autor";
const rolaDoAutor = "grande";
console.log(livro[propriedade], livro[rolaDoAutor]); // Imprime: J.R.R. Tolkien

const livroJSON = JSON.stringify(livro);// transforma o objeto em uma string JSON
console.log(livroJSON);

const livroOBJETO = JSON.parse(livroJSON);// transforma a string JSON em um objeto
console.log(livroOBJETO);

let pessoa = { 
nome: 'Maria', 
idade: 28, 
apresentar: function() { 
console.log('Olá, meu nome é ' + this.nome); 
} 
}; 
pessoa.apresentar(); // Resultado: Olá, meu nome é Maria
let outraPessoa = { 
nome: 'João', 
apresentar: pessoa.apresentar 
}; 
outraPessoa.apresentar(); // Resultado: Olá, meu nome é João