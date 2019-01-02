const product = require('../models').product;

module.exports = {
	
	async index({ res }) {
		return await product
			.findAll({})
			.then(product => res.status(200).send(product))
			.catch(error => res.status(400).send(error))
	},

	async store(req, res) {
		return await product
			.create(req.body)
			.then(product => res.status(201).send(product))
			.catch(error => res.status(400).send(error))
	}
	
}