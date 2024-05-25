require('dotenv').config({ path: './src/.env' });

const express = require('express');
const { json } = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;


// Configuración de Nodemailer con las variables de entorno
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

app.use(json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_USERNAME,
    subject: 'Nuevo mensaje de contacto',
    text: `
      Nombre: ${name}
      Correo electrónico: ${email}
      Mensaje: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).send('Correo electrónico enviado correctamente');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

module.exports = app;