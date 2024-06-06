const {pickupupload}=require('../model/pickup')

module.exports={

    pickPost:async (req, res) => {

        try {
            console.log('Received form data:', req.body);
            console.log('Received file:', req.file); // This logs the file details
            res.send({ message: 'Form data received' });

            const pickupdata = new pickupupload(req.body)
           await pickupdata.save()
           console.log(pickupdata,'data saved');
        } catch (error) {
            
        }
      
      }
    
}