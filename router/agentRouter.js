const express = require('express')
const Router = express.Router()
const signup = require('../controller/company/signupController')

Router.post('/agent/signup',signup.signupPost)



module.exports = Router; 
