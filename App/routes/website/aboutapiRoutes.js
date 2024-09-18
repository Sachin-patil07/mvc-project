let express=require("express");
const { team } = require("../../controller/website/homepageController");

let aboutpageRoute=express.Router();

aboutpageRoute.get("/team" , team)



module.exports={aboutpageRoute}