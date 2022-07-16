'use strict';
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('biodata', [
      {
        username: 'anthoni888',
        first_name: 'anthoni',
        last_name: 'spencer',
        birthDate: '1990-01-20',
        phone: '0407178800',
        playerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'baron sai',
        first_name: 'baron',
        last_name: 'de morgan',
        birthDate: '1990-02-10',
        phone: '0493592960',
        playerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'charli_kuyhaa',
        first_name: 'charlie',
        last_name: 'kuyha',      
        birthDate: '1995-12-24',
        phone: '0483363139',
        playerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'dugongxXx',
        first_name: 'wu tao',
        last_name: 'gong',    
        birthDate: '1998-08-28',
        phone: '015664714226',
        playerId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'bahrululululu',
        first_name: 'fahrul',
        last_name: 'maudi ayu',
        birthDate: '1992-03-01',
        phone: '08636833670',
        playerId: 5,
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
    return queryInterface.bulkDelete('biodata',null, {});
  }
};
