const mongoose=require("mongoose")

const form_schema=mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:Number,
        unique:true
    },
    password:{
        type:String
    },
    gender:{
        type:String
    },
    address:{
        type:String
    },
    course:{
        type:String
    }
})

const form_model=mongoose.model("form",form_schema)

module.exports=form_model;