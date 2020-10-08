import React from "react";
//import Home from "./CommonComponent/HomeComponent";
import Header from "./CommonComponent/HeaderComponent";
//import About from "./CommonComponent/AboutComponent";
import Footer from "./CommonComponent/FooterComponent";
import NotFound from "./CommonComponent/NotFoundComponent";
//import User from "./ApplicationComponent/Container/User/UserContainer";
//import Product from "./ApplicationComponent/Container/Product/ProductContainer";
//import DisplayProduct from "./ApplicationComponent/Container/Product/DisplayProductContainer";
//import Cart from "./ApplicationComponent/Container/Cart/CartContainer";
//import Checkout from "./ApplicationComponent/Container/Checkout/CheckoutContainer";
//import Copoun from "./ApplicationComponent/Container/Coupon/CouponContainer";
//import CouponHooks from "./ApplicationComponent/Components/Coupon/CouponComponentHooks";
//import ProductHooks from "./ApplicationComponent/Components/Product/ProductComponentHooks";

import "../App.css";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";//hashrouter

import Loadable from "react-loadable"; //allows lazy loading
// functional component, used as placeholder
//when lazy loaded modules delayed
function Loading() {
    return (
        <div>
            Loading Project...
        </div>
    )
}

const Home = Loadable({
    loader: () => import("./CommonComponent/HomeComponent"),
    loading: Loading,
});


const About = Loadable({
    loader: () => import("./CommonComponent/AboutComponent"),
    loading: Loading,
});

const User = Loadable({
    loader: () => import("./ApplicationComponent/Container/User/UserContainer"),
    loading: Loading,
});

const DisplayProduct = Loadable({
    loader: () => import("./ApplicationComponent/Container/Product/DisplayProductContainer"),
    loading: Loading,
});

const Cart = Loadable({
    loader: () => import("./ApplicationComponent/Container/Cart/CartContainer"),
    loading: Loading,
});

const Checkout = Loadable({
    loader: () => import("./ApplicationComponent/Container/Checkout/CheckoutContainer"),
    loading: Loading,
});

const CouponHooks = Loadable({
    loader: () => import("./ApplicationComponent/Components/Coupon/CouponComponentHooks"),
    loading: Loading,
});

const ProductHooks = Loadable({
    loader: () => import("./ApplicationComponent/Components/Product/ProductComponentHooks"),
    loading: Loading,
});

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
                    <Route path="/product" exact component={ProductHooks} />
                    <Route path="/display" exact component={DisplayProduct} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/about" exact component={About} />
                    <Route path="/coupon" exact component={CouponHooks} />
                    <Route path="/checkout" exact component={Checkout} />
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