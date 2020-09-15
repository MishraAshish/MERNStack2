let express = require("express");

//let router = express.Router({caseSensitive:true});
let router = express.Router();

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