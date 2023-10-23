'use strict';

const categoriasJson = require("../../data/categorias.json");

let categoriasArray = categoriasJson.map(categoria => {
  let categorias = {
    nombre: categoria.nombre,
    productoId: categoria.productoId,
    createdAt: new Date,
    updatedAt: new Date
  }
  return categorias
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Categorias', categoriasArray, {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Categorias', null, {});

  }
};
