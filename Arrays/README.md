#  Arrays

## Adding new elements
```javascript
const numbers = [3, 4];
// End
numbers.push(5, 6); // [3, 4, 5, 6]
// Beginning
numbers.unshift(1, 2); // [1, 2, 3, 4, 5, 6]
// Middle
numbers.splice(2, 0, 'a', 'b'); // [1, 2, 'a', 'b', 3, 4, 5, 6]
```
## Finding elements
> Primitive
```javascript
const numbers = [1, 2, 3, 1, 4];
numbers.indexOf(1); // 0
numbers.lastIndexOf(1); // 3
numbers.indexOf(1) !== -1; // true
numbers.includes(1); // true
```
> Reference
```javascript
const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];
courses.includes({ id: 1, name: 'a' }); // false
const course = courses.find(function(course) {
  return course.name === 'a'; // retorna o primeiro elemento que satisfaz a condição 
});// { id: 1, name: 'a' }
const course = courses.findIndex(function(course) {
  return course.name === 'a';
});// 0
```

## Arrow Functions
```javascript
const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];
const course = courses.find(course => course.name === 'a');// { id: 1, name: 'a' }
```

## Removing elements
```javascript
const numbers = [1, 2, 3, 4];
// End // remove o ultimo element do array e o retorna.
const last = numbers.pop(); // 4
// Beginning // remove o primero element do array e o retorna.
const first = numbers.shift(); // 1
// Middle // remove 1 element a partir do indice 2
numbers.splice(2, 1); // [2, 3] 
```

## Emptying an array
```javascript
let numbers = [1, 2, 3, 4];
let another = numbers;
// Solution 1
numbers = []; // []
console.log(another); // [1, 2, 3, 4]
// Solution 2
numbers.length = 0; // []
console.log(another); // []
// Solution 3
numbers.splice(0, numbers.length); // []
console.log(another); // []
// Solution 4
while (numbers.length > 0)
  numbers.pop(); // []
console.log(another); // []
```

## Combining elements
Se for objeto e copia a referencia, se for primitivo e copia o valor.
```javascript
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); // [1, 2, 3, 4, 5, 6]
// Splitting elements
const slice = combined.slice(2, 4); // [3, 4]

// Spread operator
const combined = [...first, 'a', ...second, 'b']; // [1, 2, 3, 'a', 4, 5, 6, 'b']
```

## Iterating an array
```javascript
const numbers = [1, 2, 3];
// for of
for (let number of numbers)
  console.log(number); // 1 2 3
// forEach
numbers.forEach((number, index) => console.log(index, number)); // 0 1// 1 2 // 2 3
```
## Joining arrays
```javascript
const numbers = [1, 2, 3];
const joined = numbers.join(','); // '1,2,3'

const message = 'This is my first message';
const parts = message.split(' '); // ['This', 'is', 'my', 'first', 'message']
const combined = parts.join('-'); // 'This-is-my-first-message'
```

## Sorting arrays
```javascript
const numbers = [2, 3, 1];
numbers.sort(); // [1, 2, 3]
numbers.reverse(); // [3, 2, 1]

const courses = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'javascript' },
];

courses.sort(function(a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});// [{ id: 2, name: 'javascript' }, { id: 1, name: 'Node.js' }]
```
## Testing the elements of an array
```javascript
const numbers = [1, -1, 2, 3];

const allPositive = numbers.every(function(value) {
  return value >= 0;
});// false
const atLeastOnePositive = numbers.some(function(value) {
  return value >= 0;
});// true
```

## Filtering an array
```javascript
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);// [1, 2, 3]
```

## Mapping an array
```javascript
const numbers = [1, -1, 2, 3];

const items = numbers
  .filter(n => n >= 0)
  .map(n => ({ value: n }));// [{ value: 1 }, { value: 2 }, { value: 3 }]

const items = numbers
  .filter(n => n >= 0)
  .map(n => '<li>' + n + '</li>');// ['<li>1</li>', '<li>2</li>', '<li>3</li>']
const html = '<ul>' + items.join('') + '</ul>';// '<ul><li>1</li><li>2</li><li>3</li></ul>'

const items = numbers
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);// [2, 3]
```
## Reducing an array
```javascript
const numbers = [1, -1, 2, 3];

/* let sum = 0;
for (let n of numbers)
  sum += n;// 5 */

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);// 5

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);// 5
```