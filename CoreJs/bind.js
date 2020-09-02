//bind : sets up the context dynamically but doesn't invokes the function immediatly
// invokes the funciton either on timer or on the basis of event

let UserDetails = {
    name : "Zhongjie",
    age : "19",

    getUserName: function () {
        //console.log("Context Outer", this); 

        setTimeout(function () {
            //console.log("Context Inner (Becomes Global) ", this); 
            console.log(this.name);
        }.bind(this), 1000);

        //using arrow function : gives a copy of bind
        setTimeout(() => {
            console.log(this.name);
        }, 2000);
        
    }
}

UserDetails.getUserName();