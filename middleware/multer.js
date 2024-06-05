const multer = require('multer')

const card= multer.diskStorage({
    destination:function (req,res,cb){
        cb(null,'public/card-image')
    },
    filename:function (req,res,cb){
        cb(null,Date.now()+'-'+ file.originalname)
    }
})

const cardupload = multer({storage:card})