// company side signup controller 


const {Signup}=require('../../model/Signupmodel')
module.exports={
signupPost: (req,res) =>{


    try {
        const { email, phone, password } = req.body

        res.status(200).json({ message: 'Signup successful' });
    }catch (error) {
        console.log(error,'error in signup post');
        
    }
  
}

}
