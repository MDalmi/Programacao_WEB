const fs = require('fs');

let arquivo = 'nomesincrono.txt';
const livros = [ {nome : "CSS3", ano : 2020}, {nome : "HTML", ano : 2021},
    {nome : "React", ano : 2024}, {nome : "Nome", ano : 2019} ];

    // JSON.stringify converte o objeto java script para um json em formato texto
fs.writeFileSync(arquivo,JSON.stringify(livros));

let dadosArquivo = fs.readFileSync(arquivo).toString('UTF8');

console.log(dadosArquivo);

// convertendo a leitura para um objeto java script
dadosArquivo = JSON.parse(dadosArquivo);

console.log(dadosArquivo);