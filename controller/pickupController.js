const { pickupupload } = require("../model/pickup");
module.exports = {
  pickPost: async (req, res) => {
    try {
req.body.pickupImage = req.file.filename
 const newdata =new pickupupload(req.body)
 await newdata.save()

    } catch (error) {
      console.log(error, "error in  pickup post");
    }
  },

};
