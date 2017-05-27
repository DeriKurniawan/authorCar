'use strict';

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
    return queryInterface.bulkInsert('Cars', [{
      name: 'Avanza',
      manufacture: 'Toyota',
      category: 'Mini Bus',
      silinder: '1500 cc',
      image: 'https://upload.wikimedia.org/wikipedia/id/thumb/c/c2/Avanza_1.3_G.jpg/250px-Avanza_1.3_G.jpg',
      description: 'Mobil Keluarga yang nyaman dan irit',
      status: true,
      price: 500000,
      author: 'PT. Prima Maju Sentosa',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Agya',
      manufacture: 'Toyota',
      category: 'Mini Bus',
      silinder: '1000 cc',
      image: 'http://assets.kompas.com/data/photo/2014/01/29/1105390Agya-TRD780x390.jpg',
      description: 'Mobil Keluarga yang nyaman dan irit',
      status: true,
      price: 250000,
      author: 'Aulya Cahya Pratama',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Yaris',
      manufacture: 'Toyota',
      category: 'Mini Bus',
      silinder: '1500 cc',
      image: 'http://image.priceprice.k-img.com/global/images/product/cars/Toyota_Yaris/Toyota_Yaris_L_1.jpg',
      description: 'Mobil Keluarga yang nyaman dan irit',
      status: true,
      price: 350000,
      author: 'CV. Karya Maju Sentosa',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Alphard',
      manufacture: 'Toyota',
      category: 'Mini Bus',
      silinder: '2000 cc',
      image: 'http://www.nararentcar.com/wp-content/gallery/Mobil-kami/sewa-rental-alphard-jakarta.jpg',
      description: 'Mobil Keluarga yang mewah dan luas',
      status: true,
      price: 900000,
      author: 'CV. Megah Banget',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'New Fortuner',
      manufacture: 'Toyota',
      category: 'Mini Bus',
      silinder: '2000 cc',
      image: 'https://news.hargatop.com/wp-content/uploads/2016/01/Toyota-All-New-Fortuner-terbaru-2016.jpg',
      description: 'Mobil Keluarga yang hebat dan tangguh',
      status: true,
      price: 800000,
      author: 'PT. Prima Maju Sentosa',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Rush',
      manufacture: 'Toyota',
      category: 'Mini Bus',
      silinder: '1500 cc',
      image: 'http://image.priceprice.k-img.com/global/images/product/cars/Toyota_Yaris/Toyota_Yaris_L_1.jpg',
      description: 'Mobil Keluarga yang nyaman dan bertenaga',
      status: true,
      price: 450000,
      author: 'CV. Megah Banget',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Corolla Altis',
      manufacture: 'Toyota',
      category: 'Mini Bus',
      silinder: '1500 cc',
      image: 'http://image.priceprice.k-img.com/global/images/product/cars/Toyota_Yaris/Toyota_Yaris_L_1.jpg',
      description: 'Mobil Keluarga yang nyaman dan mewah',
      status: true,
      price: 700000,
      author: 'CV. Juara Sejati',
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
