// antes da ES6
function ola(){

    console.log('Criando uma funcao antes da ES6')

}

ola();

// criando uma função arrow function

const ola2 = () => {
    console.log('Criando uma funcao com arrow functions')
}

ola2();

function somar(n1, n2){
    return n1 + n2;
}

console.log(somar(2,3))

const somar2 = (n1,n2) => 
{
    return n1+ n2;
}

console.log(somar2(6,4));