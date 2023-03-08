# Javascript ES6-ES7-ES8

## ES6
*const*
Constante so pode ser declarada uma vez, e não pode ser alterada.
```javascript
const nome = 'João';

nome = 'Pedro'; // Error variável não pode ser alterada
```

*let*
Variável que pode ser alterada.
```javascript
let nome = 'João';

nome = 'Pedro'; // Ok
```

### LET x VAR
Difrença entre let e var é que o let tem escopo de bloco, e o var não.(as duas podem ser alteradas GLOBALMENTE ou LOCALMENTE)
```javascript
//Variavel com escopo global
// pode ser acessada em qualquer lugar do código
var nome1 = 'João'; 
const nome2 = 'João';


//Variavel com escopo LOCAL
// esta variavel só pode ser acessada dentro da função
function teste(){
    var nome3 = 'Pedro';
    const nome4 = 'Pedro';
}

//Variavel com escopo de bloco
if(true){
    let nomeLet = 'Pedro';
    console.log(nomeLet); // Pedro
}

console.log(nomeLet); // Error
//Variavel com escopo de bloco
if(true){
    var nomeVar = 'Pedro';
    console.log(nomeVar); // Pedro
}

console.log(nomeVar); // Pedro
```

## PARAMETROS ADICIONAIS
Parametros adicionais são parametros que podem ser passados para uma função, e caso não sejam passados, a função irá usar um valor padrão.
```javascript
 function soma(a = 1, b = 10){
     return a + b;
 }

console.log(); // 11

 function sub(a, b = 10){
     return a - b;
 }

console.log(sub(10)); // 0

function div(a, b, inverter = false){
    if(inverter){
        return b / a;
    }
    return a / b;
}
console.log(div(10, 2)); // 5
console.log(div(10, 2, true)); // 0.2
```
> OBS: Parametros adicionais devem ser declarados por ultimo.

# Json's Encurtados
```javascript
    nome: 'João';
    idade: 20;
    endereco: 'Rua 1';
//Json Encurtado
var obj = {
    nome,
    idade,
    endereco
}
```

## Operador Spread 
```javascript
var empresa = {
    nome: 'Empresa',
    endereco: 'Rua 1',
    site: 'www.empresa.com.br',
    email: 'empresa@gmail.com'
}
var user = {
    nome: 'João',
    idade: 20,
    endereco: 'Rua 1'
    ...empresa // copia todos os atributos de empresa para user
}
```
## Desestruturação de objetos
```javascript
var empresa = {
    nome: 'Empresa',
    endereco: 'Rua 1',
    site: 'www.empresa.com.br',
    email: 'empresa@gmail.com'
}


var nome = empresa.nome;
var endereco = empresa.endereco;
var site = empresa.site;
var email = empresa.email;
//Equivalente a
var {nome, endereco, site, email} = empresa; //Desestruturação de objetos
```

## Arrow Functions
Forma mais simples de declarar uma função.
```javascript
var soma = function(a, b){
    return a + b;
}
function soma2(a, b){
    return a + b;
}
//Equivalente a
var somaA1 = (a, b) => a + b; // se tiver apenas uma linha de código, não precisa de chaves // return é implicito
var somaA2 = (a, b) => {
    return a + b;
}
var somaA3 = a => a + 10; // se tiver apenas um parametro, não precisa de parenteses // return é implicito
```

## Find
```javascript
var Joao = {nome: 'João', idade: 20, salario: 1000}
var Pedro = {nome: 'Pedro', idade: 30, salario: 2000}
var Maria = {nome: 'Maria', idade: 25, salario: 3000}

var usuarios = [Joao, Pedro, Maria];

// retorna o primeiro elemento que satisfaz a condição
var usuarip = usuarios.find(user => user.nome === 'João'); // {nome: 'João', idade: 20} 

var salarioMaior = usuarios.find(user => user.salario > 1001 && user.salario < 5000); // {nome: 'Pedro', idade: 30, salario: 2000}
```
## Template Literals
```javascript
var nome = 'João';
var sobre = 'Trabalha na empresa';

var frase = `
Ola meu nome e ${nome} 
----------------------
& ${sobre}`;
```