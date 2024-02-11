import colors from "colors"
import mongoose from 'mongoose';
import dotenv from "dotenv"

//configure env file
dotenv.config()

//Databse url in secrect file
const url = process.env.DATABASE

const connectDB = async () =>{
    try {
        //connection function for databse connection
        await mongoose.connect(url)
        console.log('DATABASE connected'.bgGreen.white);
    } catch (error) {
        //error if not connect
        console.log(`error while conection DB ${error}`.bgRed)
        
    }
}

export default connectDB