require("dotenv").config();
const express = require("express");
// const app=express();
// const port=5500;
// const express = require("express");
const weather = express.Router(); // Renamed from "whather"
const axios = require("axios");

// Weather API Endpoint
weather.get("/weather?:city", async (req, res) => {
  try {
    const city = req.query.city || "New York"; // Default city if not provided
    console.log(city)
    const apiKey = process.env.WEATHER_API_KEY; // API Key from .env
    if (!apiKey) {
      return res.status(500).json({ error: "API key is missing" });
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(apiUrl);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data", details: error.message });
  }
});
// app.listen(port, () => console.log(`The server is running at http://localhost:${port}`));
module.exports = weather;
