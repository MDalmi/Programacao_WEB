const fs = require('fs');

function exer01(arq){
    
    const dadosArquivo = fs.readFileSync(arq).toString('UTF8');
    const dadosArquivoParse = JSON.parse(dadosArquivo);
    console.log(dadosArquivoParse)
    return dadosArquivoParse;
    
}

function exer02(json, arq){

    const dados = fs.readFileSync(arq).toString('UTF8');
    const dadosParse = JSON.parse(dados);
    
    const JsonFinal = [...json, ...dadosParse];

    console.log(JsonFinal)
}

function exer03(atributo, arq){

    const JsonFind = arq.find((item) => item.nome === atributo)
    
    console.log(JsonFind)
}

/* Função que recebe um nome de um atributo e o nome (nome e caminho) de um arquivo
e remove o objeto cujo nome exista na coleção de objetos.
i. Exemplo: Recebe o valor "CSS3" e remove o objeto com esse valor */

function exer04(atributo, arq){

    const JsonFilter = arq.filter((dados) => dados.nome !== atributo)
    console.log(JsonFilter)

}

module.exports = {exer01, exer02, exer03, exer04}