'use strict';

const productosJson = require("../../data/productos.json");

let productos = productosJson.map(productoJson =>{
  let producto = {

    nombre: productoJson.nombre,
    descripcion: productoJson.descripcion,
    precio: productoJson.precio,
    stock: 1,
    createdAt: new Date,
    updatedAt: new Date
    }
    return producto
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Productos', productos, {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Productos', null, {});

  }
};
