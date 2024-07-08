const mongoose=require("mongoose")

 async function connectToDb(){
  await   mongoose.connect("mongodb+srv://learner:123456abc@cluster0.uofmtpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  console.log("database connected")
}
module.exports=connectToDb