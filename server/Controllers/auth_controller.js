import user_model from "../Models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registration_controller = async (req, res) => {
  try {
    // checking for if email already registered
    const isRegistered = await user_model.findOne({ email: req.body.email });
    if (isRegistered) {
      return res.status(400).json({ error: "Email Already registered" });
    }
    // checking for if password is already registered
    const isTaken = await user_model.findOne({ username: req.body.username });
    if (isTaken) {
      return res.status(400).json({ error: "Username already Taken" });
    }
    // create function for hashing the password
    // salt value means how strong your password hashing be
    const salt = 10;
    //function for genrate hashing password
    bcrypt.hash(req.body.password, salt, async function (err, hash) {
      if (err) {
        console.log(`hashing failded ${err}`.bgRed.white);
      }
      try {
        req.body.password = hash;
        // save the data of register in DB
        const userID = await user_model.create(req.body);
        // error if data not saved in DB
        if (!userID) {
          return res
            .status(400)
            .json({ error: "Bad request! user not created" });
        }
        //create obecjt for jwt function
        const payload ={ user: userID}
        //jwt key
        const jwt_key = process.env.JWTKEY;
        // create a jwt token using this function
        const genrateToken = jwt.sign(payload, jwt_key, { expiresIn: "12h" });
        //retrun the status of data is saved in DB
        res
          .status(200)
          .json({ message: "User Registration is done", token: genrateToken });
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  } catch (error) {
    //error if user validation in mongoDB
    if (error.issues) {
      return res
        .status(400)
        .json({ message: "validation failed", errors: error.issues });
    } else {
      //error if user not created by some server or code error
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export const login_controller = async (req, res) => {
  try {
    //checking the email is registed ?
    const login = req.body;
    const isEmailRegistered = await user_model.findOne({ email: login.email });
    // error if email not found
    if (!isEmailRegistered) {
      return res.status(400).json({ error: "Email not registered" });
    }
    // campare password with stored password
    const isPassWordCorrect = bcrypt.compare(
      login.password,
      isEmailRegistered.password
    );
    // error if password is not match
    if (!isPassWordCorrect) {
      return res.status(400).json({ error: "Incorrect Password" });
    }
    //convert mongo DB object in object for jwt function
    const payload ={ user: isEmailRegistered}
    //jwt key
    const jwt_key = process.env.JWTKEY;
    // create a jwt token using this function
    const genrateToken = jwt.sign(payload, jwt_key, { expiresIn: "12h" });
    //create error for jwt error
    if(!genrateToken){
      return res.status(400).json({ error: "error in creating session token" });
    }
    //retrun the status of data is saved in DB
    res
      .status(200)
      .json({ message: "User login is done", token: genrateToken });
  } catch (error) {
    // return internal server error if login not worked
    res.status(500).json({ error: "Internal Server Error" });
  }
};