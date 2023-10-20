const path = require('path');
const fs = require('fs');
/* path es un módulo de node que proporciona utilidades para trabajar con rutas de archivos y directorios. Se usa para manejar y construir rutas de forma segura y compatible con diferentes sistemas operativos.
fs (FileSystem), es otro módulo que proporciona funciones para interactuar con el sistema de archivos del servidor. Leer, escribir, crear o eliminar directorios
*/
let productos = require("../data/productos.json");
let usuarios = require("../data/usuarios.json");
const productosRuta = path.join(__dirname, "../data/productos.json");

module.exports = {
    admin: (req, res) => {
        //Renderizamos la página admin y le mandamos los objetos de productos y usuarios con todos sus datos para mostrarlos en la vista.
        res.render('admin/admin', {
            productos,
            usuarios
        });
    },
    //Formulario creación de producto
    vistaCrear: (req, res) => {
        res.render('admin/crear');
    },
    //Función de crear producto
    crear: (req, res) => {
        const {nombre, descripcion, precio, categoria } = req.body
        let nuevoProducto = req.body;

        let imagenes = []
        req.files.forEach(image => {
            imagenes.push(image.filename)
        });

        nuevoProducto.id = productos.length + 1;

            nuevoProducto.nombre = nombre;
            nuevoProducto.descripcion = descripcion;
            nuevoProducto.precio = parseInt(precio);
            nuevoProducto.categoria = typeof(categoria) === 'string' ? [categoria] : categoria;
            nuevoProducto.imagen = imagenes;

            productos.push(nuevoProducto);

        fs.writeFileSync(productosRuta, JSON.stringify(productos, null ,2))
		res.redirect(`/product/${nuevoProducto.id}`)
    },
    //Formulario editar producto
    vistaEditar: (req, res) => {
        /* req.params sería para obtener información de un elemento, en este caso /productos te da el listado de todos los productos. Pero queremos ver mas información a detalle, un detalle de producto la url sería /productos/5 donde internamente nuestro path es /productos/:id, entonces a través de req.params podemos obtener el valor de id => req.params.id. */
        const { id } = req.params; //En este caso estamos utilizando "destructuring", sacamos la propiedad "id" de req.params
        /* Buscamos un producto en el JSON de productos que coincida con el ID proporcionado por la URL, una vez encontrado se guarda en la variable */
        /* find() es un método de array de JavaScript, documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find */
        const producto = productos.find(producto => producto.id === parseInt(id));
        res.render('admin/editar', { producto });
    },
    //Función editar producto
    editar: (req, res) => {
        //Fer
        /*1_ buscar el producto que se quiere editar
        2_ del req.body obtener los values de los inputs y reemplazarlos por los valores que tiene el producto en el JSON  
        3_ hacer lo mismo que en crear y redireccionar
        */
    },
    //Eliminar producto
    eliminar: (req, res) => {
        //Nico
        /* para eliminar el producto utilizar un método de array de js, en este caso filter 
        https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

        */

    }
}