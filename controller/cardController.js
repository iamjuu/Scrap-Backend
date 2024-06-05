const { Cardmodel } = require("../model/Carddata");
// admin card
module.exports = {
  cardPost: async (req, res,next) => {
    try{

    
    const body = Object.assign({}, req.body);
    const { title, price } = body;
    const Image = req.file.filename;
    const newData = new Cardmodel({
      title,
      price,
      Image,
    });
    await newData.save();
    res.status(201).json({ success: true, message: "product" });
}catch(err){
   next(err)
}
  },

  // this path is for loop the card

  carddetailspost: async (req, res) => {
      try {
          console.log('triggered');
          const carddetails = await Cardmodel.find();
          console.log("----",carddetails);
          res.json({ carddetails });
      } catch (err) {
          console.log(err, 'error in card passing to frontend');
          res.status(500).json({ error: 'Internal Server Error' });
      }
  }
};
