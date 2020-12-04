/*
    PROPERTIES AND METHODS

        - In most cases, properties are qualities related to the data we're working with, and methods are actions we can perform on the data we're working with. Using a method causes something to happen to the data, while using a property reutrns information about the data.

*/

// STRING PROPERTIES

//Length
let myName = 'Simon';
console.log(myName.length); 

// STRING METHODS

let myDogsName = 'cloie';
console.log(myDogsName.toUpperCase()); // change a string to uppercase

let home = 'My home is Indianapolis';
console.log(home.includes('Indianapolis'));

//challenge: use google, find MDN documentation for string methods. Research the string '.split()' method, and use and implement it to get an array back froma string. 

let sent = 'This sentence will be split into individual parts';

console.log(sent.split('')); 
console.log(sent.split(' '));
console.log(sent.split(','));