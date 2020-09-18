import React from "react";
import Home from "./CommonComponent/HomeComponent";

export default class App extends React.Component{
    constructor(props, context){
        super(props, context);

    }

    render(){
        return(
            <div>
                <h1>I have loaded my react first page 1 2 3</h1> 
                
                <Home/>
            </div>
        )
    }

}

export function App2(props){
    return(
        <div>
            <h1>I have loaded my react second page</h1>
        </div>
    )
}