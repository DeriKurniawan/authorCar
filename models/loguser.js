'use strict';
module.exports = function(sequelize, DataTypes) {
  var Loguser = sequelize.define('Loguser', {
    username: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Loguser;
};