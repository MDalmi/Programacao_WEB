const livros1 = ['CSS3', 'NODE', 'REACT']
const livros2 = ['Java Script', 'HTML5']

const livrosSemSpread = livros1 + livros2
console.log(livrosSemSpread)

const livros = [...livros1, ...livros2];
console.log(livros);

let objeto = { id: 1, nome: 'Jorge' }
console.log(objeto)
objeto.nome = "Joao";
console.log(objeto)

// alterando um objeto com o operador spread

let novoObjeto = { ...objeto, 'nome': "Antonio" }
console.log(novoObjeto)



