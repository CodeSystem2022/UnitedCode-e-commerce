const router = require('express').Router();
const { admin, vistaCrear, crear, vistaEditar } = require('../controllers/adminController');
const multerProduct = require('../middlewares/multerProduct');


/* GET users listing. */
router.get('/', admin);

///////// Creación de productos //////////
//Formulario
router.get('/crear', vistaCrear);
//Crear producto
router.post('/', multerProduct.array('imagenes'), crear);

///////// Creación de productos //////////
//:id hace referencia a una ruta dinámica, puede tomar un valor variable, es decir: /edit/1, /edit/2, etc. Este id se lo proporciona el cliente
router.get('/edit/:id', vistaEditar);
//fer

///////// Eliminar producto //////////
//Nico
module.exports = router;
