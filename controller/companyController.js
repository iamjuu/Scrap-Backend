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
  agentdata:async (req,res)  => {

    try {
      const agentData = await Company.find()
      console.log(agentData,'data gotted');
      res.status(200).json({message:true,Agent:agentData})
    } catch (error) {
      console.log(error,'err in agent data passing to frontend');
         }
 
  }
};
