/*
    Arrow Functions

        - arrow functions, also commonly referred to as fat arrow functions, are basically a more concise way to write function expression - not a function declaration
            - function epxressions do NOT get hoisted, unlike function declarations
    
*/
/* 
// BLOCK BODY ARROW FUNCTION   
let hello = () => { // any parameters that your function may hold, will go inside of the set of parenthesis
    console.log('Hello world');
}

hello();

// regular function expression
let hello = function () {

}

// CONCISE BODY ARROW FUNCTION
let hello = () => console.log('Hello world');

hello();

/* 
    NOTE: concise body arrow functions return any value by default, whereas black body arrow functions do not - we need to implicitly specify what value we want to return.
    

// CONCISE BODY vs BLOCK BODY
*/
// concise body arrow function
let apples = number => console.log(`There are ${number} apples.`);
apples(10);
apples(5);
apples('five');
// when we have a single parameter, its not necesary to include
// parens  ARE needed when no parameters or multiple parameters are provided

// no parameters
let apples = () => console.log('');

//multiple parameters
let apples = (numberOne, numberTwo) => console.log('');

// --------------------------------

// block body arrow function

let apples = number =>  