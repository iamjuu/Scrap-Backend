const {pickupupload}=require('../model/pickup')

module.exports={
    user: async(req,res)=>{
        try {
        
            const userData =await pickupupload.find()
            res.status(200).json({userData:userData})
        
        } catch (error) {
            console.log(error,'error in user data sending to frondend check in user controller ');
        }
    },

    userdelete:(req,res)=>{
        try {
            
        } catch (error) {
            
        }
    }

}