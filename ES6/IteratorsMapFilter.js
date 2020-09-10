//Filter, Map, Reduce and Some
//Are advanced iterators, always give us a shallow copy of data present and 
//maintain the data immutability whatever change we do to get new collection it will not update in parent collection

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"}
];

// 1. List Objects Saved by - Iron Man - (use Filter)
let savedByIronMan = personsList.filter(person => person.savedby === "IronMan")
console.log(savedByIronMan);

//console.log("personsList ",personsList);

// 2. List Of Names saved by Captain America - (use map)
let savedByCA = personsList.map(person => person.savedby === "CaptainAmerica" ? person.name : "").filter(p=>p!=="")
console.log(savedByCA);


// 3. Is there someone saved by hulk - (use some as circuit switch)
let anySavedByhulk = personsList.some(person => person.savedby === "Hulk")
console.log(anySavedByhulk);

// 4. How many people saved by each of super heroes - (use reduce)

let peopleSavedByEach = personsList.reduce((preViousVal, currentVal) => {
    // console.log("preViousVal ",preViousVal)
    // console.log("currentVal ",currentVal)

    preViousVal[currentVal.savedby] = preViousVal[currentVal.savedby] ? preViousVal[currentVal.savedby]+1 : 1;

    return preViousVal;
}, {})

console.log(peopleSavedByEach)
//console.log("personsList ", personsList);

//0,1,1,2,3,5,8 : Fibnacci

//Practice Questions : 
let persons = [
    {id : 1, name : "Allen", tags : "javascript"},
    {id : 2, name : "Ram", tags : "javascript"},
    {id : 3, name : "Vennis", tags : "java"},
    {id : 4, name : "Scott", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. Name all having tag javascript
//2. List all objcts having tag java
//3. Check for any "c-sharp" tag present
//4. Count the number of people having tag javascript and java