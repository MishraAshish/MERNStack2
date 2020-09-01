// scope and context and execution context: 
myName = "Dixon"
function printName(params) {
    console.log("Param "+ params);
    console.log("My Name "+ this.myName);
    console.log("Scope (this) "+ this)
}

printName("Zhongjie");//invocation