// routes/cardRoutes.js (or the appropriate file name)
const express = require('express');
const Router = express.Router();
const multer = require('multer');
const { storage } = require('../middleware/multer'); // Ensure correct import
const { cardPost, carddetailspost } = require('../controller/cardController');

const upload = multer({ storage });

Router.post('/card', upload.single("file"), cardPost);
Router.post('/products', carddetailspost);

module.exports = Router;
