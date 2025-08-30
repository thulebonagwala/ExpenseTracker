const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.protect = async (req, res, next) =>{

    const token = req.header("Authorization")?.split(" ")[1];
    if(!token){
        return res.status(400).json({message: "No token, authourization denied"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
    
        req.user = await User.findById(decoded.id).select("-password")
        next();

    }catch(error){
        return res.status(400).json({Message: "not authourised, token failed", error: error.message})
    }
}



// const jwt = require("jsonwebtoken");

// module.exports = function (req, res, next){

//     const token = req.header("Authorization")?.split(" ")[1];

//     if(!token){
//         return res.status(401).json({message: "No token, authorization denied"});
//     }

//     try{
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();

//     }catch(err){
//         res.statuse(401).json({message: "Token is not valid"});
//     }
// }