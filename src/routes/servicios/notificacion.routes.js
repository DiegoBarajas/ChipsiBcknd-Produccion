const {Router} = require('express');
const sendMail = require('../../Email');
const {sendWhApp} = require('../../WhatsApp')
const router = Router();

const notificar = async(req, res)=>{

    const {
        nombre,
        correo,
        telefono,
        dispositivo,
        problema,
        mensaje
    } = req.body

    const whappTo = '52'+telefono;
    console.log(whappTo);

    const resWhApp = await sendWhApp(whappTo, nombre, dispositivo, mensaje);

    sendMail(
        correo, 
        'Seguimiento de tu pedido de Chipsi',
        `<h1>Hola ${nombre}</h1>
        <h2>Tu dispositivo ${dispositivo}  </h2>
        <p>${mensaje} </p>`,
        (resMail)=>{
            console.log(resMail)
            res.json({
                email: resMail,
                whatsapp: resWhApp
            });
        }
    );

}

router.route('/')
    .post(notificar)
    
module.exports = router;