const express =require('express')
const Router = express.Router()
const {cardPost,carddetailspost}=require('../controller/cardController')

Router.post('/addcard',cardPost)
Router.post('/products',carddetailspost)


module.exports=Router