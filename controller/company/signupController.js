const { Signup } = require("../../model/Signupmodel");
module.exports = {
  signupPost: async (req, res) => {
    try {
      const { email, phone, password } = req.body;
      const Phone = phone
      const Data = new Signup(req.body);
      await Data.save();
    res.status(200).json({ success: true });

    } catch (error) {
      console.log(error, "error in signup post");
    }
  },
};

