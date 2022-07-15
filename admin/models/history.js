'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      history.belongsTo(models.player, {
        as: "player",
        foreignKey:"playerId", 
        targetKey: "id"
      })
    }
  }
  history.init({
    win: DataTypes.INTEGER,
    lose: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'history',
  });
  return history;
};