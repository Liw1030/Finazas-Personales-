const express = require('express');
const router = express.Router();

//Exportamos el metodo
const customerController = require('../controllers/customerController');

//Ponemos la ruta
router.get('/', customerController.list);


// GASTOS FIJOSS
//Agregar gastos fijos
router.post('/gastosf', customerController.savegastosf);
//Actualizar gastos fijos
router.get('/updategastosf/:id', customerController.updategastosf);
router.post('/updategastosf/:id', customerController.newgastosfijos);
//Eliminar gastos fijos 
router.get('/deletegastos/:id', customerController.deletegastosf);


// GASTOS VARIABLES
// Agregar gastos variables
router.post('/gastosv', customerController.savegastosv);

// Actualizar gastos variables
router.get('/updategastosv/:id', customerController.updategastosv);
router.post('/updategastosv/:id', customerController.newgastosvariables);

// Eliminar gastos variables
router.get('/deletegastosv/:id', customerController.deletegastosv);





module.exports = router;