const express = require('express');
const router = express.Router();

//Exportamos el metodo
const customerController = require('../controllers/customerController');

//Ponemos la ruta
router.get('/', customerController.list);

//Agregar gastos fijos
router.post('/gastosf', customerController.savegastosf);
//Eliminar gastos fijos 
router.get('/deletegastos/:id', customerController.deletegastosf);
//Actualizar gastos fijos
router.get('/updategastosf/:id', customerController.updategastosf);
router.post('/updategastosf/:id', customerController.newgastosfijos);


//Agregar gastos variables 
router.post('gastosV', customerController.savegastosV)
module.exports = router;