var Sib = require('sib-api-v3-sdk');
var defaultClient = Sib.ApiClient.instance;

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






const MAIL_FROM = process.env.MAIL_FROM;
const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = process.env.MAIL_PORT;
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASS = process.env.MAIL_PASS;


const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const static_path = path.join(__dirname);
app.use(express.static(static_path));

app.use(cors({
    origin: "*",
}));

app.use(express.static('public')) 


var PORT = process.env.PORT || 4000;
 
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})


