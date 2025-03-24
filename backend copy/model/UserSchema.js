

const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const UserData = mongoose.model("LoginData", userSchema);
module.exports = UserData;
