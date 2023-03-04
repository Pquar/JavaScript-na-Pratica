## Function Declaration
```javascript
function walk() {
    console.log('walk');
}
```
## Function Expression
#### Anonymous Function Expression

```javascript
let run = function() {
    console.log('run');
};
run();
```
#### Named Function Expression
```javascript
let move = function walk() {
    console.log('move');
}
move();
```
> let runTwo = move;   
runTwo()
#### Hoisting
> Ambos so pode ser chamada depois da declaração


```javascript
walk();
let move = function walk() {
    console.log('move');
} // error
```

## Arguments
```javascript
function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 10)); // 25
```

## The Rest Operator
> Rest operator = ...operator

Não pode haver parâmetros depois do rest operator.

```javascript
function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum(0.1, 20, 30)); // 45
```

## Default Parameters
Caso não seja passado o valor do parâmetro, ele assume um valor padrão.
```javascript
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
console.log(interest(10000)); // 1750
console.log(interest(10000, undefined, 5)); // 1750
```

## Getters and Setters
> Getters = Acessar propriedades
> Setters = Mudar (mutar) elas
```javascript
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'John Smith';
console.log(person);
```

## Try and Catch
```javascript
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
try {
    person.fullName = '';
}
catch (e) {
    alert(e);
}
console.log(person);
```

## Local vs. Global Scope
> Não deve-se usar variáveis globais, pois pode causar conflitos com outras variáveis, mesmo usando const ela pode ser alterada dentro de uma função.
```javascript
const color = 'red';

function start() {
    const message = 'hi';
    const color = 'blue';
    console.log(color);
    for (let i = 0; i < 5; i++)
        console.log(i);
    console.log(i);
}
function stop() {
    const message = 'bye';
}
start();
```

## Let vs. Var
> var = escopo global ou função

> let = escopo global, função ou bloco

var pode ser atrelada a objetos globais, como window.
```javascript
function start() {
    for (var i = 0; i < 5; i++)
        if (true) {
            var color = 'red';
        }
    console.log(color); // red
}
start();
```

## This
> Referência ao objeto atual
> Se não for definido, ele aponta para o objeto global (window)
- method -> object
- function -> global (window, global)
```javascript
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};
video.showTags();
```

## Changing this
```javascript
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        //const self = this;
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
};

video.showTags();
```
*call, apply, bind*
```javascript
function playVideo(a, b) {
    console.log(this);
}
playVideo.call({ name: 'Mosh' }, 1, 2); //{name: "Mosh"}
playVideo.apply({ name: 'Mosh' }, [1, 2]); //{name: "Mosh"}
playVideo.bind({ name: 'Mosh' })(); //{name: "Mosh"}
```
arrow function herda o this do escopo pai
```javascript
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};
video.showTags();
```