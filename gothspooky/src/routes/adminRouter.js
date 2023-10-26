const router = require('express').Router();
const { admin, vistaCrear, crear, vistaEditar, editar, eliminar } = require('../controllers/adminController');
const multerProduct = require('../middlewares/multerProduct');


/* GET users listing. */
router.get('/', admin);

///////// Creación de productos //////////
//Formulario
router.get('/crear', vistaCrear);
//Crear producto
router.post('/', multerProduct.array('imagenes'), crear);

///////// Edición de producto //////////
//:id hace referencia a una ruta dinámica, puede tomar un valor variable, es decir: /edit/1, /edit/2, etc. Este id se lo proporciona el cliente
router.get('/edit/:id', vistaEditar);
router.put('/edit/:id', editar );
//fer

///////// Eliminar producto //////////
router.post('/eliminar/:id', eliminar); // Agrega la ruta para eliminar un producto
module.exports = router;
