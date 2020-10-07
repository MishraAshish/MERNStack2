//subsciption to redux, to use store reducers as props, create dispatchers
import {connect} from 'react-redux';
import {Coupon} from '../../Components/Coupon/CouponComponent';//F12
import {addCoupon} from "../../../State/Actions";

//subcribing and reading state(data) as props from store(reducers)
const mapStateToProps = (state) => {
    return{
        coupon : state.coupon.coupon,
        user : state.user.user
    }
}
//publishing and wrinting state(data) to store(reducers) through props
const mapDispatchToProps = (dispatch) => {
    return {
        addCoupon:(coupon) => {
            dispatch(addCoupon(coupon));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coupon);