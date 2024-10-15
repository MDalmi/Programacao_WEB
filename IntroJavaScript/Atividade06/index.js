const express = require('express');
const cors = require('cors');

// criar uma instancia de um app express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// criar um método que trata a requisição e gera resposta

 const ola = (request, response) => {
    response.status(200).json("Seja bem vindo ao Express");
}

const sobre = (request, response) => {
    response.status(201).json("API desenvolvida em PW - Executando com nodemon");
}

const pegaDados = (request, response) => {
    const { nome, profissao } = request.body;
    response.status(200).json({
        "nomerecebido": nome,
        "profissaorecebido": profissao,
        "mensagem": "Dados recebidos com sucesso"
    });
}

// associando o método a uma rota e um verbo do http
app.route("/")
    .get(ola)
    .post(pegaDados);

app.route("/sobre").get(sobre);

// lista de livros

let listaLivros = [
    { nome: "Serviços com express", editora: "Moderna", ano: 2020 },
    { nome: "React", editora: "Erica", ano: 2022 },
    { nome: "NextJS", editora: "Moderna", ano: 2024 }
];

const getLivros = (request, response) => {
    response.status(200).json(listaLivros);
}

const addLivro = (request, response) => {
    const { nome, editora, ano } = request.body;
    if (nome.length > 0 && editora.length > 0 && ano != null) {
        listaLivros.push({ nome: nome, editora: editora, ano: ano });
        return response.status(200).json("Livro adicionado com sucesso");
    } else {
        return response.status(500).json("Parâmetros de entrada não aceitos");
    }
}

const getLivroPorIndice = (request, response) => {
    const index = parseInt(request.params.index);
    const livro = listaLivros[index];
    if (livro != null) {
        return response.status(200).json(livro);
    } else {
        return response.status(404).json("Livro não encontrado");
    }
}

const removeLivroPorIndice = (request, response) => {
    const index = parseInt(request.params.index);
    const livro = listaLivros[index];
    if (livro != null) {
        listaLivros.splice(index, index);
        return response.status(200).json("Livro removido com sucesso");
    } else {
        return response.status(404).json("Livro não encontrado");
    }
       
}

  /*
app.route('/livros')
    .get(getLivros)
    .post(addLivro);

app.route('/livros/:index')
    .get(getLivroPorIndice)
    .delete(removeLivroPorIndice);

app.listen(3002, () => {
    console.log('Servidor rodando na porta 3002');
})
*/
/* Crie uma API que será o backend de uma aplicação que calcula o IMC. Ela
deverá ter os seguintes métodos/rotas:
a. Um método que recebe um objeto JSON com o nome, altura e peso de
uma pessoa, e retorna o valor do IMC e sua classificação juntamente
os dados recebidos. Este método também deve armazenar em
uma lista no servidor do serviço os cálculos já realizados.
b. Um método que retorna uma lista com todos os cálculos do IMC já
realizados.
c. Um método que recebe um índice de um cálculo já realizado e o
remove da lista.  */

let listaIMC = [
    { nome: "Maicon", altura: 1.70, peso: 69.5, valor_IMC: "12", classificacao: "ACIMA" },
];

const getCalculos = (request, response) => {
    response.status(200).json(listaIMC);
}

const addCALCULO = (request, response) => {
    const { nome, altura, peso } = request.body;
    if (nome && altura && peso) {
        const FinalConta = Number(peso) / (Number(altura) * Number(altura));
        const FinalFinal = FinalConta.toFixed(2);

        const textoCla = FinalFinal < 18.5 ? 'Magreza (Grau 0)' :
            FinalFinal >= 18.5 && FinalFinal <= 24.9 ? 'Normal (Grau 0)' :
            FinalFinal >= 25 && FinalFinal <= 29.9 ? 'Sobrepeso (Grau I)' :
            FinalFinal >= 30 && FinalFinal <= 39.9 ? 'Obesidade (Grau II)' :
            'Obesidade Grave (Grau III)';

        const novoCalculo = { nome, altura, peso, valor_IMC: FinalFinal, classificacao: textoCla };
        listaIMC.push(novoCalculo);
        
        return response.status(200).json("Novo Calculo adicionado com sucesso!!");
    } else {
        return response.status(400).json("Parâmetros de entrada inválidos");
    }
}

const getCalculoPorIndice = (request, response) => {
    const index = parseInt(request.params.index);
    const calculo = listaIMC[index];
    if (calculo != null) {
        return response.status(200).json(calculo);
    } else {
        return response.status(404).json("Calculo não encontrado");
    }
}

const removeCalculoporIndice = (request, response) => {
    const index = parseInt(request.params.index);
    const calculo = listaIMC[index];
    if (calculo != null) {
        listaIMC.splice(index, 1);
        return response.status(200).json("Calculo removido com sucesso");
    } else {
        return response.status(404).json("Calculo não encontrado");
    }
}

app.route('/calculo')
    .get(getCalculos)
    .post(addCALCULO);

app.route('/calculo/:index')
    .get(getCalculoPorIndice)
    .delete(removeCalculoporIndice);

app.listen(3002, () => {
    console.log('Servidor rodando na porta 3002');
})