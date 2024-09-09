/*
 Função que recebe nome (nome e caminho) de um arquivo e retorna a leitura dos dados
existentes nele.
i. Exemplo: Recebe “dados.txt” e o retorno do método deve ser um conteúdo: {
"nome": "CSS3", "ano": 2020 }, { "nome": "HTML5", "ano": 2018 }, {
"nome": "JavaScript", "ano": 2015 }
 */
const fs = require('fs');

function exer01(arq, caminho){
    
arq = caminho;
let dadosArquivo = fs.readFileSync(arq).toString('UTF8');
dadosArquivo = JSON.parse(dadosArquivo);
return dadosArquivo;

}
let conteudo;

let final = exer01(conteudo, 'IntroJavaScript/Atividade01/nomesincrono.txt' )
console.log('Exercicio 01');
console.log(final)

/* 
Função que recebe um objeto JSON e o nome (nome e caminho) de um arquivo e
adiciona o objeto recebido na coleção de objetos JSON existentes no arquivo em
questão. 
*/

function exer02(Json, arq, caminho){

    arq = caminho;
    let dados = fs.readFileSync(arq).toString('UTF8');
    dados = JSON.parse(dados);

    
    const JsonFinal = [...Json, ...dados];

    console.log('Exercicio 02')
    console.log(JsonFinal)
}

//exer02('IntroJavaScript/Atividade01/nomesincrono.json', conteudo, 'IntroJavaScript/Atividade01/maisnomes.txt')

