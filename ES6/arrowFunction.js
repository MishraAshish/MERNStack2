//An arrow function expression has a shorter syntax than a function expression 
//does not have its own this, arguments, super or new.target.
//These function expressions are best suited for non-method functions, and they cannot be used as constructors.
//1. Shorter Syntax : () => {}

let print = () => {console.log("Arrow Function")} 
let print1 = () => console.log("Arrow Function1")

print();
print1();

//2. No scope of its own, "this" is not owned by arrow function, instead it copies the context of its parent
// eventually it resolves the scope issue
this.name = "Global Dixon";

let user = {
    name : "Dixon", 
    age : 25,
    getUserName : function() {
        console.log(this.name); //this is reserved key word for scope and context (object)

        // setTimeout(function() {
            
        //     console.log(this.name);

        // }.bind(this), 2000);

        setTimeout(() => {            
            console.log(this.name);
            console.log(this.age);
        }, 2000);
    }
}

user.getUserName();