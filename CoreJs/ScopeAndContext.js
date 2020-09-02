// scope and context and execution context: 
myName = "Dixon"; //global scope variable
function printName(params) {
    console.log("Param "+ params);
    console.log("My Name "+ this.myName);
    console.log("Scope (this) "+ this)
}

printName("Zhongjie");//invocation : context for this invocation belongs to global or window (if in browser)


//context object (this) belongs to User
let user = {
    name : "Dixon", 
    age : 25,
    getUserName : function () {
        console.log(this.name);
        console.log("Context of getUserName ",this);
    }
}

user.getUserName();