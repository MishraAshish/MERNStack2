//Hoisting : Compilation step of Javacript it hoists all vars and functions at the top so that we can access
//the same before declaration/initialization
//var is given value - undefined
//function is given value as function definition

console.log(myThought); // undefined

console.log(printName()); // prints the function definition


var myThought = "TestMy Mern Skills"; // initialization of myThought

function printName() { //defnition of the function
    console.log("This is my thought - " + myThought);
    return 1;
}

console.log(printName()); // 

console.log("Identifier " + myThought)