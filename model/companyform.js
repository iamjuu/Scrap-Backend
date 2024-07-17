const mongoose = require('mongoose')


const form  = new mongoose.Schema({
    productname :{
        type:String

    },
    image:{
        type:String

    },
    title:{
        type:String
    }
})

const formData = mongoose.model('companyform',form)


module.exports={
    formData
}