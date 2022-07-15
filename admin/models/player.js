'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  class player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      player.belongsTo(models.guild, {
        as: "guild",
        foreignKey:"guildId", 
        targetKey: "id"
      }),
      player.hasOne(models.biodata, {
        as: "biodata",
        foreignKey:"playerId",
        targetKey: "id"
      }),
      player.hasOne(models.history, {
        as: "history",
        foreignKey:"playerId",
        targetKey: "id"
      })
    }
    static #encrypt = (password) => bcrypt.hashSync(password, 10)
    static register = ({email, password}) => {
      const hashPassword = this.#encrypt(password)
      return this.create({
         email, 
         password : hashPassword
      })
    }

    checkPassword = (password) => bcrypt.compareSync(password, this.password)
    static authenticate = async ({email,password}) => {
      try {
        const user = await this.findOne({ where: { email }})
        if (!user){
          console.log('username invalid')
          return Promise.reject("invalid")
        }
        const isPasswordValid = user.checkPassword(password)
        if (!isPasswordValid){
          console.log('password invalid')
          return Promise.reject("invalid")
        }
        return Promise.resolve(user)
        
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
  player.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    guildId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'player',
  });
  return player;
};