const express = require('express')
const Router = express.Router()
const {agenyformPost,agentdata,agentCard,agentcarddata,ExistingAgent} = require('../controller/companyController')
const {Companypickupstorage,CompanyImage} =require('../middleware/multer')


const multer = require('multer')
const upload = multer({ storage: Companypickupstorage });


const CompanyUpload = multer({storage:CompanyImage})


Router.post('/pickupcompany', upload.single('companyImage'), agenyformPost);
Router.get('/companydata',agentdata)  

// this path to agent card 
Router.post('/companycard', CompanyUpload.single('CompanycardImage'), agentCard);


Router.get('/adminagentProduct',agentcarddata)


// this path to chack existing agent is there 
Router.post('/existingagent',ExistingAgent)
module.exports = Router; 



