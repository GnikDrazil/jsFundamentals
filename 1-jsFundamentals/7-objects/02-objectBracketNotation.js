/*
    OBJECT BRACKET NOTATION
    
        - bracket notation can also be used with objects to pull out values, just like we would with an array
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

let zucchini = garden['vegetable']; // we can acess keys by specifying the name of the object that we want to reference,
console.log(zucchini);

let baking = {};
baking['zucchini'] = 'better make some bread!'
console.log(baking);

//------------------

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

let baking = {};
baking['zucchini'] = 'better make some bread!';
console.log(baking);
//          baking['zucchini']
console.log(baking[garden['vegetable']]); //

let testObj = {
    "Spaces Here": true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj["Spaces Here"])