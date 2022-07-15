'use strict';

const date = () => {
  let nowDate = new Date();
  let realDate = nowDate.getFullYear()+'-'+nowDate.getMonth()+'-'+nowDate.getDate();
  return realDate
} 

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('histories', [
      {
        win: 10,
        lose: 0,
        playerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        win: 7,
        lose: 1,
        playerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        win: 13,
        lose: 7,
        playerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        win: 1,
        lose: 3,
        playerId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        win: 5,
        lose: 5,
        playerId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('histories',null, {});
  }
};
