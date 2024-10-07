const express = require('express')
const cors = require('cors')

// criar uma instância de um app express
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


// criar um método que trta a requisição e gera response

const sobre = (request, response) => {
    response.status(201).json("API criada pelos magnatas!")
}

const ola = (request, response) => {
    response.status(200).json("seja bem vindo ao express");
}

const pegaDados = (request, response) => {
    const { nome, profissao } = request.body;
    response.status(200).json({ "NomeRecebido: ": nome, "ProfissaoRecebida": profissao, "Mensagem": "Dados recebidos com sucesso" })
}

// associando o método a uma rota e um verbo do http
app.route("/").get(ola).post(pegaDados);

app.route("/sobre").get(sobre);


// lista de livros

let listaLivros = [{ nome: "Serviços com express", editora: "Moderna", ano: "2015" },
{ nome: "Harry Potter 1", editora: "Moderna", ano: "2000" },
{ nome: "Harry Potter 2", editora: "Moderna", ano: "2003" },
{ nome: "Harry Potter 3", editora: "Moderna", ano: "2006" },
{ nome: "Harry Potter 4", editora: "Moderna", ano: "2009" },
{ nome: "Harry Potter 5", editora: "Moderna", ano: "2013" },
{ nome: "Harry Potter 6", editora: "Moderna", ano: "2018" }
];

const getLivros = (request, response) => {
    response.status(200).json(listaLivros)
}

const addLivro = (request, response) => {
    const { nome, editora, ano } = request.body;
    if (nome.length > 0 && editora.length > 0 && ano != null) {
        listaLivros.push({ nome: nome, editora: editora, ano: ano })
        return response.status(200).json("Livro adicionado com sucesso!")
    }
    else {
        return response.status(500).json("Parâmetros de entrada não aceitos")
    }
}

const getLivroPorIndice = (request, response) => {
    const index = parseInt(request.params.index)
    const livro = listaLivros[index]
    if (livro != null) {
        return response.status(200).json(livro)
    }
    else
        return response.status(404).json("Livro não encontrado")

}

const removeLivroPorIndice = (request, response) => {
    const index = parseInt(request.params.index)
    const livro = listaLivros[index]
    if (livro != null) {
        listaLivros.splice(index, index)
        return response.status(200).json("Livro removido com sucesso")
    }
    else {
        return response.status(404).json("Livro não encontrado")
    }

}

app.listen(3002, () => {
    console.log('Servidor rodando na porta 3002!')
})

app.route('/livros')
    .get(getLivros)
    .post(addLivro)

app.route('/livros/:index')
    .get(getLivroPorIndice)
    .delete(removeLivroPorIndice)