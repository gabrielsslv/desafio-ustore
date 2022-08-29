'use strict';

const { DATE } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Produtos', [{
      nome: 'Arroz',
      preco: 3.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Feijão',
      preco: 6.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('People', null, {});
  }
};
