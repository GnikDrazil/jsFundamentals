// CALLING FUNCTIONS

function hello() {
    console.log('hi!');
}

//helo; //nothing hpapens
// hello(); //hi!
//console.log(hello); //[Function: hello]
console.log(hello());

function count(){

    for (let num = 0; num <= 10; num += 1){
        console.log(num)
    }
}

count()
let arr = ["This", "is", "really", "cool"]
function list(){

for (let item of arr){
    console.log(item);
}
}

list()