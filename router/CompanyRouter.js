const express = require('express')
const Router = express.Router()
const {agenyformPost,agentdata} = require('../controller/companyController')
const {Companypickupstorage} =require('../middleware/multer')
const multer = require('multer')
const upload = multer({ storage: Companypickupstorage });
Router.post('/pickupcompany', upload.single('companyImage'), agenyformPost);
Router.get('/companydata',agentdata)            

module.exports = Router; 


