
const express = require('express');
const Router = express.Router();
const multer = require("multer");
const storage = require('../middleware/multer');
const { cardPost, carddetailspost } = require('../controller/cardController');


const upload = multer({ storage });

Router.post('/addcard', upload.single("file"),cardPost);
Router.post('/products', carddetailspost);

module.exports = Router;
