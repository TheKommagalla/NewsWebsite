const mongoose=require('mongoose')
const express = require("express");
const router = express.Router();
const UserData = require("../model/GetSchema"); // Import the schema

// Get all news articles
router.get("/getnews", async (req, res) => {
    try {
        const news = await UserData.find({}); // Fetch all documents
        res.json(news);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ error: "Error fetching news" });
    }
});
router.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Received ID:", id);

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        // Delete news article
        const deletedItem = await UserData.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ error: "News not found" });
        }

        res.json({ message: "News deleted successfully" });
    } catch (error) {
        console.error("Error deleting news:", error);
        res.status(500).json({ error: "Error deleting news" });
    }
});

module.exports = router;

