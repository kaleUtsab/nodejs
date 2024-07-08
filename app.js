 const express = require("express")
const connectToDb = require("./database/databaseConenction")
const Blog = require("./model/blogModel")
 const app = express()
connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
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
 app.get("/createblog",(req,res)=>{
    res.render("./blogs/createblog")
    


 })
 app.post("/createblog",async (req,res)=>{
     const {title,subtitle,description} = req.body
     console.log(title,subtitle,description)
     await Blog.create(
     {
         title,
         subtitle,
         description
         
        })
        res.send("blog created succesfully")
 })

 




 app.listen(3000,()=>{
    console.log("Nodejs project has started at port"+3000)

 })