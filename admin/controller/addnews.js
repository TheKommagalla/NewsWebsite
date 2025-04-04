const AdminData = require('../model/adminaddnews');
const express = require('express');
const route = express.Router();
const bodyParser = require('body-parser');

route.use(bodyParser.urlencoded({ extended: true }));
route.use(bodyParser.json());

route.post("/", async (req, res) => {
    try {
        const { title, description, url, urlToImage, PublishedOn } = req.body;
        
        console.log("🔍 Received Data:", req.body);
        
        if (!title || !description || !url || !urlToImage || !PublishedOn) {
            return res.status(400).json({ message: "All fields are required" });
        }

        let existingNews = await AdminData.findOne({ title });
        if (existingNews) {
            return res.status(400).json({ message: "News article already exists" });
        }

        const newNews = new AdminData({ title, description, url, urlToImage, PublishedOn });
        await newNews.save();
        console.log("✅ News Saved Successfully");

        res.status(201).json({ message: "News added successfully" });
    } catch (error) {
        console.error("❌ ERROR in /addnews:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = route;
