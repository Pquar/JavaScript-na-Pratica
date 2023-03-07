//Calculadora
const calculadoraVersion = "1.0.0";

function soma(a,b){
    return a + b;
}
function mult(a,b){
    return a * b;
}

function sub(a,b){
    return a - b;
}

function div(a,b){
    return a / b;
}
// Exportando funções
//module.exports =  soma;
module.exports =  {soma, mult, sub, div, calculadoraVersion};