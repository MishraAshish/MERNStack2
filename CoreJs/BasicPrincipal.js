// case sensitive - var myName and var myame

// var myName = myname = 5;
// console.log(myName,myname);

// unTyped and dynamic typing

/*
var unTypedDynamicVal = 250000000000000000000000000;
console.log(unTypedDynamicVal);
console.log(typeof unTypedDynamicVal);

unTypedDynamicVal = 2.5;
console.log(unTypedDynamicVal);
console.log(typeof unTypedDynamicVal);

unTypedDynamicVal = "Dixon";
console.log(unTypedDynamicVal);
console.log(typeof unTypedDynamicVal);

unTypedDynamicVal = undefined;
console.log(unTypedDynamicVal);
console.log(typeof unTypedDynamicVal);

unTypedDynamicVal = null;
console.log(unTypedDynamicVal); //important interview
console.log(typeof unTypedDynamicVal); // null becomes object type

unTypedDynamicVal = {name: "Menglee", age : 21}; //javascript object
console.log(unTypedDynamicVal); 
console.log(typeof unTypedDynamicVal); 


unTypedDynamicVal = true;
console.log(unTypedDynamicVal); 
console.log(typeof unTypedDynamicVal); 
*/

// operators : and (&&) , or (||), not (!)

//comment ctrl + k + c , ctl + /
//uncomment ctrl + k + u, ctl + /

let test = true,
 test2 = false

if (test && test === true ) 
{
    console.log("Test Me " + test)
} 

if (test == 1 || !test)
{
    console.log("Test Me Second " + test)
}

if (test === 1 || !test)
{
    console.log("Test Me Second " + test)
}

if (test2 == 1 || !test)
{
    console.log("Test2 Me Second " + test)
}


//IIFE - Immediatly  Invocabale Function Expression

(function name() {
    console.log("Print Something")
})()//IIFE - Singleton Pattern or A singleton module

//symbol custom 

let MyType = Symbol("MyType");
let MyType2 = Symbol("MyType");

console.log(MyType2 == MyType)

console.log(MyType);
console.log(MyType2);

console.log(typeof MyType2);