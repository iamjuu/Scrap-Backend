const {Cardmodel}=require('../model/Carddata')

module.exports={
    cardPost:async (req,res)=> {
const {title,price}=req.body

const cardData =new Cardmodel(req.body)
await cardData.save()
    }
}