'use strict'

const Orders = use('App/Models/Order')

class TransactionController {
	async show ({params, response}) {
		const order = await Orders.find(params.id)
		return response.json(order)
	}

	async store ({request, response}) {
		const order_id = request.input('order_id')
		const total = request.input('total')

		const orders = new Orders()
		orders.order_id = order_id
		orders.total = total

		const order = await orders.save()
		return response.status(201).json({order, orders})
	}

}

module.exports = TransactionController
