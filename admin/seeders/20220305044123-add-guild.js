'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('guilds', [
      {
        name: 'non-affiliation',
        description: 'noob',
        win: 0,
        lose: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'asmodeus',
        description: 'sacred Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, repudiandae. Consectetur esse consequuntur voluptates explicabo!',
        win: 700,
        lose: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'orang_bijak',
        description: 'taat pajak Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, repudiandae. Consectetur esse consequuntur voluptates explicabo!',
        win: 522,
        lose: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'hun dan',
        description: '痛苦本身就是很多痛苦 他们跌倒了，他们必须被拒绝。 我将解释主要乐趣的后果！ ',
        win: 666,
        lose: 1313,
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
     return queryInterface.bulkDelete('guilds',null, {});
  }
};
