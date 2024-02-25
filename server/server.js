import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import connectDB from "./database/database.js"
import morgan from "morgan"
import router from "./router.js"
import cors from "cors"

//configure env file
dotenv.config()
// rest object
const app = express();
// port number
const PORT = process.env.PORT || 5000

//enable cors to run client and server in same computer
app.use(cors())
//middleware for json
app.use(express.json())

//custom morgan console it want to custom
// const myFormat = ':method :url :status :response-time[ms] :user-agent';
// app.use(morgan(myFormat));

//morgan middleware for console http request
app.use(morgan("dev"))

//router to connect APIs
app.use("/api",router)

//Database Connection call
connectDB()
//Server start function
app.listen(5500, ()=>console.log(`Server is running on port ${PORT}`.bgBlue.white))