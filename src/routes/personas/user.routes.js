const express = require('express');
const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');
const expressAsyncHandler = require('express-async-handler');
const { isAuth, isAdmin, isTendero, isTaller, isDelivery, isModerador, generateToken } = require('../../utils.js');
const dotenv = require('dotenv')

const sendConfirmationEmail = require('../../config/emailer.js');
const { Router } = require('express');
const Cupon = require('../models/cupones.js');


const userRouter = express.Router();

userRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);

userRouter.get(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

userRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isAdmin = Boolean(req.body.isAdmin);
      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

userRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.email === 'admin@chipsi.mx') {
        res.status(400).send({ message: 'Can Not Delete Admin User' });
        return;
      }
      await user.remove();
      res.send({ message: 'User Deleted' });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        // console.log('el usuario ingreso satisfactoriamente')
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);
userRouter.post(
  '/registro',
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
      emailToken: require('crypto').randomBytes(64).toString('hex'),
      isVerified: false
    });
    const user = await newUser.save();

    const id = user.id.split('');
    let cod = '';
    console.log(id)
    for(let i=6; i>0; i--){
      cod += id[id.length-i];
    }

    await User.findByIdAndUpdate(user.id,{
      telefono: req.body.telefono,
      codigo: cod.toUpperCase(), 
      cartera: 0,
      beneficios: false
    });

    const newCupon = new Cupon({
      nombre: 'Cupón personal de '+user.name, 
      codigo: cod.toUpperCase(), 
      descuento: 25, 
      automatico: false, 
      unico: false,
      primera: true,
      referido: true
  });

  await newCupon.save();
    
    const usu = await User.findById(user.id);
    // Disparar la función sendConfirmationEmail
    sendConfirmationEmail(user.email, user.name, user.emailToken, usu.telefono);



    res.send({
      _id: user._id,
      name: user.name,
      telefono: usu.telefono,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);

userRouter.get('/verify-email', expressAsyncHandler(async(req, res) => {
  try { 
    const user = await User.findOne({ emailToken: req.query.token});
    if (user) {
      user.emailToken = null; user.isVerified = true;
      console.log(isVerified)
      await user.save()
      res.redirect('http://localhost:3000/gracias')
    }
  } catch (error) {
    res.redirect('http://localhost:3000/register')
    console.log('el correo electronico no esta verificado')
    res.status(401).send({ message: 'Usuario no verificado' });
  }
}))

userRouter.put(
  '/perfil',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) { // && user.isVerified == true
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }

      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  })
);

module.exports = userRouter;