const router = require('express').Router();
const { vistaRegistro, registro, vistaLogin } = require('../controllers/usersController');

router.get('/register', vistaRegistro);

router.post('/register', registro);

router.get('/login', vistaLogin);

module.exports = router;