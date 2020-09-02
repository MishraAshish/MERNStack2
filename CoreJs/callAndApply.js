//call and apply : are the methods present in javascript functions to change context dynamically

let Object1 = {
    name : "Object1",
    type : "JSON"
}

let Object2 = {
    name : "Object2",
    type : "XML",
    getType: function () {
        return this.type;
    }
}


function printDetails(...params) { //ES6 : rest operator
    console.log("My Params "+ params)
    console.log("Type "+ this.type);
    console.log("Name Of Object "+ this.name)
}

//printDetails("Need A Dynamic Context");
printDetails.call(Object1, "From Mengjie","param2", "param3"); //changes the context from Global to Object one so type and name be from Object1

//apply is similar to call and excutes immediately like call but can take n-number of parameters in the form of array 
//so if event delegatinos are needed can be made
let params = ["From Dixon","param2", "param3"];
//console.log("...params spread ", ...params);
printDetails.apply(Object2, params); //invokes the function immediately