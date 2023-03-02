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

function isLandscape(width, height) {
    return (width > height);
}// output: true