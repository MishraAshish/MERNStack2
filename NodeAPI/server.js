console.log("This is going to be my server entry file to start express server");
let app = require("express"); //just name of module installed or core modules
//let router = require("./FileToRead");// complete path of the file/module that has been created
global.port = process.env.port || 9090;

let expressApp = app(); //initializing the express app
let adminApp = app(); //sub application to serve requests coming to localhost:9090/admin

expressApp.use('/static', app.static('Public')); // serve static files like images css using static middle ware

expressApp.get("/",(req, res)=>{
    res.send("We are sending it from express api")
});

expressApp.get("/hello",(req, res)=>{
    res.json({
        "route":"Hello",
        "data":"We are sending it from express api"
    })
});

expressApp.get("/html/:id",(req, res)=>{
    // console.log("req", req);
    console.log("query string data "+ JSON.stringify(req.query));
    console.log("params in api "+ JSON.stringify(req.params));
    console.log("data body in api using "+ JSON.stringify(req.body));
    res.sendfile(__dirname+"/servehtml.html")
});

expressApp.use("/admin",adminApp); // mounted a new application module

adminApp.get('/HelloWorldAdmin', function (req, res) {
  res.send("<h1>HelloWorldAdmin from admin</h1>")
})

adminApp.get('/', function (req, res) {
  res.send("<h1>I am from admin</h1>")
})


// expressApp.get("*",(req, res)=>{
//     res.send("Default! if nothing matched to the route")
//     //res.sendfile(__dirname+"/Test.js")
// });

console.log("server is listening at port : "+global.port)
expressApp.listen(global.port);
