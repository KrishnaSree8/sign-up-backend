const express = require('express')
const router = express.Router()
const userSchema = require('../models/userSchema')
var nodemailer = require('nodemailer');

router.post('/signup', (request, response) =>{
    const signedUpUser = new userSchema({
        userName: request.body.userName,
        email: request.body.email,
        password : request.body.password
    })

    const sendEmail = (data) =>{
        console.log(data)
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'krishh4325@gmail.com',
              pass: 'krish@561'
            }
          });
          
          var mailOptions = {
            from: 'krishh4325@gmail.com',
            to: data.email,
            subject: 'Signed up successfully',
            text: `Account created successfully with user name ${data.userName}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
    
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
    sendEmail({
        userName: request.body.userName,
        email: request.body.email,
        password : request.body.password
    })
})

router.post('/signin', (request, response) =>{
  console.log(request)
  db.mySchemas.find({email : request.email})
})


module.exports = router