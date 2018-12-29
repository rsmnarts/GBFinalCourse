'use strict'

const Orders = use('App/Models/Order')

class OrderController {

	async index({ response }) {
		const orders = await Orders.query().with('product').fetch()
		return response.json(orders)
	}

	async delete({ params, response }) {
		const order = await Orders.find(params.id)
		if (!order) {
		  return response.status(404).json({
		    data: 'Resource not found'
		  })
		}
		const info = Orders.delete()
		return response.status(200).json({info, order})
	}

	async store({ request, response }) {
		const orders = await Orders.create(request.all())
		return response.status(201).json(orders)
	}

	async update({ params, request, response }) {
		const order = await Orders.find(params.id)
		if (!order) {
		  return response.status(404).json({
		    data: 'Resource not found'
		  })
		}

		order.qty = request.input('qty')

		const orders = order.save()
		return response.status(201).json({orders, order})
	}

}

module.exports = OrderController
