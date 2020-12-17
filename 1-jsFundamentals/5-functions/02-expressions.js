
// declaration
function decTest(){
    console.log('it worked, and I was hoisted.')
}

// expression
expTest(); // this will break

let expTest = function() {
    console.log('didnt work, and I was not hoisted.')
}

expTest();