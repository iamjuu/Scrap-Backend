const mongoose = require('mongoose')

const card = new mongoose.Schema({
    Image: Array,
    title:{
        type:String
    },
    price:{
        type:Number
    },

})

const Cardmodel =mongoose.model('cardschema',card)

module.exports={
    Cardmodel
}