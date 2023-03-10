const {Router} = require('express');
const router = Router();

const { obtenerTodos, obtenerUno, subirCliente, eliminarCliente, actualizarStatus } = require('../../controller/cliente.controller');

router.route('/')
    .post(subirCliente)
    .get(obtenerTodos)

router.route('/:id')
    .get(obtenerUno)
    .delete(eliminarCliente)
    .put(actualizarStatus)

module.exports = router;