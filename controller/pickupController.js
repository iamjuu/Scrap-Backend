const { pickupupload } = require("../model/pickup");

module.exports = {
  pickPost: async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    res.json({ message: "Form submitted successfully" });
  },
};
