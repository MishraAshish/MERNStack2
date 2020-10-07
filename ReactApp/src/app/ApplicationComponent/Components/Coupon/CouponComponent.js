import React from 'react';

export class Coupon extends React.Component{
    //Creating the view with user interaction
    constructor(props, context){
        super();
        this.state = {
            coupon: props.coupon,
            userName: props.user.userName
        }
    }

    componentWillReceiveProps(nextProps, nextState){
        console.log("next props", nextProps);
        this.setState({
            coupon: nextProps.coupon
        })
    }

    addCoupon = ()=>{
        let coupon = Math.ceil(Math.random()*100000);
        // invoking addCoupon action to update the store and create a new coupon state using coupon Reducer
        this.props.addCoupon(coupon);
    }

    render(){
        return(
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Hi, {this.state.userName != "" ? this.state.userName: "Tom"}</b>
                        <p>Your Generated Coupon is : </p>
                        <b>{this.state.coupon}</b>
                    </div>
                    <input type="button" className={"btn btn-primary col-md-2"} value={"Generate"} onClick={this.addCoupon}/>
                    <input type="button" className={"btn btn-primary col-md-2"} value={"Go To Checkout"} onClick={()=>this.props.history.push("/checkout")}/>
                </div>
            </section>
        )
    }

}