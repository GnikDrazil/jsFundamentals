function hello(name){
    console.log(`hello ${name}`);
}

hello('simon');

function zach(ticket){
    console.log(`I exhanged my ticket for a ${ticket}`)
}

zach('cheese pizza');

function counter(){
    console.log(i);
}

for (let i = 0; i <=10; i++){
    console.log(i);
}

function fullName(fName, lName){
    let myFullName = `${fName}${lName}`;
    console.log (`Hello, my name is ${myFullName}`);
}

//         1          2
fullName('Simon', 'DeCapua');

function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo('yellow'));

