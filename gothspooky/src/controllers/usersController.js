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
            res.send("Usuario creado exitosamente.");
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
        
        const { email, contraseña } = req.body;
        
        // Buscar el usuario en la base de datos por el correo electrónico
        db.Usuario.findOne({ where: { email: email } })
            .then(usuario => {
                if (!usuario) {
                    
                    // El correo electrónico no se encontró en la base de datos
                    res.send("Usuario no encontrado. Debe registrarse primero.");
                } else {
                    // Comparar la contraseña ingresada con la contraseña almacenada en la base de datos
                    if (bcrypt.compareSync(contraseña, usuario.contraseña)) {
                        // Contraseña válida, el usuario está autenticado
                        //res.send("Inicio de sesión exitoso");
                        res.redirect('/');
                    } else {
                        // Contraseña incorrecta
                        res.send("Contraseña incorrecta");
                    }
                }
            })
            .catch(error => {
                res.send("Error al iniciar sesión");
                console.log(error);
            });
    }
};

module.exports = controller;