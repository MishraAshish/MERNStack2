import React, {useState} from "react";

let DisplayDetailsUsingHook = (props)=>{
    let product = props.product;

    //useState returns a stateful value and a function to update
    const [showDetails, showHideDetails] = useState(false); //initialization of state through react hook useState passing in parameter
   

    const showHideDetailsClick = ()=>{
        //alert("Show Hide Details Clicked!");
        showHideDetails(!showDetails)
    }

    return(
        <React.Fragment>
            <ul className={"product"}>
                <li onClick={showHideDetailsClick}>
                    {product.name}                        
                    {showDetails ?
                    <ul className={"productDetails"}>
                        <li>{product.price}</li>
                        <li>{product.camera}</li>
                        <li>{product.ram}</li>
                        <li>{product.display}</li>
                        <li>{product.color}</li>
                    </ul>
                    :
                    ""}
                </li>
            </ul>
        </React.Fragment>
    )
}

export default DisplayDetailsUsingHook;