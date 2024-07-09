const express = require("express")
const connectToDb = require("./database/databaseConenction")
const Blog = require("./model/blogModel")
const app = express()
const {multer,storage}=require("./middleware/multerconfig")
const upload = multer({storage:storage})

connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')


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
 app.post("/createblog",upload.single('image'),async (req,res)=>{
    const filename = req.file.filename
    console.log(filename)
     const {title,subtitle,description,image} = req.body
     console.log(title,subtitle,description,image)
     await Blog.create(
     {
         title,
         subtitle,
         description,
         image:filename
         
        })
        res.send("blog created succesfully")
 })

 




 app.use(express.static("./storage"))
 app.listen(3000,()=>{
    console.log("Nodejs project has started at port"+3000)

 })
 app.get("/home",(req,res)=>{
    res.render("home.ejs",{})
    })


    app.get("/",async (req,res)=>{
        const blogs = await Blog.find() // always returns arrray 
        res.render("home.ejs",{blogs})
    })
    