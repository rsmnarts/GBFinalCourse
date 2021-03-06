'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Transaction extends Model {
	orders() {
		return this.belongToMany('App/Models/Orders')
	}
}

module.exports = Transaction
