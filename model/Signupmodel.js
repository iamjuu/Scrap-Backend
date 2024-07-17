const mongoose = require('mongoose')

const signup =new mongoose.Schem({

username:{
    type:String
},
phone :{
    type:String
},
password :{
    type :String
}

})



const SignupData = mongoose.model('signup',signup)
module.exports = {
    SignupData
}