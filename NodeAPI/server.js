console.log("This is going to be my server entry file to start express server");
let app = require("express"); //just name of module installed or core modules
//let router = require("./FileToRead");// complete path of the file/module that has been created
global.port = process.env.port || 9090;

let expressApp = app(); //initializing the express app

expressApp.get("/",(req, res)=>{
    res.send("We are sending it from express api")
});

expressApp.get("/hello",(req, res)=>{
    res.json({
        "route":"Hello",
        "data":"We are sending it from express api"
    })
});

expressApp.get("/html",(req, res)=>{
    res.sendfile(__dirname+"/servehtml.html")
});

expressApp.get("*",(req, res)=>{
    res.sendfile(__dirname+"/Test.js")
});

console.log("server is listening at port : "+global.port)
expressApp.listen(global.port);
