// var Sib = require('sib-api-v3-sdk');
// var defaultClient = Sib.ApiClient.instance;

const express = require('express')
const app = express();
require("dotenv").config()
var path = require('path');

// dotenv.config({path: './.env' });

require("./db/db");

var User = require('./model/User')
const  ObjectID = require('mongodb').ObjectId;

var cron = require('node-cron');

const schedule = require('node-schedule');

var request = require('request');


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







const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';

let apiInstance = new SibApiV3Sdk.TransactionalSMSApi();

let sendTransacSms = new SibApiV3Sdk.SendTransacSms();

sendTransacSms = {
    "sender": "AhmedFayaz",
     "recipient": "971582155414",
     "content": "Hello this is a test email"
};

apiInstance.sendTransacSms(sendTransacSms).then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, function(error) {
  console.error(error);
});














var PORT = process.env.PORT || 4000;
 
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})


