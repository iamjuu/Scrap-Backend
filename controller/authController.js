const jwt = require('jsonwebtoken');

const secretKey = 'Rifahadmt';


module.exports = {
    // this file for  admin login 
    Login: (req, res) => {
        console.log(req.body);
        var a = 'rifahad';
        var c= 'ajmal'
        var b = '54321';
        if (req.body.username == a ||c  && req.body.password == b) {
            const payload = { username: 'juu' };
            const token = jwt.sign(payload, secretKey);
            return res.status(200).json({ success: true, token });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    }
};