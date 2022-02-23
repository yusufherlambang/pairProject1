'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShoppingCart.belongsTo(models.User)
      ShoppingCart.belongsTo(models.Apparel)
    }
  }
  ShoppingCart.init({
    item: DataTypes.STRING,
    style: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    ApparelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShoppingCart',
  });
  return ShoppingCart;
};