const express=require('express')
const FirstController=require("../Controllers/firstController")
const route = express.Router();

route.get('/get-data',FirstController.TestingAPI)


module.exports=route;