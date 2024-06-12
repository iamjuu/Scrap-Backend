const express = require('express');
const router = express.Router();
const multer = require('multer');
const { pickPost } = require('../controller/pickupController');
const { carddetailspost } = require('../controller/cardController');
const { pickupstorage } = require('../middleware/multer');

// Configure multer with the pickupstorage
const upload = multer({ storage: pickupstorage });

// pickup data saving to database 
router.post('/pickup', upload.single('pickupImage'), pickPost);

// this path for sending data backend to frontend for product looping
router.post('/products', carddetailspost);

module.exports = router;
