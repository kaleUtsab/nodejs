const multer= require("multer")

const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./storage') //error,success
    },
    filename: function(req,file,cb)
    {
        cb(null,Date.now()+file.originalname)
    }
})
module.exports={multer,storage}