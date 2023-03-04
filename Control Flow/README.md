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