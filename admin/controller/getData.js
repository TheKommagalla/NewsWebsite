const express=require('express')
const bodyParser = require('body-parser');
const mongoose=require('mongoose')
const GetData=require('../model/GetSchema')
const routes=express.Router()
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());
routes.get("/",async (req,res)=>
{
//    const Data=await GetData.find({})
   try{
    let data = await GetData.find({},'title description PublishedOn');
    // const jsonData = JSON.stringify(data);
    res.status(200).send(data);
   }
   catch(error)
   {
     res.status(500).send(`Error:${error}`)
   }
})
module.exports=routes;
