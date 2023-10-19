const router = require('express').Router();
const { admin, vistaCrear, crear } = require('../controllers/adminController');
const multerProduct = require('../middlewares/multerProduct');


/* GET users listing. */
router.get('/', admin);

///////// creacion de productos //////////
////Formulario de creacion - vista///////
router.get('/crear', vistaCrear);
///Crear producto///
router.post('/', multerProduct.array('imagenes'), crear);

module.exports = router;
