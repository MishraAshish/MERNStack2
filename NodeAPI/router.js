let express = require("express");
//let router = express.Router({caseSensitive:true});
let router = express.Router(),
studentModel = require("./DataModel/StudentDataModel"),
ProductModel = require("./DataModel/ProductDataModel"),
UserModel = require("./DataModel/UserDataModel");

//creating product api's to aad and get products
router.post("/api/saveProduct",(req, res)=>{
    
    let productObj = new ProductModel(req.body);

    productObj.save((err, data, next)=>{        
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(data);
    });
});

router.get("/api/getProducts",(req, res)=>{
    ProductModel.find((err, data, next) =>{
        console.log("Data :", err);

        err ? 
        res.send({"error": err}) 
        :
        res.send(data)
    })
});


//user creation with sign in and sign up functionality
router.post("/api/signInUpUser",(req, res)=>{ //first post call to save the user
    console.log(req.body); // is passed in ajax call of signInUpUser from react LoginUser click action

    UserModel.findOne({userName: req.body.userName}, (err, userObject) => { //error first callback
        if (err != null) { //if error occurs at the time of user object search
            console.log("Error :", err);
            res.send({"Err":err});
        } else if (userObject) { //user already exists - sign in
            res.json(userObject);
        } else{            
            let signObjForMongo = new UserModel(req.body); //auto assigns value to
            
            // let signObjForMongo = new signInModel({
            //     userName: req.body.userName,
            //     password: req.body.password,
            //     street: req.body.street,
            //     mobile : req.body.mobile
            //   });

            signObjForMongo.save((err, data, next)=>{//data : the same user object that saved and contains mongodb id
                if (err) {
                    res.send("Error Occurred While Siging User "+ err);
                } else{     
                    res.json(data);
                }
            });
        }
    })

})

//reading student information from query string and saving into database
router.get("/savestudent",(req, res) =>{
    console.log(req.query);    

    //use the model to save data to mongodb
    let studentModelToSave = new studentModel(req.query); //specific document that needs to be saved

    studentModelToSave.save((err, data)=>{ //error first callback, so we recieve error whenever we do any operation
        console.log("err - ", err);
        console.log("data - ", data);

        if (err != null) {
            res.send("Unable to save data! "+ err);
        } else {
            studentModel.find((err, dataAll)=>{ //look into all the documents present in collection
                res.send(dataAll);
            }) 
        }
    })
})

router.get("/HTML",(req, res)=>{
    res.json({
        "route":"Hello",
        "data":"We are sending it from router"
    })
});

router.get("/",(req, res)=>{
    res.send("We are sending it router")
});

router.get("*",(req, res)=>{
    res.send("Default")
});

module.exports = router;