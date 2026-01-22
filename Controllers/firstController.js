// const express=require('express')

// const TestingAPI=(req,res)=>{
//     console.log('responding.........!')
// }
// const GetData=(req,res)=>{
//     return res.json("Responding from Backend!....");
// }
// exports.GetData=GetData;

 const express=require('express')
 const bcrypt=require('bcrypt')
const UploadFile = async(req,res) => {
    try{
        console.log(req.files)
        return res.status(200).json(req.files)
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

const Encryption=async(req,res)=>{
    try{
        const encode=await bcrypt.hash(req.body.password,10)
        return res.status(200).json(encode)
    }
    catch(err){
        return res.status(500).json(err)
    }
}

const  VerifyEncryption=async(req,res)=>{
    try{
        const encrypted="$2b$10$KqQZCKPy9L.Sib0J/1MIl.TNaEcW7oPJVBGjciPUqm5f5UlpzXubu"
        const result=await bcrypt.compare(req.body.password,encrypted)
        return res.status(200).json(result)
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}     
exports.VerifyEncryption=VerifyEncryption
exports.Encryption=Encryption
exports.UploadFile = UploadFile