"use strict";
import React from "react";
import {PropTypes} from "prop-types";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

let Header = (props) => {
    let userName = props.user && props.user.userName ? props.user.userName : "";//reading it from user reducer/ store directly
    //props.user = {}; //this is not allowed as props are immutable
    //read user from props his name and then create two set of links
    return(
        <div className="col-md-12">
            <div>
                Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart
                {/* {props.children[0]}
                {props.children[1]} */}
                <hr/>
                <React.Fragment>
                    <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
                    <NavLink to="/user" className="button" activeClassName="success" >User </NavLink> 
                    <NavLink to="/product" className="button" activeClassName="success" >Product </NavLink> 
                    <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
                </React.Fragment>
                <hr/>
            </div>
         </div>
    )
}

Header.propTypes = {
    user : PropTypes.object.isRequired
}

// Header.defaultProps = {
//     user: {
//         userName : "Default Name",
//         age : 22
//     }
// }

let mapStateToProps = (state)=>{
    return {
        user : state.user.user
    }
}

export default connect(mapStateToProps, null)(Header);

