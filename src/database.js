const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

const URI = process.env.MONGODB_URI
            ? process.env.MONGODB_URI
            : 'mongodb+srv://chipsi:chipsi@chipsidb.ebqzrso.mongodb.net/chipsi';

mongoose.connect(URI);

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("La base de datos de lanzó en el puerto " + URI);
});

