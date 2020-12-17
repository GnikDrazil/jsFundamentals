/*
    -Loops offer us a quick and easy way to do something repeatedly, or loop over something

    -There are many different kinds of Loops, but they all do roughly the same thing:
        -The loop will repeat until a specified condition evaLuates to false

        -for Loop
        -do while Loop
        -while Loop
        -for in
        -for of

        -for Loop takes in 3 parameters
            1. initial expression
            2. condition
            3. increment expression
*/

for (let i = 0; i < 0; i++) { // i += i + 1
    console.log(i);
} 

//Challenge: using a for loop, count to 20, by 2

for (let i = 0; i <= 20; i += 2){
    console.log(i);
}

//Challenge: using a for Loop, count from 10 to 0, going down by 1

for (let i = 10; i >= 0; i -= 1){
    console.log(i)
}

//Challenge: using a for loop, count from 0, going down by 2, to -24
for (let i = 0; i >= -24; i -= 2){
    console.log(i)
}

//Challenge: using a for Loop, go through a name display each letter individually
let name = 'Spongebob';
//console.log(name.length)
let n = name.length;
//console.log(name.charAt(0))

for (let count = 0; count <= n; count +=1 ){
    console.log(name.charAt(count))
}

//for (let count = 0; count < name.length; count++){
  //  console.log(name.charAt());
    //console.log(name[]);
//}

//1275
// Challegne: write a foor Loop that adds up all numbers from 1=50 (should equal 1275)
let sum = 0;

for (let i = 1; i <= 50; i ++){
    sum += i;
    console.log(sum)
}


for (let i = 0; i <= 10; i += 1){
    console.log(i);
    num = i % 2

    if (num == 0){
        console.log("the number is even");
    }
    else{
        console.log("the number is odd");
    }}