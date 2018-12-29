'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('products', 'ProductController.index')
Route.post('product', 'ProductController.store')

Route.get('orders', 'OrderController.index')
Route.post('order', 'OrderController.store')
Route.patch('order/:id', 'OrderController.update')
Route.delete('order/:id', 'OrderController.delete')

Route.post('transaction', 'TransactionController.store')
Route.get('transaction/:id', 'TransactionController.show')
