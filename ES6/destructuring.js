// ES6 syntactic sugar to help create identifiers without copying object and multiple initializer

//Array Destructuring :

//Basic Assignment
let foo = ["one", "two", "three", 0004];

let [one, two, three, four] = foo;
//let one = foo[0]
console.log(one)
console.log(two)
console.log(three)
console.log(four)

//Default Values
let a,b;
[a = 1, b = 2] = [9] //assignment separate from declaration
console.log(a)
console.log(b)

//swapping of variables

let x= 5,y=6;
[x,y] = [y,x];

console.log(`x = ${x}`);
console.log(`y = ${y}`);

//Assigning Rest of an array to a variable using spread operator

let [c,...d] = [1,2,3,4,5] 
//let [...c,d] = [1,2,3,4,5]  //rest of the array will always be the last one

console.log(`c = ${c}`);
console.log(`d = ${d}`);
