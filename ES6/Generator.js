//generator function : continous operator
//yield : to produce or to provide something as profit or food
function getValue(p1,p2) {
    return p1+p2*p1;
}

function *arithmeticCalculator(num1, num2){
    let retVal = "Function Ends :  Done";
    yield getValue(num1,num2)
    yield console.log("Addition : " + (num1+num2)); //Add
    yield console.log("Subtraction : " + (num1-num2)); //Substract
    yield console.log("Multiply : " + (num1*num2)); // Multiply
    yield console.log("Division : " + (num1/num2)); //Divide
    return retVal;
}

var calcIterator = arithmeticCalculator(6,2);

console.log("Yeild From A Function : ", calcIterator.next())
calcIterator.next()
calcIterator.next()
calcIterator.next()
calcIterator.next()




// function* generator() {
//     yield {"Test":"Test"}
    
//     yield {"Test2":"Test2"}
    
//     var x = {"Test3":"Test3"}

//     return x; // end of function
// }
// const iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
