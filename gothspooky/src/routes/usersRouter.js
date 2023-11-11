const router = require('express').Router();
const { vistaRegistro, registro, vistaLogin, login } = require('../controllers/usersController');
const app = require('../app');


router.get('/register', vistaRegistro);

router.post('/register', registro);

router.get('/login', vistaLogin);

router.post('/login', login);



module.exports = router;