const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: { type: String, required: true }, 
    description: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true }, // ✅ Fixed the typo
    PublishedOn: { type: String, required: true }  // ✅ Changed type from String to Date
}, { timestamps: true }); // ✅ Adds createdAt and updatedAt fields automatically

const DataSchema = mongoose.model("addnews", schema);
module.exports = DataSchema;
