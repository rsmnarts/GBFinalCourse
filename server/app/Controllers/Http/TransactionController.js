'use strict'

const Transactions = use('App/Models/Transaction')

class TransactionController {

	async show({ params }) {
		const transactions = await Transactions.query().where('id', params.id).with('orders').first()
		return response.json(transactions)
	}

	async store({ request, response }) {
		const transactions = await Transaction.create(request.all())
		return response.status(201).json(transactions)
	}

}

module.exports = TransactionController
