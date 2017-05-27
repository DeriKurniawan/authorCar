'use strict';
module.exports = function(sequelize, DataTypes) {
  var Driver = sequelize.define('Driver', {
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Driver;
};