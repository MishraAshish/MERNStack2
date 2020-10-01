let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack2");

let ProductSchema = new schemaObj(
    { 
        name:{type: String, required: true},
        price:String,
        camera:String,
        ram:String,
        display:String,
        color:String
    },
    {
        versionKey: false //false - set to false then it wont create in mongodb
    }
);

let ProductDataModel = mongooseObj.model("product",ProductSchema);//creating student collection using studentmodel /schema

module.exports = ProductDataModel;

//note: donot put versionkey to true or it will start throwing error