'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apparel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Apparel.init({
    name: DataTypes.STRING,
    style: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    ShoppingCartId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Apparel',
  });
  return Apparel;
};