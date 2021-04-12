'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('transactions',
      'clientId',
      {
        type: Sequelize.FLOAT,
        reference: {
          model: 'clients',
          key: 'id'
        }
      });
  },

  down: queryInterface => {
    return queryInterface.removeColumn(
      'transactions',
      'clientId'
    );
  }
};
