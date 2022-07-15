'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      biodata.belongsTo(models.player, {
        as: "player",
        foreignKey:"playerId", 
        targetKey: "id"
      })
    }
  }
  biodata.init({
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    phone: DataTypes.STRING,
    playerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'biodata',
  });
  return biodata;
};