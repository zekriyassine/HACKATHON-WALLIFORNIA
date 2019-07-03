require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNTSID;
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.video.rooms
            .create({
               enableTurn: true,
               statusCallback: '',
               type: 'peer-to-peer',
               uniqueName: 'video_call'
             })
            .then(room => console.log(room.sid));