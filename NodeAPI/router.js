let express = require("express");
//let router = express.Router({caseSensitive:true});
let router = express.Router(),
studentModel = require("./DataModel/StudentDataModel");

//1. create an api with the name /saveuserdetails, in this from the querystring pass name, address, age and qualification
//2. Create a data model with name dummy user which has all the mapping of querystring data, name is mandatory field, version needed
//3. using mongoose save the data into mongodb collectionand also fetch all the saved users to validation

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