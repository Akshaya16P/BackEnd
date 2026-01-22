// const express = require("express")
// const app=express()
// const Cron = require("node-cron")

// const firstRoute=require("./Routes/firstRoute")

// Cron.schedule("* * * * * *",()=>{
//     console.log(Date.now());
// })
// app.use("/",firstRoute);
// app.get("/get-data",(req,res)=>{
//     console.log("Responding......");
// })
// app.listen(9000,()=>{
//     console.log("server running")
// })



const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const path = require("path");
const FirstRoute = require("./Routes/firstRoute")
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname,"uploads")))

mongoose.connect("mongodb://localhost:27017/")
.then(res =>{
    console.log("DB is Connected")
})
.catch(err =>{
    console.log("error in connecting DB",err)
})

app.use("/",FirstRoute);

app.listen(9000,()=>{
    console.log("Server Started at 9000")
})