/*
    BOOLEAN
        - true or false
*/

let lightIsOn = true;
console.log(lightIsOn);

let lightIsOff = false;
console.log(lightIsOff);

/* 
    NULL

        - null is an empty value. Empty container: nothing is in it, but something should be
*/

let empty = null;
console.log(empty);

/*
    UNDEFINED

        - no value has been assigned, and it does not act as an empty container
*/

/*
    NUMBERS
        
        -numbers or integers are literally just numbers. Numbers do not need need anything special when writtern.
*/

let degrees = 40;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;

let a = Number('123');
console.log(a);

/*
    STRINGS
    
        - strings are datatypes used to represent text and are either wrapped in a single or double quotes

*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = "1050" + '100'; //string concatenation

console.log(first); //1150
console.log(second); //1050100

console.log(typeof first); //number
console.log(typeof second); // string

/* 
    - when javascript sees that we're trying to add together a number and a string,
     instead of using the built in math functionality, 
     it will instead use concatenation to combine the values instead of trying to synthesize the values.

*/

/*
    OBJECT

        - objects allow us to store multiple values instead of a single value
        - objects are denoted by {}
*/

let frodo = {
    race: 'hobbit',
//  key
    rings: 1,
    cloak: true
}

console.log(frodo);

/*
    ARRAYS  
        -arrays are containers that hold a list of items
        -arrays are denoted by []
*/

let burritos = ['large', 4, true];
console.log(burritos);

let firstName = "Simon";
let lastName = ' deCapua';
let houseNumber = 42;
let street = ' Wallaby Way'
let city = ' Sydney'
let state = ' Austrailia'
let zipcode = 46032;

let address = [
    firstName, lastName, + ' ', houseNumber, street, city, state, + ' ', zipcode
];

console.log(address)