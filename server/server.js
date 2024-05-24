import express, { json } from 'express';
import { createTransport } from 'nodemailer';

const app = express();
const port = process.env.PORT || 3000;

// Configuración de Nodemailer
const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'marioivanmorenopineda@gmail.com',
    pass: 'CHUFLETE24'
  }
});

app.use(json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'marioivanmorenopineda@gmail.com',
    to: 'marioivanmorenopineda@gmail.com',
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