import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FlatList, Image, TouchableOpacity } from 'react-native'
import {
	Container, Content, Text, Card, Header,
	CardItem, View, Spinner, Button, Icon,
	Right, Left
} from 'native-base'

import { all } from '../../publics/redux/actions/product'
import { addToCart, sumPrice } from '../../publics/redux/actions/cart'

class Home extends Component {

	componentDidMount() {
		this.props.dispatch(all());
	}

	_keyExtractor = (item, index) => item.id;
	
  _renderItem = ({ item }) => (
		<TouchableOpacity onPress={() => this._addToCart(item)}>
			<Card style={{ maxWidth: 175 }}>
				<CardItem>
					<Image source={{ uri: item.image_url }} style={{ height: 145, width: 145 }}/>
				</CardItem>
				<CardItem style={{ flexDirection: 'column' }}>
					<View style={{ flexDirection:'row',flexWrap: 'wrap', justifyContent: 'flex-start' }}>
						<Text style={{ fontSize: 14 }}>{item.name.length <= 25 ? item.name : item.name.substr(0,25) + '...'}</Text>
						<Text>{this.convertToRupiah(item.price)}</Text>
					</View>
				</CardItem>
			</Card>
		</TouchableOpacity>
	);

	_addToCart = item => {
		this.props.dispatch(addToCart(item))
		this.props.dispatch(sumPrice(item.price))

		// const data = this.props.cart.carts;
		// const findData = item.id
		// const finder = data.map((e) => e.id ).indexOf(findData)

		// alert(JSON.stringify(item))
		// alert(JSON.stringify(finder))

		// if (finder === -1){
		// 	// this.props.dispatch(sumPrice(item.price))
		// }
		
	}

	convertToRupiah = number => {
		var rupiah = '';		
		var angkarev = number.toString().split('').reverse().join('');
		for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
		return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
	}

	render() {
		const { navigation, products, cart } = this.props;

		return (
			<Container>
				<Header>
					<Left>
						<Text style={{ fontSize: 20, color: 'white' }}>ArtStore</Text>
					</Left>
					<Right>
						<TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 15 }}>
							<View style={{ flexDirection: 'row' }}>
								<Icon name='store' type='MaterialCommunityIcons' style={{ color: 'white' }} />
								<Text style={{ fontSize: 10, color: 'white' }}>{cart.carts.length}</Text>
							</View>
						</TouchableOpacity>	
					</Right>	
				</Header>
        <Content>
					{products.isLoading === true ?	(
						<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
							<Spinner color='blue' />
						</View>
					) :	(
						<FlatList
							numColumns={2}
							data={products}
							keyExtractor={this._keyExtractor}
							renderItem={this._renderItem}
						/>
					)}
        </Content>
      </Container>
		)
	}

}

const mapStateToProps = state => ({
	products: state.product.products,
	cart: state.cart
})

export default connect(mapStateToProps)(Home)