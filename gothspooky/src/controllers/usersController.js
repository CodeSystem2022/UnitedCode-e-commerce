const bcrypt = require('bcryptjs');
const db = require('../database/models');

const controller = {
    vistaRegistro: (req, res) => {
        res.render('users/register');
    },
    registro: async (req, res) => {
        try {
            const { nombre, apellido, email, fechaDeNac, contraseña, nombreUsuario } = req.body;

            const hashedPassword = await bcrypt.hash(contraseña, 12);

            const newUser = await db.Usuario.create({
                nombre,
                apellido,
                email,
                contraseña: hashedPassword,
                nombreUsuario,
                fechaDeNacimiento: fechaDeNac,
                admin: 0,
            });

            res.send('Usuario registrado con éxito');
        } catch (error) {
            res.send('Error al crear usuario');
            console.error(error);
        }
    }
};

module.exports = controller;