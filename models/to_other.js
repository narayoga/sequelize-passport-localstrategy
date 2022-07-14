'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class to_other extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // to_other.belongsTo(models.guild, {foreignKey: "guildId", targetKey: "id"})
      // to_other.belongsTo(models.server, {foreignKey: "serverId", targetKey: "id"})
    }
  }
  to_other.init({
    guildId: DataTypes.INTEGER,
    serverId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'to_other',
  });
  return to_other;
};