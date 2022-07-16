'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('biodata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('biodata');
  }
};