const form_model = require("../Models/form");

const delete_data=async(req,res)=>{
  try{
      const {id}=req.params;

    if(!id){
        return res.status(400).json({
            status:0,
            succes:false,
            msg:"Id not received"
        })
    }
    const user=await form_model.findOne({_id:id})
    if(!user){
        return res.status(404).json({
            status:0,
            success:false,
            msg:"User doesn't exists"
        })
    }

    const delete_user=await form_model.deleteOne({_id:id})

    return res.status(200).json({
        status:1,
        success:true,
        msg:"Deleted user successfully",
        db_msg:delete_user
    })
  }
  catch(err){
    return res.status(500).json({
            status:0,
            success:false,
            msg:err.message
        })
  }

}

module.exports=delete_data