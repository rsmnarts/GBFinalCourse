import React, { Component } from 'react';
import { Image, StyleSheet, FlatList } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { 
	Container, Content, Button,
	Text, Icon
} from 'native-base';
import axios from 'axios';

export class CartScreen extends Component {

	constructor() {
    super()

    this.state = {
      text: [],
      input: ''
    }
  }

	componentDidMount(){
    axios.get('http://192.168.1.105:3333/products')
      .then(res => {
        this.setState({
          text: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
	}

	_keyExtractor = (item, index) => index.toString()
	
	_renderItem = ({item, index}) => (
		<Grid style={ styles.card }>
			<Row>
				<Col size={1}>
					<Image source={{ uri: item.image_url }} style={{ height: 100, width: 100 }}/>
				</Col>
				<Col size={2} style={{ paddingTop: 10 }}>
					<Text>{ item.name.length <= 25 ? item.name : item.name.substr(0,25) + '...'}</Text>
					<Text>Rp {item.price}</Text>
					<Grid>
						<Row>
							<Col>
								<Button small>
									<Icon name='minus' type='AntDesign' />
								</Button>
							</Col>
							<Col>
								<Button small>
									<Icon name='plus' type='AntDesign' />
								</Button>
							</Col>
						</Row>						
					</Grid>
				</Col>
			</Row>
		</Grid>
  )

  render() {
    return (
      <Container style={ styles.container }>
        <Content style={ styles.content }>
					<FlatList
						style        = {[{ flex:1 }, styles.bgCard]}
						data         = {this.state.text}
						keyExtractor = {this._keyExtractor}
						renderItem   = {this._renderItem}
					/>
        </Content>
      </Container>
    );
	}
	
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f2f2f2'
	},
	bgCard: {
		paddingHorizontal: 10
	},
	card: {
		borderRadius: 7,
		backgroundColor: 'white',
		padding: 5,
		flexDirection: 'column'
	},
	btnBuy: {
		borderRadius: 5, 
		backgroundColor: '#2390ff',
		left: 150
	}
})