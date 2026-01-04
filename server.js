const express = require("express")
const app=express()

const FirstRoute=require("./Routes/firstRoute")

app.use("/",FirstRoute);
// app.get("/get-data",(req,res)=>{
//     console.log("Responding......");
// })
app.listen(9000,()=>{
    console.log("server running")
})