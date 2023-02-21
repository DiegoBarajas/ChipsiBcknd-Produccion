const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },

    telefono: {Type: String, required: false},
    codigo: {Type: String, required: false},

    emailToken: {Type: String,}, // token unico que se envia porr corre electrronico.
    isVerified: {type: Boolean, required: true, default: false}, // la verificacion comienza en un status de falso.
    date: {type: Date, default:Date.now()},
    cartera: {type: Number},
    beneficios: {type: Boolean},

    isAdmin: { type: Boolean, required: true, default: false }, // opte por hacerlo con un booleano porque me es mas facil pasarlo como un argumento en otros archivos.
    isTendero: { type: Boolean, required: true, default: false },
    isDelivery: { type: Boolean, required: true, default: false },
    isModerador: { type: Boolean, required: true, default: false },
    isTaller: { type: Boolean, required: true, default: false },
},{
    timestamps: true    
});

module.exports = model('usuario', schema);