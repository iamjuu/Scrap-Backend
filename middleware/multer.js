
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/assets/cardImages')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + file.originalname
      cb(null,uniqueSuffix)
    }
  }) 
     
  const pickupstorage = multer.diskStorage({
    destination: function (req,file,cb) {
      cb(null,'./public/assets/pickupImage')
    },
    filename:function(req,file,cb){
const uniqueSuffix = Date.now( +'-'+file.originalname)
      cb(null,uniqueSuffix)
    }
  })

 module.exports = {
  storage,
  pickupstorage
};