const {Cardmodel}=require('../model/Carddata')
// admin card 
module.exports={
    cardPost:async (req,res)=> {
const {title,price}=req.body

console.log(req.body);
const cardData =new Cardmodel(req.body)
await cardData.save()
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

}