const { Op } = require('sequelize');
const db = require('../database/models');

const controller = {
    category: (req, res)=> {
        const {categoria} = req.params;
        let promesaCategorias = db.Categoria.findAll({
            where: {nombre:{ [Op.substring]: "%"+categoria+"%"}},
            include: [
                {association: "categoriaProducto"}
            ]
        })
        let promesaProductos = db.Producto.findAll({
            include: [
                {association: "imagen"},
                {association: "categoria"}
            ]
        })
        Promise.all([promesaCategorias, promesaProductos])
            .then( ([categorias, productos]) => {
                let arrayId = []
                for (let i = 0; i < categorias.length; i++) {
                    arrayId.push(categorias[i].categoriaProducto.id)
                }

                let productosFiltrados = []
                for (let i = 0; i < productos.length; i++) {
                    productosFiltrados = productos.filter(e => arrayId.includes(e.id) === true)
                    
                }

                res.render("products/products", {productos: productosFiltrados, categoria});
            })
            .catch(error => {
                res.send('No se encontraron productos con esa categoría')
                console.log(error)
            })
        

    }

}

module.exports = controller;
