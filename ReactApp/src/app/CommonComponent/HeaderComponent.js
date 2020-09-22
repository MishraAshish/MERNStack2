"use strict";
import React from "react";
import {PropTypes} from "prop-types";
// import {NavLink} from "react-router-dom";
// import {connect} from "react-redux";

let Header = (props) => {
    let userName = props.user ? props.user.userName : "";//reading it from user reducer/ store directly
    let age = props.user ? props.user.age : "";
    //props.user = {}; //this is not allowed as props are immutable
    //read user from props his name and then create two set of links
    return(
        <div className="col-md-12">
            <div>
                Hi <b>{userName +" , "+age}</b> Welcome to SynergisticIT Shopping Cart
                <hr/>
                {props.children[0]}
                {props.children[1]}
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

export default Header;

