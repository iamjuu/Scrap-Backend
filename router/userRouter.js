const express = require('express')
const router = express.Router()
const{addProductPost,editPoduct}=require('../controller/productController')
const {pickPost}=require('../controller/userController')


router.post('/addproduct',addProductPost)
router.