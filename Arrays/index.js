// 1- Array from Range
const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

// 2- Includes
const numbersTwo = [1, 2, 3, 4];

console.log(includes(numbersTwo, 1));

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

// 3- Except
const numbersThree = [1, 2, 3, 4];

const output = except(numbersThree, [1, 2]);

console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element)) output.push(element);
    return output;
    }

// 4- Move
const numbersFour = [1, 2, 3, 4];

const outputFour = move(numbersFour, 0, 1);

console.log(outputFour);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }
    const outputFour = [...array];
    const element = outputFour.splice(index, 1)[0];
    outputFour.splice(position, 0, element);
    return outputFour;
}

// 5- Count Occurrences
const numbersFive = [1, 2, 3, 4, 1];

const count = countOccurrences(numbersFive, 1);

console.log(count);

function countOccurrences(array, searchElement) {
    // let count = 0;
    // for (let element of array)
    //     if (element === searchElement)
    //         count++;
    // return count;

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

// 6- Get Max
const numbersSix = [1, 2, 3, 4];

const max = getMax(numbersSix);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    // let max = array[0];
    // for (let i = 1; i < array.length; i++)
    //     if (array[i] > max)
    //         max = array[i];
    // return max;

    return array.reduce((a, b) => (a > b) ? a : b);
}

// 7- Movies
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles);

