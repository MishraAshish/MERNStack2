import React from "react";
import Home from "./CommonComponent/HomeComponent";
import Header from "./CommonComponent/HeaderComponent";
import About from "./CommonComponent/AboutComponent";
import Footer from "./CommonComponent/FooterComponent";
import NotFound from "./CommonComponent/NotFoundComponent";
import User from "./ApplicationComponent/Container/User/UserContainer";
import Product from "./ApplicationComponent/Container/Product/ProductContainer";
import DisplayProduct from "./ApplicationComponent/Container/Product/DisplayProductContainer";
import Cart from "./ApplicationComponent/Container/Cart/CartContainer";
import "../App.css";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";//hashrouter

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
            <Router>
                <Header/>  
                <Switch>
                    <Route path="/home" exact component={Home} />
                    <Route path="/user" exact component={User} />
                    <Route path="/product" exact component={Product} />
                    <Route path="/display" exact component={DisplayProduct} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/about" exact component={About} />
                    <Route path="/about/:id" component={About} />
                    <Route path="/" exact component={Home} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <Footer />
            </Router>
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