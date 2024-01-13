var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kgdzmn@gmail.com',
    pass: 'hahahaha'
  }
});

var mailOptions = {
  from: 'kgdzmn@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: "vous n'aurez pas mon mot de passe hahahahaa"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});