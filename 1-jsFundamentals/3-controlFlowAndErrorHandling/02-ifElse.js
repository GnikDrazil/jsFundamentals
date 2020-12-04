let temp = 75;

if(temp < 70) {
    console.log('Wear a jacket');   
} else {
    console.log('No jacket necessary');
}

let name = 'simn';
let nameHere = 'gus';

if(name == 'simon'){
    console.log('simon');
} else {
    console.log('Hello, what is your name?');
}
    
if(name == 'simon'){
    console.log('Hello, my name is' + ' ' + name)
}
if(name !== 'simon'){
    console.log('Hello, is your name' + ' ' + nameHere + '?');
}

let myName = 'sImOn';
console.log(myName.charAt(0));
console.log(myName[0]);

if(myName[0]==myName[0].toUpperCase()){
    console.log(myName);
}else{
    console.log("You fucked up")
}

if(myName[0]==myName[0].toUpperCase()){
    console.log((myName.charAt(0))+(myName.slice(1).toLowerCase()));
}else{
    console.log(myName.charAt(0).toUpperCase()+(myName.slice(1).toLowerCase()));
}

let address = "Caramel, IN"
console.log(address.substr(-3))

let age = 29
if(age >= 18 && age < 21){
    console.log('you can vote!');
}else if (age >= 21 && age < 25){
    console.log('you can drink!');  
}else if(age>=25){
    console.log('you can rent a car!')
}else{
    console.log('bruh you young')
}

    