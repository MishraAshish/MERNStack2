import React from "react";

export default class Home extends React.Component{
    constructor(props, context){
        super()
    }

    render(){
        let compName = "Home Component";
        let showMyName = false;
        let name = "Vincent";
        return(
            <div>
                <h1>{compName}</h1>
                <hr/>
                {showMyName?<b>{name}</b>:""}
            </div>
        )
    }
}