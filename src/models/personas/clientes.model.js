const {Schema, model} = require('mongoose');

const schema = new Schema({
    id_usuario: {type: String, required: true},
    nombre: {type: String, required: true}, 
    dispositivo: {type: String, required: true},
    problema: {type: String, required: true},
    correo: {type: String, required: true},
    telefono: {type: String, required: true},
    direccion: {type: String, required: true},
    rango: {type: String, required: true},
    precio: {type: Number, required: true},
    status: {type: Number, default: 0}        
}, {
    timestamps: true
});

module.exports = model('clientes', schema);