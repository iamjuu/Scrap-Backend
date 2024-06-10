// routes/cardRoutes.js (or the appropriate file name)
const express = require('express');
const Router = express.Router();
const multer = require('multer');
const { storage } = require('../middleware/multer'); // Ensure correct import
const { cardPost,adminCard } = require('../controller/cardController');
const {user,userdelete}=require('../controller/userController')

const upload = multer({ storage });
// saving card details in database 
Router.post('/card', upload.single("file"), cardPost);

// user data sending to frondend 
Router.get('/Users',user)

// admin user delete path 
Router.post('/admin/User/delete',userdelete)


// admin product card path  for passing data to front end
Router.get('/adminProduct',adminCard)

module.exports = Router;



