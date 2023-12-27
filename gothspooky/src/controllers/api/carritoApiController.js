const mercadopago = require("mercadopago");
require('dotenv').config();
const db = require('../../database/models');

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
//Token en .env
mercadopago.configure({
	access_token: "",
});

const controller = {
    preferencia: (req, res) => {

        let preference = {
            items: [
                {
                    title: req.body.description,
                    unit_price: Number(req.body.price),
                    quantity: Number(req.body.quantity),
                }
            ],
            back_urls: {
                success: "http://localhost:3000",
                failure: "http://localhost:3000",
                pending: "",
            },
            auto_return: "approved",
        };
    
        mercadopago.preferences
            .create(preference)
            .then(function (response) {
                res.json({
                    id: response.body.id,
                });
            }).catch(function (error) {
                console.log(error);
            });
        
    },
    feedback: (req, res) => {
        res.json({
            Payment: req.query.payment_id,
            Status: req.query.status,
            MerchantOrder: req.query.merchant_order_id
        });
    },
    prod: async (req, res) => {
        try {
            // Obtener el ID del producto desde los parámetros de la solicitud
            const productId = req.params.id;

            // Buscar el producto en la base de datos utilizando Sequelize
            const producto = await db.Producto.findByPk(productId, {
                include: [
                    { model: db.Imagen,
                        as: "imagen" 
                    }
                ]
            });

            // Verificar si el producto existe
            if (!producto) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            // Enviar el producto como respuesta
            res.json(producto);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
};

module.exports = controller;