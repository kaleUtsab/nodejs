const mongoose=require("mongoose")

 async function connectToDb(){
  console.log("Connecting...");
  await mongoose.connect(process.env.DATABASE)
  console.log("Database Connected!")
}
module.exports=connectToDb