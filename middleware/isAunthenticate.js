const jwt = require("jsonwebtoken");
const promisify = require("util").promisify;
const Login = require("../model/signmodel")
const isAuthenticate = (req, res, next) => {
  const token = req.cookies.token;
 
  if (!token || token === null) {
    return res.send("Please Login");
  }
  //else block
  jwt.verify(token, process.env.SECRET, async(err, result) => {
    if (err) {
      res.send("Invalid Token");
    } else {
        const data = await Login.findById(result.userId)
        if(!data){
            res.send("Invalid userid in the token")

        }else{
            req.userId =result.userId
            next()
        }

        
    }
  });
  next();
};
module.exports = isAuthenticate;
