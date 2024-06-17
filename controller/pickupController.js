const { pickupupload } = require("../model/pickup");
module.exports = {


  //  this path for  pickup data saving 


  pickPost: async (req, res) => {
    try {
req.body.pickupImage = req.file.filename
 const newdata =new pickupupload(req.body)
 await newdata.save()
 const findemail= pickupupload.find()
    } catch (error) {
      console.log(error, "error in  pickup post");
    }
  },

};
