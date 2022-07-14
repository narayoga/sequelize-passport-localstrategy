'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('guilds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      win: {
        type: Sequelize.INTEGER
      },
      lose: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    // .then(()=> queryInterface.addConstraint('players', ['guildId'], {
    //   type: 'foreign key',
    //   name: 'FK_guild_player',
    //   references: { 
    //     table: 'guilds',
    //     field: 'id'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // }));
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('guilds');
  }
};