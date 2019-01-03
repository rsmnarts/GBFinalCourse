import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import middlewares from './middlewares';

export default store = createStore(
	reducers,
	applyMiddleware(...middlewares)
)