let express=require("express");
const { slider, product, category } = require("../../controller/website/homepageController");

let homepageRoute=express.Router();

// homepageRoute.get("/slider", (req,res)=>{
//     res.send("Welcome to Home Page Slider API")  // this function is Without Controller 
// })
// homepageRoute.get("/product",(req,res)=>{
//     res.send("Welcome to Home Page Product API ")
// } )
homepageRoute.get("/slider" , slider)   // We made Controller and call the slider
homepageRoute.get("/product", product)
homepageRoute.get("/category", category)



module.exports={homepageRoute}