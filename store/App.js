import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Button, Icon } from 'native-base'

import { HomeScreen, CartScreen } from './src/screens'

const AppNavigator = createStackNavigator({
  Home: {
		screen: HomeScreen,
		navigationOptions: ({ navigation }) => ({
			title: `Open Stall`,
			headerRight: (
				<Button 
					transparent style={{ top: 5, right: 10 }}
					onPress={() => navigation.navigate('Cart')}
				>
					<Icon name='shoppingcart' type='AntDesign' />
				</Button>
			)
		})
	},
	Cart: {
		screen: CartScreen
	}
});

export default createAppContainer(AppNavigator);