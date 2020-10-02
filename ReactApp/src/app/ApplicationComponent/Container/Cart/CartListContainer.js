import {connect} from "react-redux";
import CartListComponent from "../../Components/Cart/CartListComponent";

const mapStateToProps = (state) => {
    return {
         items: state.cart
    }
}

export default connect(mapStateToProps,null)(CartListComponent);
//subscribing to update state and get the published values from store