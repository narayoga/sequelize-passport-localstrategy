'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
    // static #encrypt = (password) => bcrypt.hashSync(password, 10)
    // static register = ({username, password}) => {
    //   const hashPassword = this.#encrypt(password)
    //   return this.create({
    //     username, 
    //     password : hashPassword
    //   })
    // }

    checkPassword = (password) => bcrypt.compareSync(password, this.password)
    static authenticate = async ({username,password}) => {
      try {
        const user = await this.findOne({ where: { username }})
        if (!user){
          return Promise.reject("invalid")
        }
        const isPasswordValid = user.checkPassword(password)
        if (!isPasswordValid){
          return Promise.reject("invalid")
        }
        return Promise.resolve(user)
        
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
  admin.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'admin',
  });
  return admin;
};