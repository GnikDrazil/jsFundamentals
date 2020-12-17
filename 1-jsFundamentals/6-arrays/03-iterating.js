/*let food = [ 'Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hot Dog'];

// regular for loop
for (let i = 0; i < food.length; i++) {
    console.log(food[i])
}

// forEach() method
food.forEach(function(foodItem){
    console.log(foodItem)
})

// forEach() method - far arrow function
food.forEach(foodItem => console.log(foodItem));

// ------------------
*/
/*
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hot Dog'];

for (let i = 0; i < food.length; i++){
    listMyFood(food[i]);
}

function listMyFood(foodItem){
    console.log(foodItem)    
}
food.forEach(foodItem, 0)
*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hot Dog'];

//concise body arrouw function
food.forEach((foodItem, index) => console.log(foodItem, index));

// block body arrow function
food.forEach((foodItem, index) => {
    console.log(foodItem, index);
})

// function declaration
food.forEach(function(foodItem, index){
    console.log(foodItem, index);
})

let movies = ['Phantom Menance', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];

movies.forEach((moviesItem, index) => console.log(moviesItem, index));