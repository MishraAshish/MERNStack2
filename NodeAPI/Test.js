//using FS: File Systems Module 
let fs = require("fs");
let myData = require("./FileToRead");

console.log("Before Read Async")
fs.readFile(__dirname+"/FileToRead.js","UTF8", (err, data)=>{ //async mode of reading file data
    console.log("Err :", err)
    console.log("Data :", data)
})
console.log("After Read Async")



console.log("Before Read Sync")
myData = fs.readFileSync(__dirname+"/FileToRead.js","UTF8");
console.log("My Data ",myData)
console.log("After Read Sync")


//REPL : Read Evaluate Print and Loop
//CTRL+C twice

// for (let index = 0; index < 100000; index++) {
//     console.log("index " + index)
// }

//YARN
//NPM
//Both are cli's - command line interfaces to create our node application