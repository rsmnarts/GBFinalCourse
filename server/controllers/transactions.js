const transaction = require('../models').transaction;

module.exports = {

	async show( req, res ) {
		return await transaction
			.findById(req.params.id, {
				include: [{
					all: true
				}]
			})
			.then(transaction => res.status(200).send(transaction))
			.catch(error => res.status(400).send(error))
	},

	async store(req, res) {
		return await transaction
			.create(req.body)
			.then(transaction => res.status(201).send(transaction))
			.catch(error => res.status(400).send(error))
	}

}