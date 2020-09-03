//var - functional scope, it gets hoisted

//let and const are : lexical scope
{
    var myVar = "myvar";
    //var myVar = "myvar"; //redeclaration is possible in var

    let myLet = "myLet";
    //let myLet = "myLet"; //redeclaration is not possible in let and const
    myLet = "yourLet"; // reassignment is possible

    const myConst = "myConst"; // no redeaclaration and reassignment, infact we need to intialize as soon as we declare
}
//console.log(myLet);

//special case of const : 

const specialConst = {name : "Dixon", place: "synergisticit" };

//specialConst = {}; // not possible

specialConst.name = "Vincent";