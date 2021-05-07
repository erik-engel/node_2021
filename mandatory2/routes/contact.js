const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

router.post('/api/contact', (req, res) => {
  // todo send email
  let name = req.body.name;
  let email = req.body.email;
  let subject = req.body.subject;
  let text = req.body.text;

  // object to send
  let mail = {
    from: email,
    to: process.env.EMAIL,
    subject: subject,
    text: 'From: ' + email + '\n' + text,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('something went wrong ..');
    } else {
      res.status(200).send('Email successfully sent ..');
    }
  });

  console.log(name, email, subject, text);
  res.redirect('/contact');
});

module.exports = {
  router,
};
