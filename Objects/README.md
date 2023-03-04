# Objetos 
São pares de chave e valor.
```javascript	
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); // Method
```

### Camel Notation
É a forma de escrever palavras compostas, onde a primeira letra de cada palavra é maiúscula, exceto a primeira palavra, que é toda minúscula.

### Pascal Notation
É a forma de escrever palavras compostas, onde a primeira letra de cada palavra é maiúscula, incluindo a primeira palavra.

## Factory Function

```javascript
function createCircle(radius) {
    return {
        radius, // radius: radius
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
```
## Constructor Function

```javascript
// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const anotherCircle = new Circle(1);
console.log(anotherCircle);
```

## Dynamic nature of objects
    
```javascript
const circle = {
    radius: 1,
};

circle.color = 'yellow';
circle.draw = function() {};

delete circle.color;
delete circle.draw;

console.log(circle);
```

## Functions are objects

```javascript
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const anotherCircle = new Circle(1);
```

## Value vs Reference Types
- Value Types: Number, String, Boolean, Symbol, undefined, null.
- Reference Types: Object, Function, Array.
> Primitives are copied by their value,
(Tipos primitivos são copiados por seu valor)


```javascript
let x = 10;
let y = x;

x = 20;
// output: y= 10, x= 20
```
> Objects are copied by their reference.(Objetos são copiados por sua referência)
```javascript
let x = { value: 10 };
let y = x;

x.value = 20;
// output: y= 20, x= 20
```

## Enumerating Properties of an Object

```javascript
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key);

for (let entry of Object.entries(circle))
    console.log(entry);

if ('radius' in circle)
    console.log('Circle has a radius.');
```

## Cloning an Object

```javascript
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = {};
//1
//for (let key in circle)
//   another[key] = circle[key];
//console.log(another);

//2
const another = Object.assign({
    color: 'yellow'
}, circle);

console.log(another);
//3
const another = { ...circle };
console.log(another);
```

## Garbage Collection
> O JavaScript tem um coletor de lixo embutido que remove as variáveis que não são mais referenciadas.


## Math Object
(Lista dos metodos)[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math]
```javascript
Math.random(); // numero aleatorio entre 0 e 1
Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // maior numero da lista 10
Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // menor numero da lista 1
```

## String
```javascript
// String primitive
const message = 'hi';

// String object
const another = new String('hi');

message.length; // 2
message[0]; // 'h'
message.includes('i'); // true
message.startsWith('h'); // true
message.endsWith('i'); // true
message.endsWith('I'); // false
message.indexOf('i'); // 1
message.replace('h', 'H'); // 'Hi'
message.toUpperCase(); // 'HI'
message.toLowerCase(); // 'hi'
message.trim(); // 'hi' // remove espaços em branco
message.trimLeft(); // 'hi' // remove espaços em branco a esquerda
message.split(''); // ['h', 'i']
```
> Escape Notation
```javascript
const message = 'This is my \'first\' message'; // This is my 'first' message

const message = 'This is my \n\'first\' message'; 
// This is my
// 'first' message
```

## Template Literals
```javascript
// String primitive
const message = 'This is my\n' +
'\'first\' message';

const another = 
`This is my
'first' message`;
const another = `hi ${2 + 3} ${message}`;

const another = `hi ${2 + 3} ${message.toUpperCase()}`;
```

## Date
```javascript
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);
```



