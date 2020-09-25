import React, { Component } from "react";
import ChildComponentHome from "./ChildComponentHome";

export default class Home extends Component{
//export default class Home extends React.PureComponent{
    //creation lifecycle method
    constructor(props, context){
        super(); //invoke super here so that base class keeps everything(context) in sync with other components
        this.state = {
            iterator : 25,
            name : "Random",
            age : 91,
            address : "Initial Address"
        }
        console.log("constructor");
        this.textInput = React.createRef(); //creating ref element : Needs to be avoided in actual use unless necessary

        //this.textInput.current.focus(); //trying to access the html element before render
    }

    componentDidMount(){
        console.log("componentDidMount");

        // setTimeout(() => {
        //     this.textInput.current.focus();
        //     this.textInput.current.value = "Setting Up Reference Value in component did mount";    
        // }, 3000);        
    }

    // destruction lifecycle method
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }


    //update lifecycle methods

    // getSnapshotBeforeUpdate(prevState, prevProps){
    //     //Runs before React applies the result of render to the document, 
    //     //and returns an object to be given to componentDidUpdate. 
    //     //Useful for saving things such as scroll position before render causes changes to it.

    //     console.log("getSnapshotBeforeUpdate ");
    //     console.log("prevState - ",prevState);
    //     console.log("prevProps - ",prevProps);
    //     return prevState;
    // }

    //this is implemented for all states and props while using purecomponent
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate -");
        console.log("nextProps -", nextProps );
        console.log("nextState -", nextState);
        // if (nextState.iterator !== this.state.iterator) {
        //     return true; //go and call the render
        // }else
        //     return false; // do not call the render
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate -");
        console.log("prevState -", prevState);
        console.log("prevProps -", prevProps);
    }
    //end of life cycle methods

    increment = () => {
        //server - 
        this.setState({
            //iterator : this.state.iterator + 1
            iterator : 27
        })

        //this.state.iterator = 27; // incorrect way of updating the state
        //console.log("this.state.iterator ",this.state.iterator)
        //this.forceUpdate(); //skip all lifecycle methods and call render : it should not be used unless the last choice
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

    onChangeAddress = (evt) =>{
        let target = evt.target;
        let valueTyped = target.value;
        console.log("value Typed ",valueTyped);
        
        this.setState({
            address : valueTyped
        })
    }

    getDataFromChild = (childDataValue) => {
        alert(childDataValue);

        this.setState({
            address : childDataValue
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
 
                <button onClick={()=> this.props.history.push("/about/2500")}>GoTo About Page</button>
                <hr/>
                {/*this is ref element to be accessed directly in code*/}
                <input type="text" ref={this.textInput} value="learning ref in react"/>  
                <ChildComponentHome address={this.state.address} parentClBk={this.getDataFromChild} />
                {this.state.address}
            </div>
        )
    }
}