const nodemailer = require('nodemailer');
require('dotenv').config;


const trans = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: 'hola@chipsi.mx',
      pass: '20894114Ce@'
    }
});


/*const trans = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2cdfed175fedf0",
    pass: "a70214760987f5"
  }
});*/


const sendMail = async(to, subject, html, callback)=>{
    const message = {
        from: process.env.ZOHO_USER, // Sender address
        to: to,         // List of recipients
        subject: subject, // Subject line
        html: html
    };

    const call_back=(params)=>{
      callback(params);
    };

    var res;
    trans.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
          res = true;
        }

        call_back(res);
    });
}

module.exports = sendMail;

