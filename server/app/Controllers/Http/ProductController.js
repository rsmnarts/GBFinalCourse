'use strict'

const Products = use('App/Models/Product')

class ProductController {
	async index ({response}) {
		let products = await Products.all()
		return response.json(products)
	}

	async store ({request, response}) {
		const name = request.input('name')
		const price = request.input('price')
		const image_url = request.input('image_url')

		const products = new Products()
		products.name = name
		products.price = price
		products.image_url = image_url

		const product = await products.save()
		return response.status(201).json({product, products})
	}
}

module.exports = ProductController
