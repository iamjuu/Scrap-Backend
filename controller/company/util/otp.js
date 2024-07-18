// twilioService.js
const twilio = require('twilio');

// Twilio credentials
const accountSid = 'your_account_sid'; // Replace with your Account SID
const authToken = 'your_auth_token';   // Replace with your Auth Token
const twilioNumber = 'your_twilio_number'; // Replace with your Twilio phone number

const client = new twilio(accountSid, authToken);

// Function to send OTP
function sendOtp(phoneNumber, otp) {
    return client.messages.create({
        body: `Your OTP is: ${otp}`,
        to: phoneNumber,       // Recipient's phone number
        from: twilioNumber     // Your Twilio phone number
    });
}

module.exports = {
    sendOtp
};
