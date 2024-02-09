import colors from "colors"
import mongoose from 'mongoose';
import dotenv from "dotenv"

//configure env file
dotenv.config()

const url = process.env.DATABASE
console.log("URL:", url)

const connectDB = async () =>{
    try {
        await mongoose.connect(url)
        console.log('DATABASE connected'.bgGreen.white);
    } catch (error) {
        console.log(`error while conection DB ${error}`.bgRed)
        
    }
}

export default connectDB