const express=require('express');
const app=express();
const router=require('./controller/news');
require('dotenv').config();
const port= 1110;
const bodyParser=require('body-parser');
const connectionDB=require('./db.js');
const cors=require('cors');
const path=require('path');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);

// app.use(express.static(path.join(__dirname,'public')));
//calling the connect function from the schema.js
connectionDB();  //connect to the database

app.listen(port,()=>{
    console.log(`Server is running on  http://localhost:${port}`);
});