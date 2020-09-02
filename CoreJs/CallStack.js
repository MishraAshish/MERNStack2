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
