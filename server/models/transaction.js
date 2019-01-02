'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transaction', {
    total: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  transaction.associate = function(models) {
    transaction.hasMany(models.order, {
      foreignKey: 'transaction_id'
    })
  };
  return transaction;
};