# JavaScript-na-Pratica

Extensão para o Visual Studio Code
Live server

## JavaScript 
E uma linguagem de programação dinâmica.


# Nome de Variaveis
```javascript
// Comentário de uma linha
 console.log('Hello World');
 
let name = 'MmM';
console.log(name); // MmM
```
- Nao podemos criar variáveis com palavras reservadas
- Variáveis precisam ter nomes significativos
- Não pode começar o nome de uma variável com um número
- Não podem conter espaços ou traços(-)
- Utilizamos camelCase (primeira palavra minuscula e a segunda palavra com a primeira letra maiuscula)
```javascript
let firstName = 'firstName'; // Camel Case

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
```
> não podemos redeclarar variáveis com const
```javascript
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);//iria exibir um erro
```

# Tipos primitivos
String, Number, Boolean, undefined, null
```javascript
let name = 'MmM'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined; 
let selectedColor = null; // Usos - Limpar o valor de uma variável
```
>typeof é uma palavra reservada que retorna o tipo da variável
```javascript
let name = 'MmM';
typeof name; // "string"
```
# Reference Types 
Object, Array, Function
```javascript
// Object Literal
let person = {
    name: 'MmM',
    age: 30
};

// Dot Notation
person.name = 'John';

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';
console.log(person);
```
# Arrays
```javascript
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors.length);
typeof selectedColors; // "object"
```
# Functions
```javascript
// function declaration
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('YourName', 'YourLastName'); // Hello YourName YourLastName

function square(number) {
    return number * number;
}

console.log(square(2)); // 4
```
# Operadores
- Aritméticos/Arithmetic (+, -, *, /, %, **)
- Atribuição/Assignment (=, +=, -=, *=, /=, %=, **=)
- Comparação/Comparison (==, !=, ===, !==, >, <, >=, <=)
- Lógicos/Logical (&&, ||, !)
- Bitwise (AND, OR, XOR, NOT, LEFT SHIFT, RIGHT SHIFT)

### Aritméticos
```javascript
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.3333333333333335
console.log(x % y); // 1
console.log(x ** y); // 1000

// Incremento (x++)
console.log(x++); // 10
console.log(x); // 11
console.log(++x); // 12
// Decremento (x--)
console.log(x--); // 12
console.log(x); // 11
console.log(--x); // 10

// Atribuição
console.log(x = y); // 3
```
### Atribuição
```javascript
let x = 10;
let y = 10;

x = x + 5; // 15
y += 5; // 15

x = x * 3; // 45
y *= 3; // 45

[=, +=, -=, *=, /=, %=, **=]...
```
### Comparação
```javascript
let x = 1;

//Relacionais/Relational
console.log(x > 0); // true
console.log(x >= 1); // true
console.log(x < 1); // false
console.log(x <= 1); // true

//Igualdade/Equality
console.log(x === 1); // true
console.log(x !== 1) // false

// Strict Equality (Type + Value)
console.log(1 === 1); // true
console.log('1' === 1); // false

// Lose Equality (Value)
console.log(1 == 1); // true
```
### Ternary Operator
```javascript
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type); // gold
```
### Logical Operators
```javascript
// Logical AND (&&)
// Returna TRUE se os dois operandos forem TRUE
console.log(true && true); // true
console.log(true && false); // false

// Logical OR (||)
// Retorna TRUE se um dos operandos for TRUE
console.log(true || false); // true
console.log(false || false); // false

// NOT (!)
// Inverte o valor de um operando
console.log(!true); // false

```	

### logical with non-boolean
```javascript
// Falsy (false)
// undefined, null, 0, false, '', NaN

// Qualquer coisa que nao for Falsy -> Truthy (true)
console.log(false || 1 || 2); // 1
// 1 é o primeiro valor Truthy, short-circuiting
//exemplo de cor de fundo de uma pagina
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); // red, pois userColor é Truthy, se nao tivesse userColor, seria blue pois defaultColor esta definido.
```

### Bitwise
```javascript
// 0 = 00000000
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// 4 = 00000100

console.log(1 | 2); // bitwise OR (3)
console.log(1 & 2); // bitwise AND (0)


const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); // 6

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message); // yes
```

### Operador precedência
# Control Flow
### if else
```javascript
let hour = 10;

if (hour >= 6 && hour < 12)
    console.log('Good morning!');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon!');
else
    console.log('Good evening!');
``` 
### Switch Case
```javascript
let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}
```
### For
```javascript
for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}
```
### while
```javascript
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}
```
### do while
```javascript
let i = 0;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);
```

### for in
```javascript
const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person)
    console.log(key, person[key]); // name Mosh, age 30

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]); // 0 red, 1 green, 2 blue
```

### for of
```javascript
const colors = ['red', 'green', 'blue'];

for (let color of colors)
    console.log(color); // red, green, blue
```

### break and continue
```javascript
for (let i = 0; i <= 10; i++) {
    // if (i === 5) break; // 1 2 3 4
    if (i % 2 === 0) continue; // 1 3 5 7 9
    console.log(i);
}
```