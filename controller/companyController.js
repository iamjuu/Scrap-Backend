const { Company } = require("../model/companymodel");
const { CompanycardModel } = require("../model/CompanyCard");

module.exports = {
  // this path to save the agent form data
  agenyformPost: async (req, res) => {
    try {
      // console.log(req.body, "frontend data");
      const { companyName, phone, tonAmount, message } = req.body;

      const company = new Company({
        Companyname: companyName,
        phone: phone,
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

  // thsi path is send data to frondend fo looping
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
  agentCard: async (req, res) => {
    try {
      const body = Object.assign({}, req.body);
      const { title, price } = body;
      const newData = new CompanycardModel({
        title,
        price,
        // Image: "/assets/CompanycardImages/" + req.file.filename,
      });
      await newData.save();
      res.status(201).json({ success: true, message: "product" });
    } catch (err) {
      console.log(err, "err in agent card  check in the agentcard controller");
    }
  },
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
        res.json({ msg: "render agentform" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};
