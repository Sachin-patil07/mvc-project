let express = require ("express")
const { homepageRoute } = require("./routes/website/homeapiRoutes");
const { aboutpageRoute } = require("./routes/website/aboutapiRoutes");

let mainRoutes = express.Router();       // made variable and call the routes function from express (it will make routes)

mainRoutes.use('/website/homepageapi', homepageRoute )  // http://localhost:8000/website/homepageapi/slider
mainRoutes.use('/website/aboutpageapi', aboutpageRoute) // http://localhost:8000/website/aboutpageapi/team



module.exports={mainRoutes}