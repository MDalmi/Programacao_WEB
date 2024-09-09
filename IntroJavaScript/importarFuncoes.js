const funcoes = require('./usandoFuncoes');

funcoes.ola();
funcoes.saida("Importei a funcao");

// usando desestruturação

const { ola, saida } = require('./usandoFuncoes')

ola();


saida("LEgal")