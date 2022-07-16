'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('servers', [
      {
        name: 'asia',
        capacity: '199/200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'australia',
        capacity: '110/200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'europe',
        capacity: '10/200',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('servers',null, {});
  }
};
