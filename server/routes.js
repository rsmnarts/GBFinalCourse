const productController = require('./controllers').products;
const orderController = require('./controllers').orders;
const transactionController = require('./controllers').transactions;

module.exports = (app) => {
	app.get('/', (req, res) => res.status(200).send({
		message: 'Welcome to the jungle'
	}));

	app.get('/products', productController.index);
	app.post('/product', productController.store);

	app.get('/orders', orderController.index);
	app.post('/order', orderController.store);
	app.put('/order/:id', orderController.update);
	app.delete('/order/:id', orderController.delete);

	app.get('/transactions', transactionController.show)
	app.get('/transaction/:id', transactionController.show);
	app.post('/transaction', transactionController.store);
}