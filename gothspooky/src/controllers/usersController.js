const bcrypt = require('bcryptjs');
const db = require('../database/models');

const controller = {
    vistaRegistro: (req, res) => {
        res.render('users/register');
    },
    registro: (req, res) => {
        
        const { nombre, apellido, email, fechaDeNac, contraseña, nombreUsuario } = req.body;
        
        db.Usuario.create({
            nombre: nombre,
            apellido: apellido,
            email: email,
            contraseña: bcrypt.hashSync(contraseña, 12),
            nombreUsuario: nombreUsuario,
            fechaDeNacimiento: fechaDeNac,
            admin: 0,
            imagen: "no-image.png" //de momento imagen estática
        })
        .then(() => {
            res.send("Usuario creado exitosamente. Renderizar vista login y enviar el email para usarlo desde el html");
        })
        .catch(error => {
            res.send("Error al crear usuario");
            console.log(error);
        });

    },
    vistaLogin: (req, res) => {
        res.render('users/login')
    }, 
    login:(req, res) =>{
        
    }
};

module.exports = controller;