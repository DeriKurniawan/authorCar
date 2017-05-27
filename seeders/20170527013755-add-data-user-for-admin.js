'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 11;

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      fullname: 'Deri Kurniawan',
      username: 'derikurnawan',
      email: 'deri@gmail.com',
      telp: '085719012371',
      password: bcrypt.hashSync('123456', bcrypt.genSaltSync(saltRounds)),
      role: 'admin',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      fullname: 'Nifa',
      username: 'nifa',
      email: 'nifa@gmail.com',
      telp: '087889556970',
      password: bcrypt.hashSync('123456', bcrypt.genSaltSync(saltRounds)),
      role: 'admin',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
