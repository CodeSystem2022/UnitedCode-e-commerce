const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('products/products');
});

// Ruta del formulario de carrito
/* const mysql = require('mysql'); 

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

// Configuración de la base de datos
const connection = mysql.createConnection({
  host: 'nombre_del_servidor',
  user: 'nombre_de_usuario',
  password: 'contraseña',
  database: 'nombre_de_la_base_de_datos',
});

 connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
}); 

// Manejo del envío del formulario
app.post('/procesar', (req, res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const dni = req.body.dni;
  const telefono = req.body.telefono;
  const domicilio = req.body.domicilio;
  const CP = req.body.CP;
  const email = req.body.email;

  const sql = 'INSERT INTO tabla (nombre, email) VALUES (?, ?)'//datos a completar;
  connection.query(sql, [nombre, email], (err, result) => {
    if (err) {
      console.error('Error al insertar datos: ' + err);
    } else {
      console.log('Datos insertados correctamente');
    }
    
  });
});
<<<<<<< HEAD
 */
module.exports = router;
=======

app.listen(3000, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
 */
>>>>>>> 0d69ff9c379e81287c03ad3a93001cd58d5ef33b
