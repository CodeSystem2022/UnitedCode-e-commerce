const { Op } = require('sequelize');
const db = require('../database/models');

const controller = {
    category: (req, res)=> {
        const {categoria} = req.params;
        db.Categoria.findOne({
            where: {
                nombre: { [Op.substring]: "%" + categoria + "%" }
            }
        })
        .then((categoriaEncontrada) => {
            if (categoriaEncontrada) {
                db.Producto.findAll({
                    include: [
                        { model: db.Imagen,
                            as: "imagen" 
                        },
                        {
                            model: db.Categoria,
                            as: "categoria",
                            where: {
                                nombre: categoriaEncontrada.nombre
                            }
                        }
                    ]
                })
                .then((productos) => {
                    res.render("products/categoria", { productos, categoria });
                })
                .catch((error) => {
                    res.send("Error al obtener los productos asociados a la categoría" + categoria);
                    console.log(error);
                });
            } else {
                res.send("No se encontró esa categoría");
            }
        })
        .catch((error) => {
            res.send("Error al buscar la categoría en la base de datos");
            console.log(error);
        });
        

    }

}

module.exports = controller;
