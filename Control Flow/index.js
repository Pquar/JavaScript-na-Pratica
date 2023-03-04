// maxTwoNumber
let number = max(10, 20);
console.log(number);

function max(a, b) {
    return a > b ? a : b;
}// output: 20

function maxM(a, b) {
    if (a > b) return a;
    return b;
}// output: 20

console.log(isLandscape(800, 600));
function isLandscape(width, height) {
    return (width > height);
}// output: true

const output = fizzBuzz(15);
console.log(output);
//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by 3 and 5 => FizzBuzz
//Not Divisible by 3 or 5 => input
//Not a number => 'Not a number'
function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    return input;
}// output: FizzBuzz

// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(130);
/* function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint)
        console.log('Ok');
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log('License suspended');
        else
            console.log('Points', points);
    }
} */// output: License suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint){
        console.log('Ok');
        return 'Ok';
    }
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log('License suspended');
        else
            console.log('Points', points);
}

// Even and Odd Numbers //Ímpar ou Par
showNumbers(10);
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}// output: 0 EVEN 1 ODD 2 EVEN 3 ODD 4 EVEN 5 ODD 6 EVEN 7 ODD 8 EVEN 9 ODD 10 EVEN

// Count Truthy
const array = [0, null, undefined, '', 2, 3];
console.log(countTruthy(array));
function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}// output: 2

// String Properties
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
showProperties(movie);
function showProperties(obj) {
    for (let key in obj){
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
        }
}// output: title a director b

// Sum of Multiples of 3 and 5
console.log(sum(10));

function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}// output: 33

// Grade
const marks = [80, 80, 50];
console.log(calculateGrade(marks));
// 1-59: F, 
// 60-69: D,
// 70-79: C,
// 80-89: B,
// 90-100: A

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}// output: C

console.log(calculateAverage(marks));
function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}// output: 70

// Stars
showStars(5);
function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}// output: * ** *** **** *****

showPrimes(20);
// Prime Numbers (only divisible by 1 and itself)// Números Primos (só divisíveis por 1 e por si mesmo)
//Composite Numbers (divisible by more than 1 number)// Números Compostos (divisíveis por mais de 1 número)
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}
function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;
}// output: 2 3 5 7 11 13 17 19