'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.belongsToMany(models.Producto, {
        as: "carrito",
        through: 'carritos',
        foreignKey: 'usuarioId',
        otherKey: 'productoId'
      })
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    nombreUsuario: DataTypes.STRING,
    fechaDeNacimiento: DataTypes.DATE,
    admin: DataTypes.BOOLEAN,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};