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
    res.render("home.ejs")
    })

    app.get("/blog",(req,res)=>{
      res.render("blog.ejs")

    })


    app.get("/",async (req,res)=>{
        const blogs = await Blog.find() // always returns arrray 
        res.render("home.ejs",{blogs})
    })
    app.get('/blog/:id',async(req,res)=>{
      const id =req.params.id
      const blog = await Blog.findById(id)
      res.render("blog.ejs",{blog:blog})

     
    })
app.get("/deleteblog/:id",async(req,res)=>{
    const id = req.params.id
    await Blog.findByIdAndDelete(id)
    res.redirect("/")
})
app.post("/editblog/:id",async(req,res)=>{
    const id = req.params.id
    const {title,subtitle,description,image} = req.body
    await Blog.findByIdAndUpdate(id,{title,subtitle,description,image})
    res.send("Edited")
})

app.get("/editblog/:id", async(req, res)=>{
    const blog = await Blog.findById(req.params.id)
    res.render("editblogs.ejs", {blog})

})
