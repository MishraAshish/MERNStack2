// If my key value (that i am reading from any variable) are same then instead of having both of them we can have only one

let cat = "Miaow";
let dog = "Woof";
let bird = "Chrip";
let name = "myName";

let anyObject = {
    cat : cat,
    dog : dog,
    bird: bird,
    name: name
}
console.log(`anyObject `,anyObject)

//short hand in ES

let shortHandObject = {
    cat,
    dog,
    bird,
    name
}

console.log(`shortHandObject `, shortHandObject) //use comma ,  to print object or JSON.stringify