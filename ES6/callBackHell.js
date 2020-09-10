//call-backs and callback-hell
//pros : no waiting, callbacks work smooth, event loop also helps, concurency achieved, 
//xhr (server call api) : gives callbacks -> success, error, complete

//cons : callback-hell - if unmodularized set of callbacks starts failing continuously, this situation is termed as callback hell
//1. Modularization of code (97-98% sucess but even 1% will need to pay a lot)
//2. Use Promises : upon callbacks -> success, error, complete we have three additional states controlled by us
//3. async and await : multi threaded feature

function login(home, passwordreset) {
    //sever call with user-name and pwd
    if (success) { //login
        home(normaluserdata, adminuserdata, usertype)
    } else if(passwordneedsupdate) {
        passwordreset(loginagain)
    } 
    else if(passwordneedsupdate) {
        passwordreset(loginagain)
    } else if(othercase) {
        relogin();
    }else {
        relogin();
    }
}


function home(normaluserdata, adminuserdata, usertype) {
    usertype ? normaluserdata(defaultLoad) : adminuserdata(defaultLoad)
    //server call depending upon user
}
