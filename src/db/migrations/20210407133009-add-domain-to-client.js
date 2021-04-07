'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('clients',
      'domain',
      {
        type: Sequelize.STRING
      });
    
  },

  down: queryInterface => queryInterface.removeColumn('clients', 'domain')
};
