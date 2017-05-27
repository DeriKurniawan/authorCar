'use strict';
module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define('Car', {
    name: DataTypes.STRING,
    manufacture: DataTypes.STRING,
    category: DataTypes.STRING,
    silinder: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    author: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Car;
};
