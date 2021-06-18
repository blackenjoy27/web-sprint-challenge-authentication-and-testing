const {JWT_SECRECT} = require("../../config/secrect");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if(token){
    jwt.verify(token,JWT_SECRECT,(err,decoded)=>{
      if(err){
        next({
          status:401,
          message:"token invalid"
        })
      }else{
        req.decodedJwt = decoded;
        next();
      }
    })
  }else{
    next({
      status:401,
      message:"token required"
    })
  }
};
