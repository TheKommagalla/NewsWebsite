const mongoose = require("mongoose");

const GetSchema= new mongoose.Schema({
    title:{ type: String, required: true, unique: true },
    description: { type: String, required: true },
    publishedOn:{ type: String, required: true, unique: true }
    
   
  
});

const UserData = mongoose.model("addnews");
module.exports = UserData;