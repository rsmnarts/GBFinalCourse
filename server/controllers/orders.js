const order = require('../models').order;

module.exports = {

	async index({ res }) {
		return await order
			.findAll({
				include: [{
					all: true
				}]
			})
			.then(order => res.status(200).send(order))
			.catch(error => res.status(400).send(error));
	},

	async store(req, res) {
		return await order
			.create(req.body)
			.then(order => res.status(201).send(order))
			.catch(error => res.status(400).send(error));
	},

	async update(req, res) {
		return await order
			.findById(req.params.id, {
				include: [{
					all: true
				}]
			})
			.then(order => {
				if (!order) {
					return res.status(404).send({
						message: 'Data orders not found'
					});
				}

				return order
					.update({
						qty: req.body.qty || order.qty
					})
					.then(() => res.status(200).send(order))
					.catch(error => res.status(400).send(error))
			})
			.catch(error => res.status(400).send(error));
	},

	async delete(req, res) {
		return await order
			.findById(req.params.id)
			.then(order => {
				if (!order) {
					return res.status(404).send({
						message: 'Data orders not found'
					});
				}

				return order
					.destroy()
					.then(() => res.status(204).send({
						message: 'Data is Deleted'
					}))
					.catch(error => res.status(400).send(error))
			})
			.catch(error => res.status(400).send(error));
	}

}