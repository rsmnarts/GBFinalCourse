export const addToCart = data => ({
	type: 'ADD_CART',
	payload: data
})

export const qty1Cart = data => ({
	type: 'QTY0_CART',
	payload: data
})

export const qty0Cart = data => ({
	type: 'QTY1_CART',
	payload: data
})

export const sumPrice = data => ({
	type: 'SUM_PRICE',
	payload: data
})