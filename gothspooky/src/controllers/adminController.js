const path = require('path');
const fs = require('fs');
let productos = require("../data/productos.json");
let usuarios = require("../data/usuarios.json");
const productosRuta = path.join(__dirname, "../data/productos.json");

module.exports = {
    admin: (req, res) => {
        res.render('admin/admin', {
            productos,
            usuarios
        });
    },
    vistaCrear: (req, res) => {
        res.render('admin/crear');
    },
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
    }
}