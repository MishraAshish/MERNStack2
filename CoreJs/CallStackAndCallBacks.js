//call stack example

//LIFO : Last In First Out
function foo(){
	throw new Error("OOPs!");
}

function bar(){
	//setTimeout(()=>console.log("out"),1000);
	
	foo();
}

function baz(){
	bar();
}

baz();


//Blowing up the stack : Very Limited Bandwidth It has
// function baz(){
// 	baz();
// }
// baz();


//blocking and non blocking code

//a blocking for a single threaded interpreter
let myGoogleMap = $.async("//googlemap.api.com"); // 5 sec
let myFbData = $.syncCall("//facebook.api.com"); // 10 sec
let myTwitter = $.syncCall("//twitter.tweets.api.com"); // 45 sec

console.log(myGoogleMap);
console.log(myFbData);
console.log(myTwitter);

//non - blocking code example
//async case with printMapData as a callback function
$.async("//googlemap.api.com", printMapData); //50 sec
//XHR : XML Http Request
function printMapData(data) {
    this.printMapDetails(data)
}

function printMapDetails(map) {
    console.log("Map Data ", map)
}


//callback is a function passed as a parameter in another function that keeps the scope of itself forever
function UserDetails(callBack, otherParams) {
    callBack ? callBack(otherParams) : "";
}

function print(params) {
    console.log("I am printing", params);
}

let user = {"Name": "Test", "Age":35};
UserDetails(print, user);
