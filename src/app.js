const express = require('express');
const cors = require('cors');
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");
const app = express();
const dotenv = require('dotenv');
const Stripe = require('stripe');


//Asignacion del servidor
app.set('port', process.env.PORT || 4000);

//Middlewares
dotenv.config()
app.use(cors());
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    limits: {fileSize: 50 * 2024 * 1024}
}))
app.use(cors({ origin: true }))

//Configuracion de Cloudnary
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME
                ? process.env.CLOUDINARY_NAME
                : 'dzajaf1mv', 
    api_key: process.env.CLOUDINARY_API_KEY
                ? process.env.CLOUDINARY_API_KEY
                : '414987381238598', 
    api_secret: process.env.CLOUDINARY_SECRET 
                ? process.env.CLOUDINARY_SECRET
                : '9gnctjNZf5N3hGdIkwKej-4w5-A'
  });

//Ruta
app.get('/', (req, res)=>{
    res.send("Hola este es el Backend de Chipsi");
});

//API de las DB
app.use('/api/clientes', require('./routes/personas/clientes.routes'));
app.use('/api/notificacion', require('./routes/servicios/notificacion.routes'));


module.exports = app;