const express = require('express'); //aqui volvemos a llamae express
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);

module.exports = router;
