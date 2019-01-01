'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
	product() {
		return this.belongsTo('App/Models/Product')
	}
	transaction() {
	  return this.belongsTo('App/Models/Transaction')
	}
}

module.exports = Order
