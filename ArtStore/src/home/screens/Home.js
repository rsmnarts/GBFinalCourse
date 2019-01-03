import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FlatList, Image } from 'react-native'
import {
	Container, Content, Text, Card,
	CardItem, View, Spinner
} from 'native-base'

import { all } from '../../publics/redux/actions/product'

class Home extends Component {

	componentDidMount() {
		this.props.dispatch(all());
	}

	_keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
		<Card style={{maxWidth: 175}}>
			<CardItem>
				<Image source={{uri: item.image_url}} style={{height: 145, width: 145}}/>
			</CardItem>
			<CardItem style={{flexDirection: 'column'}}>
				<View style={{flexDirection:'row',flexWrap: 'wrap'}}>
					<Text style={{fontSize: 14}}>{item.name.length <= 25 ? item.name : item.name.substr(0,25) + '...'}</Text>
				</View>
				<Text style={{left: 45}}>Rp {item.price}</Text>
			</CardItem>
		</Card>
  );

	render() {
		return (
			<Container>
        <Content>
					{this.props.product.isLoading === true ?	(
						<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
							<Spinner color='blue' />
						</View>
					) :	(
						<FlatList
							numColumns={2}
							data={this.props.product.products}
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
	product: state.product
})

export default connect(mapStateToProps)(Home)