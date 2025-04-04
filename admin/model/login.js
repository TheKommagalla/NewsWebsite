// const mongoose=require('mongoose')
// const loginSchema=new mongoose.Schema({
//     email:{type:String,require:true},
//     password:{type:String,require:true}
// })
// const loginData=mongoose.model("users");
// module.exports=loginData;
// const mongoose = require("mongoose");

// const LoginSchema= new mongoose.Schema({
//    email:{ type: String, required: true, unique: true },
//    password: { type: String, required: true }
// });
// const UserData = mongoose.model("users","");
// module.exports = UserData;
const mongoose = require("mongoose");

// Use an empty schema to fetch data from an existing collection
const UserData = mongoose.model("users", new mongoose.Schema({}, { strict: false }));

module.exports = UserData;
