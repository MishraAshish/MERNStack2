console.log("This is going to be my server entry file to start express server");
let app = require("express"); //just name of module installed or core modules
//let router = require("./FileToRead");// complete path of the file/module that has been created
global.port = process.env.port || 9090;

let expressApp = app(); //initializing the express app
let adminApp = app(); //sub application to serve requests coming to localhost:9090/admin - mounting

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

expressApp.get("/html",(req, res)=>{
    res.send("normal html")
})
expressApp.get("/html/:id",(req, res)=>{
    res.send("html by id")
})

//expressApp.get("/html/:id?/:name?",(req, res)=>{ //optional parameter

expressApp.get("/html/:id/:name",(req, res)=>{
    // console.log("req", req);
    console.log("query string data "+ JSON.stringify(req.query));
    console.log("params in api "+ JSON.stringify(req.params));
    console.log("data body in api using "+ JSON.stringify(req.body));
    
    
    
    res.sendfile(__dirname+"/servehtml.html")

    //res.json(req.query)
    //res.send("something sent")
    // res.json({"vincent json":req.query})
    //res.end();
});

expressApp.use("/admin",adminApp); // mounted a new application module

adminApp.get('/HelloWorldAdmin', function (req, res) {
  res.send("<h1>HelloWorldAdmin from admin</h1>")
})

adminApp.get('/', function (req, res) {
  res.send("<h1>I am from admin</h1>")
})


expressApp.get("*",(req, res)=>{
    res.send("Default! if nothing matched to the route")
    //res.sendfile(__dirname+"/Test.js")
});

console.log("server is listening at port : "+global.port)
expressApp.listen(global.port);



//1. create an api with mounted app (say adminuser)  -api - servejs
//2. send a static file with name staticjs which has consol.log("Your Name")                                                  
//3. use query string and params in the same api or in different
//4. query string should contain user details 