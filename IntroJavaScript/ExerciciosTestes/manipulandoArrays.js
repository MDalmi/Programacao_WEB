const livros = [{ nome: 'CSS3', ano: 2020 }, { nome: 'Java', ano: 2003 }, { nome: 'REACT', ano: 2020 }, { nome: 'PRONTUARIO', ano: 2020 }, { nome: 'HTML', ano: 2018 }]

livros.map((livro, index) => {
    console.log("Nome: " + livro.nome + " Ano: " + livro.ano + " Indice: " + index);
})

//método filter retorna uma array
let livrosFiltrados = livros.filter((livro) => livro.ano > 2019);

//find retorna um objeto
let livrosProcurados = livros.find((livro) => livro.nome === "Java");

console.log(livrosFiltrados)
console.log(livrosProcurados)