let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack2");

let StudentSchema = new schemaObj(
    {
        name: {type:String, required:true},
        age: {type:Number, required:true},
        bio: String,
        mobile:Number,
        address: Object //{line1: "asdasd", line2:"dasdas" }
    },
    {
        versionKey: false //false - set to false then it wont create in mongodb
    }
);

let StudentDataModel = mongooseObj.model("student",StudentSchema);//creating student collection using studentmodel /schema

module.exports = StudentDataModel;

//note: donot put versionkey to true or it will start throwing error