const express = require('express')
const router = express.Router()
const {pickPost}=require('../controller/pickupController')

router.post('/pickup',pickPost)

