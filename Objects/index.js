console.log("Exercise 1- Address Object") 
// street
// city
// zipCode
// showAddress(address)

let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c',
};
function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
    }

showAddress(address)

//Exercise 2
console.log("Exercise 2- Factory and Constructor Functions")
// Factory Function
let addressFactory = createAddress('a', 'b', 'c');
console.log(addressFactory);

function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    };
}
// Constructor Function
let addressConstructor = new createAddress('a', 'b', 'c');
console.log(addressConstructor);

function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

// Exercise 3
console.log("Exercise 3- Object Equality")
let address1 = new createAddress('a', 'b', 'c');
let address2 = new createAddress('a', 'b', 'c');

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2){
    return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode;
}

function areSame(address1, address2){
    return address1 === address2;
}

// Exercise 4
console.log("Exercise 4- Blog Post Object")
// title, body, author, views, comments (author, body), isLive

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
    {author: 'a', body: 'b'},
    {author: 'a', body: 'b'}
    ],
    isLive: true
};

console.log(post);

// Exercise 5
console.log("Exercise 5- Constructor Function")

let newPost = new Post('a', 'b', 'c');
console.log(post);

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

// Exercise 6
console.log("Exercise 6- Price Range Object")

let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
];

let restaurants = [
    {averagePerPerson: 5}
]