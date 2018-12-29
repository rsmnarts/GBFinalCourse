'use strict'

const Orders = use('App/Models/Order')

class OrderController {
	async index ({response}) {
		let orders = await Orders.all()
		return response.json(orders)
	}

	async delete ({params, response}) {
		const order = await Orders.find(params.id)
		if (!order) {
		  return response.status(404).json({
		    data: 'Resource not found'
		  })
		}
		const info = await Orders.delete()
		return response.status(200).json({info, order})
	}

	async store ({request, response}) {
		const product_id = request.input('product_id')
		const qty = request.input('qty')
		const price = request.input('price')

		const orders = new Orders()
		orders.product_id = product_id
		orders.qty = qty
		orders.price = price

		const order = await orders.save()
		return response.status(201).json({order, orders})
	}

	async update ({params, request, response}) {
		const order = await Orders.find(params.id)
		if (!order) {
		  return response.status(404).json({
		    data: 'Resource not found'
		  })
		}

		const product_id = request.input('product_id')
		const qty = request.input('qty')
		const price = request.input('price')

		order.product_id = product_id
		order.qty = qty
		order.price = price

		const orders = await order.save()
		return response.status(201).json({orders, order})
	}
}

module.exports = OrderController
