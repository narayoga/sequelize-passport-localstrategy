'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('to_others', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      guildId: {
        type: Sequelize.INTEGER,
        references: {
          model:{tableName: "guilds"},
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      serverId: {
        type: Sequelize.INTEGER,
        references: {
          model:{tableName: "servers"},
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('to_others');
  }
};