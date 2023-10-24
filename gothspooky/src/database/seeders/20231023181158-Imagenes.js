'use strict';

const imagenesJson = require("../../data/imagenes.json");

let imagenesArray = imagenesJson.map(imagen => {
  let imagenes = {
    nombre: imagen.nombre,
    productoId: imagen.productoId,
    createdAt: new Date,
    updatedAt: new Date
  }
  return imagenes
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Imagens', imagenesArray, {});

  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Imagens', null, {});

  }
};
