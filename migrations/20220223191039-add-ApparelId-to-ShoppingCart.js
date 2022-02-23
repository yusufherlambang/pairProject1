'use strict';

module.exports = {

  up(queryInterface, Sequelize) {

    return queryInterface.addColumn('ShoppingCarts', 'ApparelId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Apparels',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  },


  down(queryInterface, Sequelize) {

    return queryInterface.removeColumn('ShoppingCarts', 'ApparelId')
  }
};
