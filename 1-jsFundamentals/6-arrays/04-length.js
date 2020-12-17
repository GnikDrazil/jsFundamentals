// just like with strings, we can attatch the lenght property to an array, and it will give us the length of the array. The length property doesn't start counting at 0 like when working with indices, it just simply counts how many items are present.

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let arr = [1, 2, 3, 4, 5];
if (arr instanceof Array){
    console.log(revArr);
    revArr.forEach(number => console.log(number));
} else{
    console.log('Not an array');
}

console.log(arr instanceof Array);
console.log(arr);
[arr[0], arr[4]] = [arr[4], arr[0]];
[arr[1], arr[3]] = [arr[3], arr[1]];
console.log(arr); 