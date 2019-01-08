import React, { Component } from "react";
import { connect } from 'react-redux';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Footer, Icon } from 'native-base';

import { qty0Cart, qty1Cart } from '../../publics/redux/actions/cart'

class Cart extends Component {
	_keyExtractor = (item, index) => item.id.toString();
	
  _renderItem = ({ item }) => (

		<View style={{ flexDirection: 'row' }}>
			<Image source={{ uri: item.image_url }} style={{ height: 100, width: 100 }}/>
			<View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 5 }}>
				<Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.name.length <= 25 ? item.name : item.name.substr(0,25) + '...'}</Text>
				<Text style={{ fontSize: 20 }}>{this.convertToRupiah(item.price)}</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
					<TouchableOpacity onPress={() => this.props.dispatch(qty0Cart(item))}>
						<Icon name='minus' type='AntDesign' style={{ fontSize: 15 }} />
					</TouchableOpacity>
					<Text style={{ fontSize: 20, marginHorizontal: 10, top: 4 }}>{ item.qty ? item.qty : 1 }</Text>
					<TouchableOpacity onPress={() => this.props.dispatch(qty1Cart(item))}>
						<Icon name='plus' type='AntDesign' style={{ fontSize: 15 }} />
					</TouchableOpacity>
				</View>
			</View>
		</View>

	);

	convertToRupiah = number => {
		var rupiah = '';		
		var angkarev = number.toString().split('').reverse().join('');
		for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
		return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
	}

	render(){
		const { cart } = this.props;

		return (
			<Container>
				<Content>
					<FlatList
						data={cart.carts}
						keyExtractor={this._keyExtractor}
						renderItem={this._renderItem}
						style={{
							marginTop: 10
						}}
					/>
				</Content>
				<Footer style={{ backgroundColor: 'white', elevation: 9 }}>
					<Text style={{ fontSize: 30, justifyContent: 'flex-end' }}>{this.convertToRupiah(cart.price)}</Text>
				</Footer>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	cart: state.cart
})

export default connect(mapStateToProps)(Cart)