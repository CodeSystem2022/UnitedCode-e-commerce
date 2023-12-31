'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Producto.hasMany(models.Imagen, {
        as: "imagen",
        foreignKey: "productoId"
      });

      Producto.hasMany(models.Categoria, {
        as: "categoria",
        foreignKey: "productoId"
      });

      Producto.belongsToMany(models.Usuario, {
        as: 'productoCarrito',
        through: 'carritos',
        foreignKey: 'productoId',
        otherKey: 'usuarioId'
      });
    }
  }
  Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    stock: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};