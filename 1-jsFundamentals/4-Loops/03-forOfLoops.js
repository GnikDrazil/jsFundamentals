/*
    FOR OF LOOPS

        - where for in Loops look at enumerable, or countable properties 0 for of Loops look at iterable properties
            - iterable properties are properties that we can parse through with numbers, or indices

        - for in loops: better suited for objects
        - for of loops: better suited for arrays
*/

/*
objects have keys, keys go IN locks
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (let item of student){
    console.log(item);
}

let catArray = ['tabby', 'british shorthair', 'burmesse', 'maine coon', 'rag doll'];

for (let cat of catArray){
    console.log(cat);
}

for (let i = 0; i < catArray.length; i++){

}
