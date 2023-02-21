const {Router} = require('express');
const router = Router();

const Usuario = require('../models/userModel');

const obtener = async(req, res)=>{
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
}

const obtenerByMail = async(req, res)=>{
    const email = req.body.email;

    const usuarios = await Usuario.find();
    var existe = false;

    usuarios.map((u)=>{
        if(u.email == email){
            existe=true;
        }
    });

    res.json({"existe": existe})
}

const obtenerTodo = async(req, res)=>{
    const usuarios = await Usuario.find();
    res.json(usuarios);
}


router.route('/')
    .get(obtenerTodo)
    .post(obtenerByMail)

router.route('/:id')
    .get(obtener)

module.exports = router;

