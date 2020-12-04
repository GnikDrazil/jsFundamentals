/*
SCOPE

- Scope is how the computer keepts tack of all variables
Global Scope vs. Local Scope
Golbal Scope - 
Local Scope - created by curly braces

let x = 12;
function scope(){
    let x = 33;
    console.log(x);
}

scope();// calling the function by its name, followed by pares, "invokes" the function
console.log(x);

let y =12;
function newScope(){
    y = 33;
    y = 44;
    y = 55;
    console.log(y);
}

newScope();
console.log(y);


    VAR vs LET

        - while var and let seem to operate the same - they have a lot of the same functionality (both allow us to declare and initialize variable) - they also behave differently 
*/

var testOne = 'this is a test';
let testTwo = 'this is another test';

console.log(testOne,testTwo);

var x = 12;

function varTest(){
    var x = 33;
    if (1==1){
        var x = 45;
        console.log(x);
    }
    console.log(x);
}
varTest();
console.log(x);

// LET TEST
let y =12;

function letTest(){
    let y = 33;
    if (1==1){
        let y = 45;
        console.log(y);
    }
    console.log(y);
}
letTest();
console.log(y);