'use strict';
const bcrypt = require('bcrypt');
const encrypt = (password) => {
  let hashPassword = bcrypt.hashSync(password,10)
  return hashPassword
}

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('admins', [
      {
        username: 'superuser',
        password: encrypt('admin'),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('admins',null, {});
  }
};