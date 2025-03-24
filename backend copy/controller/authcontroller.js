const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const config = require('../config');
const UserData = require('../model/UserSchema'); // Only require once
const jwt = require('jsonwebtoken');

const routes = express.Router();

routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

// 🔹 GET ALL USERS
routes.get("/users", async (req, res) => {
    try {
        let data = await UserData.find({});
        console.log(data)
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
});

// 🔹 USER REGISTRATION
routes.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        let existingUser = await UserData.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashpassword = await bcrypt.hash(password, 8);

        // Create a new user
        const newUser = new UserData({
            name,
            email,
            password: hashpassword,
            role: role || "user"
        });

        await newUser.save();
        res.status(201).send("Registration Successful");
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
    });
    routes.post("/login", async (req, res) => {
        try {

            const { email, password } = req.body;
             console.log(`email:${email} password:${password}`)
            // Check if user exists
            const user = await UserData.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "Register first" });
            }
    
            // Validate password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid Email or Password" });
            }
    
            // Generate JWT token
            const token = jwt.sign({ user_id: user._id }, config.secret, { expiresIn: 86400 });
    
            // Send response with token
            res.status(200).json({ auth: true, token });
        } catch (error) {
            console.log(error);
            res.status(500).json({ auth: false, token: "There is an error in Login" });
        }
    });
    routes.get("/user-data", async (req, res) => {
        try {
            // 🔹 Get token from header
            const token = req.headers['x-access-token'];
    
            // 🔹 Check if token is missing
            if (!token) {
                return res.status(401).json({ message: "Access Denied: No Token Provided" });
            }
    
            // 🔹 Verify token
            const decoded = jwt.verify(token, config.secret);
            const user = await UserData.findById(decoded.user_id);
    
            // 🔹 Check if user exists
            if (!user) {
                return res.status(404).json({ message: "No matching user found for this token" });
            }
    
            // 🔹 Send user data (excluding password for security)
            res.status(200).json({
                name: user.name,
                email: user.email,
                role: user.role
            });
    
        } catch (error) {
            console.error(error);
    
            // 🔹 Handle specific JWT errors
            if (error.name === "JsonWebTokenError") {
                return res.status(400).json({ message: "Invalid Token" });
            }
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({ message: "Token Expired, Please Login Again" });
            }
    
            // 🔹 Generic error response
            res.status(500).json({ message: "Error in getting user data" });
        }
    });
    


module.exports = routes;
