const express = require('express')
const Router = express.Router()
const signup = require('../controller/company/signupController')

Router.post("/signup",signup.signuppost)



module.exports = Router; 