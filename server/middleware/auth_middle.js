import jwt from "jsonwebtoken"
import user_model from "../Models/user_model.js"


const auth_middle = async (req, res, next) =>{

    // extract authorization data form request
    const {authorization} = req.headers
    if(!authorization){
        return res.status(400).json({error:"authorization token not found"})
    }

  try {
    // token extract 
    const token = authorization.split(" ")[1];
    if(!token){
        return res.status(400).json({error:"invalid Authorization Token"})
    }
    // verify token is valid or not
    const jwtkey = process.env.JWTKEY
    const {user} = jwt.verify(token, jwtkey)
    if(!user){
        return res.status(400).json({error:"invalid Authorization Token"})
    }

    // if valid than pass user details in user and send to req
   const userDetails = await user_model.findOne({username : user.username});
   if(!userDetails){
    return res.status(400).json({error : "User not found"})
   }
   req.user = userDetails;
    next()

  } catch (error) {
    // error if code not work
    res.status(400).status({error:"Internal server Error"})
  }
}

export default auth_middle