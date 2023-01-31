

const express = require('express')
const app = express();
require("dotenv").config()
var path = require('path');


require("./db/db");


const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const static_path = path.join(__dirname);
app.use(express.static(static_path));

app.use(cors({
    origin: "*",
}));

app.use(express.static('public')) 


// const SibApiV3Sdk = require('sib-api-v3-sdk');
// const defaultClient = SibApiV3Sdk.ApiClient.instance;

// let apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = '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';

// let apiInstance = new SibApiV3Sdk.TransactionalSMSApi();

// let sendTransacSms = new SibApiV3Sdk.SendTransacSms();

// sendTransacSms = {
//     "sender":"ggg",
//     "recipient":"971582155414",
//     "content":"string",
// };

// apiInstance.sendTransacSms(sendTransacSms).then(function(data) {
//   console.log('API called successfully. Returned data: ' + JSON.stringify(data));
// }, function(error) {
//   console.error(error);
// });

// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure

const accountSid = "ACf44e754169d4de6b9d12933a273dcf79";
const authToken = "d764273c95ae3fcaee5499303de63571";
const client = require("twilio")(accountSid, authToken);

app.post("/send_sms",(req,res) =>{

  let {name, date, time, number} = req.body
  client.messages
  .create({ body: `Dear ${name}, you have been registered with the Kite Workshop on ${date} at ${time} PM. Kindly make your way towards the Kite Workshop area 5 minutes before the session. We look forward to seeing you soon!`, from: "THH", to: `${number}` })
  .then(message => console.log(message.sid))
  .catch(err => console.log(err));
})




var PORT = process.env.PORT || 4000;
 
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})


