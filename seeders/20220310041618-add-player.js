'use strict';
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('players', [
      {
        email: 'anthoni@mail.com',
        password: 'user123',
        guildId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'baron@mail.com',
        password: 'user123',
        guildId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'charlie@mail.com',
        password: 'user123',
        guildId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'dugong@mail.com',
        password: 'user123',
        guildId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'fahrul@mail.com',
        password: 'user123',
        guildId: 3,
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
    return queryInterface.bulkDelete('players',null, {});
  }
};
