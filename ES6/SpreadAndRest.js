//Spread : any array can be spread using three dots a[1,2,3,4] <=> ...a

const num = [1,6,9,11,19,21]

//loop and then - num[index]
//console.log(num[1],num[2])
console.log(...num);

function sum(a,b,c,d,e,f) {
    return a+b+c+d+e+f
}

//console.log(sum(num[0],))
//console.log(sum(...num))


//Rest Parameter : this allows us to create large number of parameters in any given function -> sum(a,b,c,d,e,f) <=> sum(...params)
//Always remember rest would be the last parameter sum(a, b, ...param)

function sumWithRest(...arraynums) {//rest to recieve in the function as parameter
    let sumTotal = 0;

    sumTotal = arraynums.reduce((pervVal, currVal)=>{
        return pervVal + currVal;
    },0)

    return sumTotal;
}
let newArr = [1,2,4,5,67,8,879,987,978,987,9009,09,10];
console.log(sumWithRest(...newArr)); //spread to pass into function 

//Reduce : This iterates over the collection, needs and initialization and always keeps the last updated value in parameter
// const num2 = [1,6,9,11,19,21]

// let reduceSum = num2.reduce((previousVal, currenValue)=>{
//     console.log("previousVal "+previousVal)
//     console.log("currenValue "+currenValue)
//     return previousVal+currenValue;
// },0)

// console.log("reduceSum "+ reduceSum)

let myVal = 25;

console.log(`This is template literal ${myVal}`)

