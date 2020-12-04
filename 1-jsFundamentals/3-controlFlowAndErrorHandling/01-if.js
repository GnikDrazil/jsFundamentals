/*

-falsy values: a value that is false in a boolean

    - there are six cases:
    1. false
    2. 0 
    3. "", '', ``
    4. null
    5. undefined
    6. NaN (not a number)

- This means when Javascript is expecting a boolean and is given one of these values, it will always evaluate to "falsy"

*/

let isOn = true;

// Read as, if the variable "isOn" is EQUAL to true, run the body
if (isOn == true) {
    console.log('The light is on!')
}

if (isOn){
    console.log('The light is still on');
}

let isOff = false;
if (isOff == false){
    console.log("The light is off now");
}

let weather = 65;

if(weather<70){
    console.log('Wear a jacket')
}