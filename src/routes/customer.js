const express = require('express'); //aqui volvemos a llamae express
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/register', customerController.save);

//ruta para irme al home 
router.get('/home', (req, res) => {
    res.render('home'); // renderiza la vista llamada home.ejs
});
module.exports = router;
