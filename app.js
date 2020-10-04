
const bodyparser= require("body-parser");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
var express = require('express');
var app = express();
var port = process.env.PORT || 3200;

//give our info from google to app

var auth = {
    type: 'oauth2',
    user: yourstest03,
    clientId: 835319197644-atkdt6hbrhuuhee2g5jfmrm54eflbs6a.apps.googleusercontent.com,
    clientSecret: aSVQxWHNLm8gpNNUpwPHY1ah,
    refreshToken: ARIBfYy0W8CgYIARAAGAQSNwF-L9IroEIy4MssaU3pIlw7hyta8M_lAJKVLB_R2g29VDVVCBcQNNGHXL4OZJ2hCdor9D5m8vc,
};

app.use(express.json());
app.use(express.urlencoded());
app.use(express.multipart());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/send', function(req, res){
    response = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    }
 
    var mailOptions = {
        from: req.body.name,
        to: 'lakshayagagrwal9@gmail.com',
        subject: 'My site contact from: ' + req.body.name,
        text: req.body.message,
        html: 'Message from: ' + req.body.name + '<br></br> Email: ' +  req.body.email + '<br></br> Message: ' + req.body.message,
    };
  var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: auth,
    });
    transporter.sendMail(mailOptions, (err, res) => {
        if (err) {
            return console.log(err);
        } else {
            console.log(JSON.stringify(res));
        }
    });
  })
  // start the server
  app.listen(port);