const {Router} = require('express');
const sendMail = require('../../Email');
const sendWhatsApp = require('../../WhatsApp');
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
    const whappMsg = `Hola ${nombre}\nTu dispositivo ${dispositivo} \n\n ${mensaje}`;

    //const resWhApp = await sendWhatsApp(whappMsg, whappTo)

    sendMail(
        correo, 
        'Seguimiento de tu pedido de Chipsi',
        `<h1>Hola ${nombre}</h1>
        <h2>Tu dispositivo ${dispositivo}  </h2>
        <p>${mensaje} </p>`,
        (resMail)=>{
            console.log(resMail)
            res.json({email: resMail});
        }
    );

}

router.route('/')
    .post(notificar)
    
module.exports = router;