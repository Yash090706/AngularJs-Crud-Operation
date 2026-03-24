const form_model = require("../Models/form");
const bcryptjs=require("bcryptjs")
const register = async (req, res) => {
  const { fullname, email, phone, address, gender, course, password } =
    req.body;
  try {
    if (
      !fullname ||
      !email ||
      !phone ||
      !address ||
      !gender ||
      !course ||
      !password
    ) {
      return res.status(404).json({
        status: 0,
        success: false,
        message: "Data is Required",
      });
    }
    const hashed_password=bcryptjs.hashSync(password,10)
    const form_data = new form_model({
      fullname,
      email,
      phone,
      address,
      gender,
      course,
      password:hashed_password
    });
    const dup = await form_model.findOne({
      $or: [{ email: email }, { phone: phone }],
    });
    if (dup) {
      return res.status(409).json({
        status: 0,
        success: false,
        msg: "User Exists.",
      });
    }
    await form_data.save();
    return res.status(200).json({
      status: 1,
      success: true,
      msg: "Registered SuccessFully.",
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

module.exports = register;
