/*
// objects hold what are called key/value pairs
let student = {
// key    value
    name: 'Peter',
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

for (let item in student){
    console.log(item); // gives the key
    console.log(student[item]); // gives the value of the key
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']; 
// arrays have list of items, not keys

for (let cat in catArray){
   // console.log(cat); //shows item in array (or the index)
    console.log(catArray[cat]) // gives the value of the index
}

//let name = 'Spongebob';
//console.log(name.length)
let n = name.length;
//console.log(name.charAt(0))

for (let count = 0; count <= n; count +=1 ){
    //console.log(name.charAt(count))
    (count = 0) ? console.log(name.charAt(count).toUpperCase())
    : console.log(name.charAt(count).toLowerCase())
}
*/
let name = "sPongeBob";
let capName;

for (let index in name) {
    //console.Log(index); // gives indexes of namve variable - 0, 1, 2, etc
    if(index == 0){
        capName = name[index].toUpperCase();// square brackets give value in a specific index
    } else {
        capName += name[index].toLowerCase();
    }   
}

console.log(capName);