const express=require("express")
const register = require("../Controllers/form_controller")
const view_data = require("../Controllers/View_Form_data")
const delete_data = require("../Controllers/delete_data")
const {get_single_data, update_user_data} = require("../Controllers/update_data")

const form_route=express.Router()

form_route.post("/register",register)
form_route.get("/view",view_data)
form_route.delete("/delete/:id",delete_data)
form_route.get("/get/:id",get_single_data)
form_route.put("/update-form/:id",update_user_data)
module.exports=form_route