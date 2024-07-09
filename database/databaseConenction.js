const mongoose=require("mongoose")

 async function connectToDb(){
  console.log("Connecting...");
  await mongoose.connect("mongodb://localhost:27017/aces")
  console.log("Database Connected!")
}
module.exports=connectToDb