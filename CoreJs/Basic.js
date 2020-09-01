//closure - two set of functions where in child function returns the private scope variables of parent function

function parent(name) {
    var userId = "Menglee"; //public
    var password = "Dixon"; //private
    
    function child(age) {
        return {
            "Name":name,
            "UserId":userId,
            "Age":age
        }
    }

    return child;
}

let parentObj = parent("Varun");

let childObj = parentObj("16"); //child function will keep holding the scope of parent variables and parameters passed

console.log(childObj);





















// var myName = "test";

// function name(params) {
//     //accessible - myName
//     var myPrivateName = "test private";
    
//     //not accessible - myPrivateName2
//     function name2(params) {
//         //accessible - myName
//         var myPrivateName2 = "test private 1";
//         //accessible - myPrivateName
//     }
// }

//not accessible - myPrivateName