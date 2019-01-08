const initialState = {
	carts: [],
	price: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CART':
			return {...state, carts: [{...action.payload, qty: 1}, ...state.carts]}
		case 'QTY0_CART':
			return {...state, carts: [{...action.payload, qty: 1--}]}
		case 'QTY1_CART':
			return {...state, carts: [{...action.payload, qty: 1++}]}
		case 'SUM_PRICE':
			return {...state, price: state.price + action.payload}
		
		default:
			return state
	}
}

// ...action.payload, qty: (!action.payload.qty ? 0 : action.payload.qty) + 1