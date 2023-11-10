const { validationResult } = require('express-validator');
const db = require('../database/models');
const fs = require('fs');
const path = require('path');

const controller = {

    // Vista de administrador con listado de usuarios y productos

    admin: (req, res) => {
        let promesaProductos = db.Producto.findAll();
        let promesaUsuarios = db.Usuario.findAll();

        Promise.all([promesaProductos, promesaUsuarios])
            .then(([productos, usuarios]) => {
                res.render('admin/admin', { productos, usuarios });
            })
            .catch(error => {
                res.send("No se pudo acceder a los productos");
                console.log(error);
            });
    },

    // Vista para crear un producto

    vistaCrear: (req, res) => {
        res.render('admin/crear');
    },

    // Crear un producto

    crear: (req, res) => {
            const { nombre, descripcion, precio, categoria, envioGratis } = req.body;

            db.Producto.create({
                nombre: nombre,
                descripcion: descripcion,
                precio: parseFloat(precio),
                stock: 1,
            })
                .then(producto => {
                    if (req.files.length !== 0) {
                        let images = req.files.map(image => {
                            let item = {
                                nombre: image.filename,
                                productoId: producto.id
                            };
                            return item;
                        });

                        var promesaImagenes = db.Imagen.bulkCreate(images)
                            .then(() => console.log('Imágenes guardadas satisfactoriamente'))
                            .catch(error => console.log(error));
                    }

                    var promesaCategoria;
                    if (typeof categoria === 'string') {
                        promesaCategoria = db.Categoria.create({
                            nombre: categoria,
                            productoId: producto.id,
                        })
                            .then(() => console.log('Categoría guardada satisfactoriamente'))
                            .catch(error => console.log(error));
                    } else {
                        let categoriasACrear = [];
                        categoria.forEach(e => {
                            let item = {
                                nombre: e,
                                productoId: producto.id,
                            };
                            categoriasACrear.push(item);
                        });

                        promesaCategoria = db.Categoria.bulkCreate(categoriasACrear)
                            .then(() => console.log('Categorías guardadas satisfactoriamente'))
                            .catch(error => console.log(error));
                    }

                    Promise.all([promesaImagenes, promesaCategoria])
                        .then(() => res.redirect("/product/" + producto.id))
                        .catch(error => {
                            //res.send("No se pudo redireccionar al detalle del producto creado");
                            console.log(error);
                        });
                })
                .catch(error => {
                    //res.send("No se pudo crear el producto");
                    console.log(error);
                });
    },

    // Vista para editar un producto

    vistaEditar: (req, res) => {
        db.Producto.findOne({
            where: { id: req.params.id },
            include: [
                {
                    association: "imagen",
                },
                {
                    association: "categoria",
                }
            ],
        })
            .then(producto => {
                res.render('admin/editar', { producto });
                if (producto.categoria.includes("Ofertas")) {
                    console.log("No tiene la categoria ofertas");
                } else {
                    console.log("Si tiene la categoria ofertas");
                }
            })
            .catch(error => {
                //res.send("No se pudo obtener el producto de la base de datos");
                console.log(error);
            });
    },

    // Editar un producto

    editar: (req, res) => {
        //Busca el producto en la base de datos
        db.Producto.findOne({
            where: { id: req.params.id },
            include: [
                {
                    association: "imagen",
                },
                {
                    association: "categoria",
                },
            ],
        });
        //Obtenemos los datos que envía el administrador por el formulario
        const { nombre, descripcion, precio, categoria } = req.body;
        //Update: actualiza los datos del producto en la base de datos
        db.Producto.update({
            nombre: nombre,
            descripcion: descripcion,
            precio: parseFloat(precio)
        }, {
            where: { id: req.params.id }
        })
            .then(producto => {
                var promesaImagenes;
                if (req.files.length !== 0) {
                    let images = req.files.map(image => {
                        let item = {
                            nombre: image.filename,
                            productoId: req.params.id,
                        };
                        return item;
                    })
                    db.Imagen.destroy({
                        where: { productoId: req.params.id }
                    })
                        .then(() => {
                            promesaImagenes = db.Imagen.bulkCreate(images)
                                .then(() => console.log('Imágenes actualizadas satisfactoriamente'))
                                .catch(error => console.log(error));
                        })
                        .catch(error => {
                            //res.send("No se pudieron eliminar las imágenes anteriores");
                            console.log(error);
                        });
                } else {
                    console.log("No se agregaron imágenes nuevas a este producto");
                }

                var promesaCategoria;
                if (typeof categoria === 'string') {
                    db.Categoria.destroy({
                        where: { productoId: req.params.id }
                    })
                        .then(() => {
                            console.log("Se eliminó la categoría anterior");
                        })
                        .catch(error => {
                            //res.send("No se pudo eliminar la categoría anterior");
                            console.log(error);
                        });
                    promesaCategoria = db.Categoria.create({
                        nombre: categoria,
                        productoId: req.params.id
                    })
                        .then(() => console.log('Categoría actualizada satisfactoriamente'))
                        .catch(error => console.log(error));
                } else {
                    let categoriasACrear = [];
                    categoria.forEach(e => {
                        let item = {
                            nombre: e,
                            productoId: req.params.id
                        };
                        categoriasACrear.push(item);
                    })
                    db.Categoria.destroy({
                        where: { productoId: req.params.id }
                    })
                        .then(() => {
                            promesaCategoria = db.Categoria.bulkCreate(categoriasACrear)
                                .then(() => console.log('Categorías actualizadas satisfactoriamente'))
                                .catch(error => console.log(error));
                        })
                        .catch(error => {
                            //res.send("No se pudieron eliminar las categorías anteriores");
                            console.log(error);
                        });
                }

                Promise.all([promesaImagenes, promesaCategoria])
                    .then(() => res.redirect("/product/" + req.params.id))
                    .catch(error => {
                        //res.send("No se pudo redireccionar al detalle del producto editado");
                        console.log(error);
                    });
            })
            .catch(error => {
                //res.send("No se pudo editar el producto");
                console.log(error);
            });
    },

    // Eliminar un producto

    eliminar: async (req, res) => {
        try {
            const producto = await db.Producto.findByPk(req.params.id, {
                include: [
                    {
                        association: "imagen",
                    },
                    {
                        association: "categoria",
                    }
                ]
            });
    
            if (!producto) {
                return res.status(404).send("Producto no encontrado");
            }
    
            // Inicia una transacción
            const transaction = await db.sequelize.transaction();
    
            try {
             // Elimina el archivo de imagen del producto si existen imágenes
                if (producto.imagen && producto.imagen.length > 0) {
                    const imagePath = path.join(__dirname, '../../public/images/products', producto.imagen[0].nombre);
                    if (fs.existsSync(imagePath)) {
                        fs.unlinkSync(imagePath);
                    }
                }
    
                // Elimina el producto de la base de datos dentro de la transacción
                await producto.destroy({ transaction });
    
                // Confirma la transacción
                await transaction.commit();
    
                return res.redirect("/admin");
            } catch (error) {
                // Revierte la transacción en caso de error
                await transaction.rollback();
                return res.status(500).send("Error al eliminar producto: " + error.message);
            }
        } catch (error) {
            return res.status(500).send("Error al buscar el producto: " + error.message);
        }
    }
};

module.exports = controller;
