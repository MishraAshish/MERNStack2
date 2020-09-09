//////////////////
let myMap = new Map(); 
let keyString = 'a string', keyObj = {}, keyFunc = function() {}; 

// setting the values 
myMap.set(keyString, "value associated with 'a string'"); 
myMap.set(keyObj, 'value associated with keyObj'); 
myMap.set(keyFunc, 'value associated with keyFunc'); 

console.log(myMap.size); // 3 // getting the values myMap.get(keyString); // "value associated with 'a string'" 
console.log(myMap.get(keyObj)); // "value associated with keyObj" myMap.get(keyFunc); 
// "value associated with keyFunc"

console.log(myMap.get(keyFunc)); 
console.log(myMap.entries()); 
