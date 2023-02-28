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
        rango,
        precio
    } = req.body;

    const newCliente = new Cliente({
        id_usuario,
        nombre, 
        dispositivo,
        problema,
        correo,
        telefono,
        direccion,
        rango,
        precio
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

controller.actualizarStatus = async(req, res)=>{
    const {id} = req.params;

    const cliente = await Cliente.findById(id);
    const newStatus = cliente.status+1;
    res.json(await Cliente.findByIdAndUpdate(id,{
        status: newStatus
    }));
}

module.exports = controller;