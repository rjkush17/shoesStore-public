import express from "express"
import dotenv from "dotenv"
import colors from "colors"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req,res)=>{
    res.send({message :"Nodemom is working"})
})

app.listen(5500, ()=>console.log(`Server is running on port ${PORT}`.bgBlue.white))
