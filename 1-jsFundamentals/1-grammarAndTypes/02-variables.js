/*
    - variables are named conatiners for storing data values or data types
    - we name variables so that we can refer to the data they're holding at a Later point in time
*/

    let number = 2;

/*    1    2    3  4
    1- keyword
    2- variable name
    3- assignment operator
    4- value of the variable

*/

let numberOne = 5;
let numberTwo = 3;

console.log(numberOne + numberTwo);

/*
    var, let, const
    - var: 'old' keyword
    - let: 'new' keyword
    - const: denotes a variable that cannot be changed

*/

/*
    declaration vs initialization

        declarations are LEFT SIDE of the assignemnt operator

        initialization is the right side of the assignment operator, or the value we're assigning a variable
*/

let x;
console.log('Declaration:',x);

x = 10;
console.log('Initialization:',x);

x = 20;
console.log('Reinitialization:', x);
