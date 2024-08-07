const {Company}=require('../model/companymodel')

module.exports={

agenyformPost: async(req,res) => {
    try {
      console.log('here');

      } catch (error) {
        console.log(error, "error in  pickup post");
      }
    },
}

      
      // req.body.companyImage = req.file.filename;
      // console.log(req.body.companypickupImage,'this is image');
      // const data = new Company(req.body)
      // await data.save()
// console.log(data,'data is saved ');
        