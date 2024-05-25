import express from 'express';
import { json } from 'express';
import { createTransport } from 'nodemailer';
import path from 'path';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;

// Ruta al archivo variables-entorno.json
const variablesEntornoPath = path.resolve(__dirname, '../variables-entorno.json');
const envConfig = JSON.parse(fs.readFileSync(variablesEntornoPath, 'utf8'));

// Configuración de Nodemailer con las variables de entorno
const transporter = createTransport({
  service: envConfig.service,
  auth: {
    user: envConfig.user,
    pass: envConfig.pass
  }
});

app.use(json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: envConfig.user,
    to: envConfig.user,
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