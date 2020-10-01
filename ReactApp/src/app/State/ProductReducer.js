import * as ActionTypes from "./ActionTypes";

//returns product reducer
const INITIAL_STATE = {
    defaultProduct:{
        name : "",
        price : 0,
        camera : "",
        ram : "",
        display : "",
        color : ""
    },
    products:[]
}


export default function ProductReducer(state=INITIAL_STATE,action)
{
    console.log("Product Reducer :",state);
    switch (action.type) {

        case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
            return {...state, products:action.payload};

        default:
            return state;
    }
}
