require('dotenv').config();

const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

// Used when generating any kind of tokens
const twilioAccountSid = process.env.TWILIO_ACCOUNTSID;
const twilioApiKey = process.env.TWILIO_APIKEY;
const twilioApiSecret = process.env.TWILIO_APISECRET;

const identity = 'user';

// Create Video Grant
const videoGrant = new VideoGrant({
  room: 'video_call',
});

// Create an access token which we will sign and return to the client,
// containing the grant we just created
const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret);
token.addGrant(videoGrant);
token.identity = identity;

// Serialize the token to a JWT string
console.log(token.toJwt());

module.exports = token.toJwt()