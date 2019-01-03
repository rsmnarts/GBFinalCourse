import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from "redux";
import { reducer as reducerFrom } from 'redux-form';

import RootNavigator from '../../navigators/RootNavigator'
import product from './product'

const reducerRouter = createNavigationReducer(RootNavigator)

export default reducers = combineReducers({
	form: reducerFrom,
	router: reducerRouter,
	product: product
})