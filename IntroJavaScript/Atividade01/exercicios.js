const funcoes = require('./FuncoesExercicios.js');
const jsondata = require('./nomesincrono.json')

console.log("\n")
console.log('Exercicio 01');
funcoes.exer01('./maisnomes.txt' )

console.log("\n")
console.log('Exercicio 02');
funcoes.exer02(jsondata, './maisnomes.txt')

console.log("\n") 
console.log('Exercicio 03');
funcoes.exer03("CSS3", jsondata)

console.log("\n") 
console.log('Exercicio 04');
funcoes.exer04("CSS3", jsondata)

