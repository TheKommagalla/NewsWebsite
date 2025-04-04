const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('../config');
const UserData = require('../model/login');
const routes = express.Router();
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

// 🔹 USER LOGIN
routes.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        

        const user = await UserData.findOne({ email });
        console.log(`userdata:${user.email}`)
        if (!user) {
            return res.status(400).json({ message: "Register first" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        // Generate JWT token
        const token = jwt.sign({ user_id: user._id }, config.secret, { expiresIn: "1d" });

        res.status(200).json({ auth: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error in Login" });
    }
});
module.exports=routes
