const express=require("express")
require("dotenv").config();
const app=express()
const cors=require("cors")
const mongoose=require("mongoose");
const form_route = require("./Routes/form_routes");
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname))
app.use("/form",form_route)
mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
    console.log("Mongo db connected")
}).catch((err)=>{
    console.log("Mongo db Connection error",err)
})
app.listen(process.env.PORT,"0.0.0.0",()=>{
    console.log("Port Running on 8000")
})