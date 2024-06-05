
const multer = require('multer');
const cardStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/card-image');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const cardUpload = multer({ storage: cardStorage }).single('card-image')
module.exports = { 
    cardUpload };