"use-strict";

import React,{useState} from "react";
import {useDispatch} from "react-redux";
import DisplayProductHooks from "./DisplayProductComponentHooks";
import {saveProduct} from "../../../State/Actions"

//functional component
let ProductHooks = (props) => {
    const [name, setName] = useState("Initial Name");
    const [price, setPrice] = useState(0);
    const [camera, setCamera] = useState("Initial Camera");
    const [color, setColor] = useState("Initial Color");
    const [display, setDisplay] = useState("Initial Display");
    const [ram, setRam] = useState("Initial RAM");

    //reading from user reducer using react-redux hook - useSelector
    //below code allows us the access of any store's state here is 
    // here we are not needing useSelector, and it doesn't make sense to set product attributes directly
    // let product = useSelector((state) => state.product.defaultProduct); //inside implements mapStateToProps for one state    
    
    
    let dispatchProduct = useDispatch(); // using this hook to dispatch the addCouponToStore action : publisher
    
    let saveProductClick = ()=>{           
        alert(`You've saved a product with these details: Name = ${name}, Price = $${price}, Camera = ${camera}, Color = ${color},  Display = ${display}, RAM = ${ram}`)
        
        // product.name = name
        // product.price = price
        // product.camera = camera
        // product.color = color
        // product.display = display
        // product.ram = ram

        const productObj = {
            name, 
            price,
            camera,
            color, 
            display,
            ram
        }

        dispatchProduct(saveProduct(productObj));
    }
    
    let captureValueFromTextBoxes = (evt)=>{
        // debugger;
        let target = evt.target;
        let classlist = target.classList.toString();

        if(classlist.indexOf("pname")>=0){
            setName(target.value)
            // this.setState({
            //     name: target.value
            // })
        }else if(classlist.indexOf("price")>=0){
            setPrice(target.value)
            // this.setState({
            //     price: parseInt(target.value)
            // })
        }else if(classlist.indexOf("camera")>=0){
            setCamera(target.value)
            // this.setState({
            //     camera: target.value
            // })
        }else if(classlist.indexOf("color")>=0){
            setColor(target.value)
            // this.setState({
            //     color: target.value
            // })
        }
        else if(classlist.indexOf("display")>=0){
            setDisplay(target.value)
            // this.setState({
            //     display: target.value
            // })
        }
        else{
            setRam(target.value)
            // this.setState({
            //     ram: target.value
            // })    
        }
    }

    return(
        <section className={"componentClass"}>
            <div className="form col-md-8">
                <div className="col-md-12">
                    <b>Product Name</b>
                    {/* product.name attribute initialized in the reducer */}                                       
                    <input type="text" className="form-control col-md-6 pname" value={name} 
                        placeholder="Product Name"
                        onChange={captureValueFromTextBoxes} />
                </div>
                
                <div className="col-md-12">
                    <b>Price </b>
                    <input type="number" className="form-control col-md-6 price" value={price} 
                        placeholder="Product Price"
                        onChange={captureValueFromTextBoxes} />
                </div>
                
                <div className="col-md-12">
                    <b>Camera </b>
                <input type="text" className="form-control col-md-6 camera" value={camera} 
                        placeholder="Camera"
                        onChange={captureValueFromTextBoxes} />
                </div>
                
                <div className="col-md-12">
                    <b>RAM </b>
                <input type="text" className="form-control col-md-6 ram" value={ram} 
                        placeholder="ram"
                        onChange={captureValueFromTextBoxes} />
                </div>

                <div className="col-md-12">
                    <b>Display </b>
                <input type="text" className="form-control col-md-6 display" value={display} 
                        placeholder="Display"
                        onChange={captureValueFromTextBoxes} />
                </div>

                <div className="col-md-12">
                    <b>Color </b>
                <input type="text" className="form-control col-md-6 color" value={color} 
                        placeholder="Color"
                        onChange={captureValueFromTextBoxes} />
                </div>
                
                
                <input type="button" className={"btn btn-primary col-md-3"} value={"Save Product"} onClick={saveProductClick}/>
            </div>
            
            <br/>
            <DisplayProductHooks/>
        </section>
    )
}

export default ProductHooks;