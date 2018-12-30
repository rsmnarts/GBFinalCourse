import React, { Component } from 'react';
import { Image, StyleSheet, FlatList } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { 
	Container, Content, Button,
	Text, Footer
} from 'native-base';
import axios from 'axios';

export class HomeScreen extends Component {

	constructor() {
    super()

    this.state = {
      text: [],
      input: ''
    }
  }

	componentDidMount(){
    axios.get('http://35.187.247.31/products')
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
					<Button small style={ styles.btnBuy }>
						<Text>Beli</Text>
					</Button>
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
		marginVertical: 5,
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