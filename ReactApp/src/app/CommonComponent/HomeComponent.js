import React, { Component } from "react";
import Header from "../CommonComponent/HeaderComponent";


export default class Home extends Component{
    constructor(props, context){
        super()
    }

    render(){
        let compName = "Home Component";
        let showMyName = false;

        let props = 99;

        return( //Javascript as xml : JSX > code doesnt needs specific html templates we can use JS Expression
            <div>
                <h1>{compName}</h1>
                <hr/>
                {props}
                <hr/>
                
                {showMyName?<b>{name}</b>:""}
            </div>
        )
    }
}