const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('../config');
const UserData = require('../model/userSchema');
const routes = express.Router();
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());
// 🔹 GET ALL USERS
routes.get("/users", async (req, res) => {
    try {
        let data = await UserData.find({});
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// 🔹 USER REGISTRATION
routes.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        console.log("🔍 Received Data:", req.body);
        
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        let existingUser = await UserData.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("✅ Password Hashed");

        const newUser = new UserData({ name, email, password: hashedPassword });
        await newUser.save();
        console.log("✅ User Saved Successfully");

        res.status(201).json({ message: "Registration Successful" });
    } catch (error) {
        console.error("❌ ERROR in /register:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

// 🔹 GET USER DATA (Protected Route)
routes.get("/user-data", async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).json({ message: "Access Denied: No Token Provided" });
        }

        const decoded = jwt.verify(token, config.secret);
        const user = await UserData.findById(decoded.user_id).select("-password"); // Exclude password

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(`the erroris ${error}`);
        if (error.name === "JsonWebTokenError") {
            return res.status(400).json({ message: "Invalid Token" });
        }
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token Expired, Please Login Again" });
        }
        res.status(500).json({ message: "Error fetching user data" });
    }
});
routes.post("/addnews", async (req, res) => {
    try {
        const { title,description,url,urlimage, PublishedOn } = req.body;
        
        console.log("🔍 Received Data:", req.body);
        
        if (!title ||!description||!url || !urlimage ||!PublishedOn ) {
            return res.status(400).json({ message: "All fields are required" });
        }

        let existingUser = await UserData.findOne({title });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new UserData({ title,description,url,urlimage,PublishedOn});
        await newUser.save();
        console.log("✅ User Saved Successfully");

        res.status(201).json({ message: "Registration Successful" });
    } catch (error) {
        console.error("❌ ERROR in /register:", error);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = routes;
