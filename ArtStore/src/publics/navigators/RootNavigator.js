import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../../home/screens/Home';
import Cart from '../../home/screens/Cart';

const RootNavigator = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		}
	},
	Cart: {
		screen: Cart
	}
})

export default createAppContainer(RootNavigator);