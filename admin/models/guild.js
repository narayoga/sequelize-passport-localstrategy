'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class guild extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      guild.hasMany(models.player, {
        as: 'user',
        foreignKey:"guildId", 
        sourceKey: "id"
      })
      // guild.hasMany(models.to_other, {foreignKey: "guildId", sourceKey: "id"})
      guild.belongsToMany(models.server, {
        as: 'server',
        through: models.to_other, 
        foreignKey: "serverId"
      })
    }
  }
  guild.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    win: DataTypes.INTEGER,
    lose: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'guild',
  });
  return guild;
};