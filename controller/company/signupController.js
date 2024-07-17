// company side signup controller 


const {SignupData}=require('../../model/Signupmodel')
module.exports={
signuppost: async(req,res) =>{
const {username,phone,password} = req.body

const data =  SignupData(req.body)
 await data.save()
 



}

}