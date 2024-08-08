const { Company } = require("../model/companymodel");
module.exports = {
  agenyformPost: async (req, res) => {
    try {
      // console.log(req.body, "frontend data");
      const { companyName, phone, tonAmount, message } = req.body;
      const company = new Company({
        Companyname:companyName,
        phone:phone,
        kilogram:tonAmount,
        
      })
      await company.save();
      console.log(company,'data saved');   
    } catch (error) {
      console.log(error, "error in  pickup post");
    }
  },
};
