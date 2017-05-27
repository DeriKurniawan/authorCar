'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

    */
      Example:
      return queryInterface.bulkInsert('Drivers', [{
        name: 'Aditya Mamuju',
        age: '21',
        gender: 'Pria',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, {
        name: 'Fathur Rachman',
        age: '28',
        gender: 'Pria',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, {
        name: 'Suep Pangestu',
        age: '26',
        gender: 'Pria',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, {
        name: 'Ipik Kurniawan',
        age: '48',
        gender: 'Pria',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, {
        name: 'Evi Sudaryanto',
        age: '37',
        gender: 'Wanita',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, {
        name: 'Hana Fauziyah',
        age: '34',
        gender: 'Wanita',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, {
        name: 'Raisa',
        age: '23',
        gender: 'Wanita',
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
