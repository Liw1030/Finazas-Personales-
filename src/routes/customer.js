const express = require('express'); //aqui volvemos a llamae express
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/register', customerController.save);


module.exports = router;
