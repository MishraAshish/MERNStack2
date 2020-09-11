//remains single thread even in concurrency model but helped by event loop

//main thread - console.log(1)
//main thread console.log(1)
//separate thread   //- server call of 10 seconds //once done assign output to //main thread
//main thread console.log(1)
//main thread console.log(1)


function resolveAfter5Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 5000);
    });
}

console.log('asyn starts');

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter5Seconds();
    console.log(result);
    // expected output: 'resolved'
}

asyncCall();

console.log('after async invocation');


// resolveAfter5Seconds().then((data)=>{
//     console.log(data)
// })
