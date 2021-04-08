'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('transactions',
      'APIkey',
      {
        type: Sequelize.STRING
      });
    
  },

  down: queryInterface => queryInterface.removeColumn('transactions', 'APIkey')
};
