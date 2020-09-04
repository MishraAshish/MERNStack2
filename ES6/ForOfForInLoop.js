//for of loop  : iterates over the property names, more recommended for array of numbers or srting instead of objects
 
let cars = ['BMW', 'Volvo', 'Mini']; 
cars[3] = "Toyota"

for (const name of cars) { 
    console.log(name);
}

var arr2 = [3, 5, 7];
//arr2.hello = 20;
arr2[3] = 20;
for (let value of arr2) {
    console.log(value); 
    // logs “3”, “5”, “7”
}
//it is does not log “3”, “5”, “7”,”hello”



//for in loop - iterates over the property value

//for in loop  
// let person = {fname:"John", lname:"Doe", age:25};  
 
// for (x in person) {     
//     console.log(x);
//     console.log(person[x]);
// } 
 
// console.log("Other Example") 

// let arr = [3,5,7];
// arr.foo = 10;
//let i = 0;
// for (const num in arr) {
//     if (arr.hasOwnProperty(num)) { //check to avoid breaks
//         const element = arr[num];
//         console.log(element);
//         // i++;
//         // console.log(i);
//     }
// }