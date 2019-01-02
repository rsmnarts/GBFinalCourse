'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    product_id: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER,
    qty: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    underscored: true,
  });
  order.associate = function(models) {
    order.belongsTo(models.product, {
      foreignKey: 'product_id',
      onDelete: 'CASCADE'
    });

    order.belongsTo(models.transaction, {
      foreignKey: 'transaction_id',
      onDelete: 'CASCADE'
    });
  };
  return order;
};