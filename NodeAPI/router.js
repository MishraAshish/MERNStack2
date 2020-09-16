let express = require("express");
//let router = express.Router({caseSensitive:true});
let router = express.Router(),
studentModel = require("./DataModel/StudentDataModel");

//reading student information from query string and saving into database
router.get("/savestudent",(req, res) =>{
    console.log(req.query);    

    //use the model to save data to mongodb
    let studentModelToSave = new studentModel(req.query);

    studentModelToSave.save((err, data)=>{
        console.log("err - ", err);
        console.log("data - ", data);

        if (err != null) {
            res.send("Unable to save data! "+ err);
        } else {
            studentModel.find((err, dataAll)=>{
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