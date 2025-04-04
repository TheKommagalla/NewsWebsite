// Importing modules
require('dotenv').config(); // ✅ Load environment variables
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authcontroller = require('./controller/authcontroller');
const Login=require('./controller/Login')
const addnews=require('./controller/addnews')
const GetData=require('./controller/getData')
const connectionDB = require('./db');
const Delete=require('./controller/Delete')

// Importing local modules
// const userdata = require('./model/userSchema'); // ✅ Corrected import path
// const { default: Login } = require('../adminUI/admin/src/components/Login');

const port = process.env.PORT || 6053; // ✅ Use environment variable if available

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Calling the connection function
connectionDB();

// Routes
app.use("/auth", authcontroller); // ✅ Corrected route usage
app.use("/addnews",addnews);
app.use("/login",Login);
app.use("/getdata",GetData)
app.use("/",Delete)
// Start server
app.listen(port, () => console.log(`🚀 Server is running on http://localhost:${port}`));
