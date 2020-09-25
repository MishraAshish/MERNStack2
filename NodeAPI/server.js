console.log("This is going to be my server entry file to start express server");
let app = require("express"); //just name of module installed or core modules
let router = require("./router");// complete path of the file/module that has been created
global.port = process.env.port || 9090;
const bodyParser = require("body-parser");
const cors = require("cors");

let expressApp = app(); //initializing the express app
expressApp.use(cors());
expressApp.use(bodyParser.urlencoded({extended:false}));
expressApp.use('/static', app.static('Public')); // serve static files like images css using static middle ware

expressApp.use(bodyParser.json({limit:'2mb', extended:false}));

expressApp.use("/",router);

console.log("server is listening at port : "+global.port)
expressApp.listen(global.port);