'use strict'

const Products = use('App/Models/Product')

class ProductController {

	async index({ response }) {
		const products = await Products.all()
		return response.json(products)
	}

	async store({ request, response }) {
		const products = await Products.create(request.all())
		return response.status(201).json(products)
	}
	
}

module.exports = ProductController
