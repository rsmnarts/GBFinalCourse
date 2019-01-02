'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    underscored: true,
  });
  product.associate = function(models) {
    product.hasMany(models.order, {
      foreignKey: 'product_id',
      as: 'products'
    })
  };
  return product;
};