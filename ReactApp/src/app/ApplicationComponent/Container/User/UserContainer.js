//this is the file to club togather react and redux both with the help of react-redux connect method

import {connect} from "react-redux";
import UserComponent from "../../Components/User/UserComponent";
import {signInUpUser} from "../../../State/Actions"

//to subscribe we need to have - mapstatetoprops
let mapStateToProps = (state)=>{ //we get the whole store object
    return {
        user : state.user.user        
    }
}


//to publish we need to have - mapdispatchtoprops
let mapDispatchToProps = (dispatch)=>{
    return {
        loginUser: (userObject)=>{
            dispatch(signInUpUser(userObject));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);