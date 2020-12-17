let food = [ 'Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hot Dog'

];
// array.push() - allows us to push one or more elements to the END of the array
food.push('Pizza');
console.log('push:', food);

// array.splice() - the splice method allows us to add or remove elements
food.splice(1,1, 'Bananas');
console.log('splice:', food);
//, 0, 'Sweet Potato Pie'
food.splice(2, 0, 'Sweet Potato Pie');
console.log('splice 2:', food);

// array.pop() - the pop method removes the last item from an array
food.pop();
console.log('pop:', food);

// array.shift() - the shift method removes the first item from an array
food.shift();
console.log('shift:', food);

// array. unshift() - the unshift method adds one or more elements to the beginning of an array
food.unshift('Popcorn', 'Steak');
console.log('unshift:', food);
