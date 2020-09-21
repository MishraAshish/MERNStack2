import React from "react";
import Home from "./CommonComponent/HomeComponent";
import Header from "./CommonComponent/HeaderComponent";
import Footer from "./CommonComponent/FooterComponent";
import "../App.css";


export default class App extends React.Component{
    constructor(props, context){
        super();
        this.user = {
            userName : "Dixon",
            age:25,
            session : "MERNSTack"
        }
    }

    render(){
        return(
            <div>
                <Header>
                    <h1>This is h1 element from header</h1>    
                    <h1>This is second h1 element from header</h1>    
                </Header>                
                <Home />
                <Footer />
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