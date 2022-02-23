'use strict';
const fs = require('fs')



module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
   let data = JSON.parse(fs.readFileSync('./data/shoppingCarts.json', 'utf-8'))
             data.forEach(el => {
             el.createdAt = new Date()
             el.updatedAt = new Date()
             })
    return queryInterface.bulkInsert('ShoppingCarts', data);
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('ShoppingCarts', null, {});
  }
};
