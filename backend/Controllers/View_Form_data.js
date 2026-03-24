const form_model = require("../Models/form")

const view_data=async(req,res)=>{
    try{
        const data=await form_model.find()
        if(!data || data==null){
            return res.status(404),json({
                status:0,
                success:false,
                msg:"Data Not Found"
            })
        }
        return res.status(200).json({
            status:1,
            success:true,
            data
        })
    }
    catch(err){
        return res.status(500).json({
            status:0,
            succes:false,
            msg:err.message
        })
    }
}

module.exports=view_data