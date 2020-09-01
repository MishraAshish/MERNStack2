//object - {}
let user = {
    name : "Dixon", 
    age : 25,
    getUserName : function () {
        console.log(this.name);
    }
}

user.getUserName();
user.mobile = "0070070070";

//one way is - we should avoid using this as it keeps prototype copied to the parent
//let employee = new user() 

// another recommended way of creating object using Object.create
let student = Object.create(user);
student.name = "Student Dixon";
student.address = "NY, USA";
student.getAddress = function () {
    console.log(this.address);
    console.log(this)
}
student.getMobile = function () {
    console.log(this.mobile);
}
student.getUserName = function () {
    console.log(this.name +" "+this.age);
}
student.getAddress();
student.getUserName();
student.getMobile();

// so to break the prototype chain and we should pass null in constructor
let studentNull = Object.create(null);


//Data Copy : Object.assign to copy the data from one object to another
let Object1 = {a : "1", b : "2"}

let Object2 = {b : "2.2", c : "3"}

Object.assign(Object2, Object1);
console.log(Object2);

let Object3 = {};
Object.assign(Object3, Object2, Object1);

console.log(Object3);