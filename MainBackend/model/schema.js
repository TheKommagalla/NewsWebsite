const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  newstype: String,
  newsHeading: String,
  newsDescription: String,
  newsImage: String,
  newsDate: String,
  newsTime: String,
});

// ❌ Don't export schema directly
// module.exports = newsSchema; ❌ Incorrect

// ✅ Export model instead
const News = mongoose.model('News', newsSchema);
module.exports = News;
