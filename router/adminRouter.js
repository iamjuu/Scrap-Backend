const express =require('express')
const Router = express.Router()
const {cardPost}=require('../controller/cardController')

Router.post('/addcard',cardPost)


module.exports=Router