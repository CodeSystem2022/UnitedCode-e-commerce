const db = require('../database/models');

module.exports = {
    home: (req, res) => {
        let productosOfertas = db.Producto.findAll({
            include: [
                { model: db.Imagen,
                    as: "imagen" 
                },
                {
                    model: db.Categoria,
                    as: "categoria",
                    where: {
                        nombre: "Ofertas"
                    }
                }
            ]
        });
        let productosIngresantes = db.Producto.findAll({
            include: [
                { model: db.Imagen,
                    as: "imagen" 
                },
                {
                    model: db.Categoria,
                    as: "categoria",
                    where: {
                        nombre: "Nuevos"
                    }
                }
            ]
        });
        Promise.all([productosOfertas, productosIngresantes])
        .then(([ofertas, nuevos]) => {
            res.render("index", { ofertas, nuevos });
        })
        .catch((error) => {
            console.log(error);
        });
    }

}