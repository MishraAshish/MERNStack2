import React from "react";

export default class App extends React.Component{
    constructor(props, context){
        super(props, context);
    }

    render(){
        return(
            <div>
                <h1>I have loaded my react first page</h1>
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