'use strict';
module.exports = function(sequelize, DataTypes) {
  var Report = sequelize.define('Report', {
    car_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    driver_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Report;
};