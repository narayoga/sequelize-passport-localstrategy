'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class server extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // server.hasMany(models.to_other, {foreignKey: "serverId", sourceKey: "id"})
      server.belongsToMany(models.guild, {
        through: models.to_other, 
        as: 'guild',
        foreignKey: "guildId"
      })
    }
  }
  server.init({
    name: DataTypes.STRING,
    capacity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'server',
  });
  return server;
};