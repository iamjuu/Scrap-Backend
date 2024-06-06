const { pickupupload } = require("../model/pickup");

module.exports = {
  pickPost: async (req, res) => {
 
    const pickupdata = new pickupupload(req.body)
    await pickupdata.save()
    console.log(pickupdata,'data saved');

  },
};
