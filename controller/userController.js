const { pickupupload } = require("../model/pickup");

module.exports = {


  // this path for list user to admin page 
  user: async (req, res, next) => {
    try {
      const userData = await pickupupload.find();
      res.status(200).json({ userData: userData });
    } catch (error) {
      next(error);
    }
  },


  // this path for deleting user  from user list 
  userdelete: async (req, res) => {
    try {
      const id = req.query.id;
      await pickupupload.deleteOne({ _id: id });
      res.status(200).json({ success: true });
    } catch (error) {}
  },
};
