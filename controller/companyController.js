const { Company } = require("../model/companymodel");
const { CompanycardModel } = require("../model/CompanyCard");
module.exports = {
  // this path to save the agent form data
  agenyformPost: async (req, res) => {
    try {
      // console.log(req.body, "frontend data");
      const { companyName, phone, location, tonAmount, message } = req.body;
      console.log(location, "loc");

      const company = new Company({
        Companyname: companyName,
        phone: phone,
        location: location,
        kilogram: tonAmount,
        message: message,
      });
      await company.save();
      console.log(company, "data saved");
      res.status(200).json({ message: "Data saved successfully" });
    } catch (error) {
      console.log(error, "error in pickup post");
      res.status(500).json({ error: "An error occurred" });
    }
  },

  // this path is send data to frondend for looping
  agentdata: async (req, res) => {
    try {
      const agentData = await Company.find();
      console.log(agentData, "data gotted");
      res.status(200).json({ message: true, Agent: agentData });
    } catch (error) {
      console.log(error, "err in agent data passing to frontend");
      res.status(500).json({ error: "An error occurred" });
    }
  },
  // ************************************************************

  // agent product card data saving in data base
  agentCard: async (req, res) => {
    try {
      const body = Object.assign({}, req.body);
      const { title, price } = body;
      console.log('here');

      
      const newData = new CompanycardModel({
        title,
        price,
        Image: "/assets/CompanycardImages/" + req.file.filename,
      });
      await newData.save();
      res.status(201).json({ success: true, message: "product" });
    } catch (err) {
      console.log(err, "err in agent card  check in the agentcard controller");
    }
  },
  // .................................... 
  // this path is sending data to frontend 
  agentcarddata: async (req, res) => {
    try {
      const agentData = await CompanycardModel.find();
      console.log(agentData, "data gotted");
      res.status(200).json({ message: true, Agent: agentData });
    } catch (err) {
      console.log(
        err,
        "err in the agentdata passing to frontend please check the company controller agent card data"
      );
    }
  },

  ExistingAgent: async (req, res) => {
    try {
      const { number } = req.body;
      const Num = number;
      const Exist = await Company.findOne({ phone: Num });

      if (Exist) {
        console.log(Exist, "Number found in the Company collection");
        res.status(200).json({ message: "Number exists", company: Exist });
      } else {
        res.status(202).json({ msg: "render agentform" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  agentcardGet: async (req, res) => {
    try {
      console.log("Fetching agent card data...");
      const data = await CompanycardModel.find();
      res.status(200).json({ message: true, Agent: data });
    } catch (error) {
      console.error('Error in agent card get:', error);
      res.status(400).json({ message: "Page not found" });
    }},

    agentproductdelete:async(req,res)=>{
      try{
        const Id = req.query.id
        const deleteProduct = await CompanycardModel.findByIdAndDelete(Id)
        console.log('deleted product');
        res.status(200).json({message:true})        
    }
  catch(err){
console.log(err,' error in agent product  card delete please check the company controller');

  }
}
}

