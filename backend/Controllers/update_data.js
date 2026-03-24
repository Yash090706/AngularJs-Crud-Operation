const form_model = require("../Models/form");
const bcryptjs=require("bcryptjs")
const get_single_data=async(req,res)=>{
    try{
        const {id}=req.params;

    if(!id){
        return res.status(404).json({
            status:0,
            success:false,
            msg:"Id is required"
        })
    }
    const get_user_data=await form_model.findOne({_id:id})
    if(!get_user_data){
        return res.status(404).json({
            status:0,
            success:false,
            msg:"User not found"
        })
    }
    return res.status(200).json({
        status:1,
        success:true,
        get_user_data
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
const update_user_data = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, email, phone, address, gender, course, password } = req.body;

    const update_data = {};

    if (fullname) update_data.fullname = fullname;
    if (email) update_data.email = email;
    if (phone) update_data.phone = phone;
    if (gender) update_data.gender = gender;
    if (course) update_data.course = course;
    if (address) update_data.address = address;

    if (password) {
      const hashed_password = bcryptjs.hashSync(password, 10);
      update_data.password = hashed_password;
    }

    const updates = await form_model.findByIdAndUpdate(
      id,
      update_data,
      { new: true }
    );

    return res.status(200).json({
      status: 1,
      success: true,
      msg: "Updated Successfully",
      updates
    });

  } catch (err) {
    return res.status(500).json({
      status: 0,
      success: false,
      msg: err.message
    });
  }
};

module.exports={get_single_data,update_user_data}