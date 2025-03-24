const mongoose = require('mongoose');

const connectionDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/LOGINFROM');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(`Error in connection: ${error.message}`);
        process.exit(1); // Exits process if connection fails
    }
}
connectionDB();
module.exports=connectionDB;