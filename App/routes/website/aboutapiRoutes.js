let express=require("express")

let aboutpageRoute=express.Router();

aboutpageRoute.get("/team", (req,res)=>{
    res.send("Welcome to About us Page API -- Team")
})



module.exports={aboutpageRoute}