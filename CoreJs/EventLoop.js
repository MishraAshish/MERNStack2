// Javascript : 
// single-threaded, event-driven, interpreted
// non-blocking


console.log("Hi");

setTimeout(() => {
    console.log("In setTimeOut CallBack executed")
    setTimeout(() => {
        console.log("0 - sec")
    }, 0);
}, 1000);

setTimeout(() => {
    console.log("In setTimeOut CallBack executed")
}, 1001);

setTimeout(() => {
    console.log("In setTimeOut CallBack executed")
}, 1000);

console.log("Now i can understand");