let slider=(req,res)=>{
    res.send("Welcome to Home Page Slider with Controller Function ")
}

let product=(req,res)=>{
    res.send("Welcome to Home Page Prodcuts with Controller Function ")
}

let category=(req,res)=>{
    res.send("Welcome to Home Page Category with Controller Function")
}

let team=(req,res)=>{
    res.send("Welcome to About page Team with controller Function ")
}


module.exports={slider, product, category, team}