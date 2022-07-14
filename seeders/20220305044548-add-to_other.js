'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('to_others', [
      {
        guildId: 2,
        serverId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        guildId: 2,
        serverId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        guildId: 1,
        serverId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        guildId: 1,
        serverId: 3,
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
     return queryInterface.bulkDelete('to_others',null, {});
  }
};
