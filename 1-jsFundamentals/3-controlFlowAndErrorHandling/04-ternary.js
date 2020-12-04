let num = 6

// Instead of:

// Conditional with if & else statements
if (num > 0) {
    console.log('yes');
} else {
    console.log('no');
}

// Conditional with if & else if
if(num > 10) {
    console.log('a first statement');
} else if (num<0){
    console.log("another statement");
} else {
    console.log('yet another, man');
}

//same above but a ternary:
(num > 10) ? console.log('a first statement') : (num < 0) ? console.log("another statement") : console.log('yet another, man');
 
//Wewritten nicely
(num > 10) ? console.log('a first statement')
: (num<0) ? console.log("another statement")
: console.log('yet another, man');

//Write a ternary that does the same thing as the age challenge
/*
let age = 29
if(age >= 18 && age < 21){
    console.log('you can vote!');
}else if (age >= 21 && age < 25){
    console.log('you can drink!');  
}else if(age>=25){
    console.log('you can rent a car!')
}else{
    console.log('bruh you young')
*/
let age = 19;
(age >= 25) ? console.log('you can rent a car!')
: (age>= 21) ? console.log('You can drink!')
: (age>= 18) ? console.log('you can vote')
: console.log('you too young');
