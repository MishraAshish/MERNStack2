import * as ActionTypes from "./ActionTypes"; //alias import

export const addUserToStore = (user) => ({        
    type: ActionTypes.AddUserToStore,
    payload: {user}
})

//ajax: asynchronous javascript and xml
export const signInUpUser = (userObject) => {
    console.log('entering signin signup user');

    // thunk, returns function as an action
    return function(dispatch, getState) {
        // here we go with ajax call : to save data to the server or fetch is from the server
        // thunk shall call
        console.log("called by thunk");
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/api/signInUpUser",//uri
            {
                method: 'POST', //rest method type to save the data
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObject)
            })//req.body.userName,req.body.password...
        .then (response => response.json()) //response from the server/ api
        .then (userresp => {
            console.log("response ", userresp);
            let action = addUserToStore(userresp);
            dispatch(action); // it will keep the current context to update the user object and takes it to the reducer
            
            //dispatch(loading(false));
            //dispatch(getUserCart(userresp._id));
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })
    }
}
