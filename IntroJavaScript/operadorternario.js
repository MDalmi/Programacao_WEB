// let resultado = (condicao) ? retorno se verdadeiro : retorno se false

let resultado = "";

let preco = 50;

if(preco < 40)
{

    resultado = "livro barato";

} else {
    resultado = "livro caro";
}

console.log(resultado);

resultado = preco < 40 ? "Barato" : "Caro";

console.log(resultado);