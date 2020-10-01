import {connect} from "react-redux";
import DisplayProductComponent from "../../Components/Product/DisplayProductComponent";
import {fetchProducts} from "../../../State/Actions"

//to subscribe we need to have - mapstatetoprops
let mapStateToProps = (state)=>{ //we get the whole store object
    return {
        products : state.product.products       
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        fetchProducts:() =>{
            dispatch(fetchProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayProductComponent);