'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {
  dialogflow,
  Permission,
} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

app.intent('zekr', (conv) => {
   const audioSound = 'https://drive.google.com/uc?id=1ReWjpbGLEBDXa_x4HdhOE9rkYxGgZYgI';
   conv.close(`<speak> Umrah Doaa and Zekr <audio src="${audioSound}"></audio></speak>`);
 
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);