const mongoose = require("mongoose")
const Schema= mongoose.Schema
 const blogSchema = new Schema({
    name:{
        type:String},

    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    }
    
    

})
const Login = mongoose.model("Login",blogSchema)
module.exports=Login
