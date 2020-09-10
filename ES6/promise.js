// A Promise is a proxy for a value not necessarily known when the promise is created. 
// It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
// This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, 
// the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//Note: A promise is said to be settled if it is either fulfilled or rejected, but not pending.
//You will also hear the term resolved used with promises — this means that the promise is settled or “locked in” 
//to match the state of another promise

let promiseObj = new Promise((resolve, reject) => {  

                        setTimeout(function() {   //async callback 
                            //resolve('Resolved Promise');  
                            reject({
                                "status code":400,
                                "Error":"Not able to give due to lockdown"
                            });
                        }, 1000);

                        setTimeout(() => {   //async callback               
                            resolve({
                                "status code":200,
                                "success":"Will Give You Laptop"
                            });
                        }, 2000);
                });

    promiseObj.then((value) => {  
            console.log(value);  // expected output: "Resolved"
        }).catch(function(value) {  
            console.log(value);  // expected output: "Rejected"
    });
         
    console.log(promiseObj);// expected output: [object Promise]

//Create A promise object and : resolve this in 3 secs with a msg : smartly resolved, 
//and reject the same : couldn't resolved due to lockdown