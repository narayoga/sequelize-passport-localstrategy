'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      win: {
        type: Sequelize.INTEGER
      },
      lose: {
        type: Sequelize.INTEGER
      },
      playerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'players',
          key: 'id',
          as: 'playerId'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('histories');
  }
};