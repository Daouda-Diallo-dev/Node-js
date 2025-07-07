const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ton.email@gmail.com',
    pass: 'ton_mot_de_passe_ou_app_password'
  }
});

const mailOptions = {
  from: 'ton.email@gmail.com',
  to: 'destinataire@example.com',
  subject: 'Test Email depuis Node.js',
  text: 'Ceci est un test d\'envoi d\'email avec Node.js et Nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Erreur :", error);
  }
  console.log('Email envoyé : ' + info.response);
});
