import React, { Component } from "react";
import Header from "../CommonComponent/HeaderComponent";


export default class Home extends Component{
    constructor(props, context){
        super();
        this.state = {
            iterator : 25,
            name : "Random",
            age : 91
        }
    }

    increment = () => {
        this.setState({
            iterator : this.state.iterator + 1
        })
    }

    changeName = () => {
        this.setState({
            name : this.state.name + " " + this.state.iterator
        })
    }

    onChangeText = (evt) =>{
        let target = evt.target;
        let valueTyped = target.value;
        console.log("value Typed ",valueTyped);
        
        this.setState({
            name : valueTyped,
            age : 51
        })
    } 

    render(){
        let compName = "Home Component";
        console.log("render method called")
        return( //Javascript as xml : JSX > code doesnt needs specific html templates we can use JS Expression
            <div>
                <h1>{compName}</h1>
                
                {this.state.iterator}
                <hr/>
                <input type="button" className="button" onClick={this.increment} value="Increment" />
                <hr/>
                {this.state.name}
                
                <hr/>
                <input type="text" className="text" onChange={this.onChangeText} value={this.state.name} />
                <input type="button" className="button" onClick={this.changeName} value="Change Name" />
                {this.state.iterator >= 30 ?<b>{this.state.age}</b> : "We do not show hide in react but we re-render"}
            </div>
        )
    }
}