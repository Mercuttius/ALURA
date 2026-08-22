
// const pessoa = {
//     nome: 'joao',
//     idade: 30,
//     temCNH: true
// }
// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa.temCNH);

const livro = {
    titulo: 'O Senhor dos Anéis',
    paginas: 1200
}
livro.publicado = true;
livro.indiomas = ['Português', 'Inglês', 'Espanhol'];
console.log(livro.indiomas[1], livro.publicado);
livro.indiomas.push('frances');
livro.indiomas.push('mandarin');

console.log('livro antes: ', livro);
// delete livro.paginas
console.log('livro depois: ', livro);

console.log('numero de páginas: ', livro['paginas']);
console.log('Editora: ', livro['editora']);

const autor = {
    nome: 'J. R. R. Tolkien',
    nacionalidade: 'Inglês',
    idade: 81,
    livros: [livro]
}
livro.autor = autor;
console.log('autor do livro: ', autor);
console.log(livro); 

console.log('notação de colchetes: ', livro['titulo'], livro['paginas']);
console.log('notação de ponto: ', livro.titulo, livro.paginas);