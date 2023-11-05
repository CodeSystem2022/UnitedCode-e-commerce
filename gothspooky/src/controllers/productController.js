const db = require('../database/models');

const controller = {
    detail: async (req, res) => {
        try {
            let producto = await db.Producto.findByPk(req.params.id, {
                include: [{association: "imagen"}]
            })
            if(producto !== null) {
                res.render("products/detail", {producto});
            } else {
                res.send("El producto no existe")
            }
        } catch (error) {
            res.send("Error al requerir el producto de la base de datos");
            console.log("Error al requerir el producto de la base de datos", error);
        }
    }
}

module.exports = controller