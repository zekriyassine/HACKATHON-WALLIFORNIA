require('dotenv').config();
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

// Substitute your Twilio AccountSid and ApiKey details
const ACCOUNT_SID = process.env.TWILIO_ACCOUNTSID;
const API_KEY_SID = process.env.TWILIO_APIKEY;
const API_KEY_SECRET = process.env.TWILIO_APISECRET;

// Create an Access Token
const accessToken = new AccessToken(
  ACCOUNT_SID,
  API_KEY_SID,
  API_KEY_SECRET
);

// Set the Identity of this token
accessToken.identity = 'user';

// Grant access to Video
const grant = new VideoGrant();
grant.room = 'video_call';
accessToken.addGrant(grant);

// Serialize the token as a JWT
const jwt = accessToken.toJwt();
console.log(jwt);