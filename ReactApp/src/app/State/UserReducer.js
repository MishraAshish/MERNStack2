import * as ActionTypes from "./ActionTypes"; //alias import

//we have two things in every reducer(state)
//initialize the state
//update the state per dispatched action (generates new state)

const INITIAL_STATE ={
    user: {
        userName: "",
        password: "",
        street: "",
        mobile: "",
        _id:""
    },
    loading: false
}

//whenever called reducer will always return a state
export default function userReducer(state=INITIAL_STATE, action) {
    console.log("User Reducer :",state);
    switch (action.type) {
        
        case ActionTypes.AddUserToStore:
            console.log("User PayLoad", action.payload.user);
            //...state = {user:user, loading:false}
            //{loading:false, user:newuser (action.payload.user)}
            // out of all the states present in  ...state we pluck out user and create and add a new user object
            //eventually return a complete new state, following the concept of data immutability

            return {...state, user: action.payload.user} //a complete new state

        default:
            return state
    }

}