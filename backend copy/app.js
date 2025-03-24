// Importing modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 const cors = require('cors')
const authcontroller = require('./controller/authcontroller');
const weather=require("./controller/wheather")
const connectionDB= require('./db');

// Importing local modules
const userdata = require('./model/UserSchema');

const port = 1001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 app.use(cors());

// Routes
app.use("/api/auth", authcontroller); // ✅ Corrected route usage
app.use("/api/weather", weather); // ✅ Corrected route usage

// Start server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
