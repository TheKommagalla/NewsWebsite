const express = require('express');
const News = require('../model/schema'); // Ensure this exports the model, NOT just the schema

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await News.find({}); // Fetch all news
    console.log(data);
    res.status(200).json(data); // Send JSON response
  } catch (err) {
    console.error('❌ Error fetching data:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
