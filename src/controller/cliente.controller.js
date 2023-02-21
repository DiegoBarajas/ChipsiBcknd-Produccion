const Cliente = require('../models/personas/clientes.model');
const controller = require('../controller/cliente.controller');

controller.obtenerTodos = async(req, res)=>{
    const cliente = await Cliente.find();

    res.json(cliente);
}


controller.subirCliente = async(req, res)=>{
    const {
        id_usuario,
        nombre, 
        dispositivo,
        problema,
        correo,
        telefono,
        direccion,
        rango
    } = req.body;

    const newCliente = new Cliente({
        id_usuario,
        nombre, 
        dispositivo,
        problema,
        correo,
        telefono,
        direccion,
        rango
    });
    
    res.json(await newCliente.save());
}

controller.obtenerUno = async(req, res)=>{
    const id = req.params.id;

    const clientes = await Cliente.findById(id);

    res.json(clientes);
}

controller.eliminarCliente = async(req, res)=>{
    const {id} = req.params;

    res.json(await Cliente.findByIdAndDelete(id));
}

module.exports = controller;