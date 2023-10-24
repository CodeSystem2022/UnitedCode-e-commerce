'use strict';

const usuariosJson = require("../../data/usuarios.json");

let usuarios = usuariosJson.map(usuarioJson =>{
  let usuario = {

    nombre: usuarioJson.nombre,
    apellido: usuarioJson.apellido,
    email: usuarioJson.email,
    contraseña: usuarioJson.contraseña,
    nombreUsuario: usuarioJson.nombreUsuario,
    fechaDeNacimiento: usuarioJson.fechaNacimiento,
    admin: usuarioJson.admin,
    imagen: usuarioJson.imagen,
    createdAt: new Date,
    updatedAt: new Date,
    
  }
  return usuario
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Usuarios', usuarios, {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Usuarios', null, {});

  }
};
