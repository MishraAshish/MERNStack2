import React from "react";

let ChildComponentHome = (props) =>{
    return(
        <React.Fragment>
            <b>Child Component</b>
            <input type="button" className="button" onClick={() => props.parentClBk("New Address from Child Component")} value="Send Data To Parent"/>
        </React.Fragment>
    )
}

export default ChildComponentHome;