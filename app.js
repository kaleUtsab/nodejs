 const express = require("express")
 const app = express()

app.set('view engine','ejs')
app.get("/",(req,res)=>{
    res.send("hey ,this is home page")
})

app.get("/about",(req,res)=>{
    const name="utsab pandey"
    res.render("about.ejs",{name:name})
})
 app.get("/about",(req,res)=>{
    req.render("about.ejs",{})
    


 })



 app.listen(3000,()=>{
    console.log("Nodejs project has started at port"+3000)

 })