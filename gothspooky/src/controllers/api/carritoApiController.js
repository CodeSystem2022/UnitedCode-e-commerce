const mercadopago = require("mercadopago");
require('dotenv').config();

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
    }
};

module.exports = controller;