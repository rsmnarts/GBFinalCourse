import React, { Component } from 'react';
import { 
	Container, Content, SwipeRow, 
	View, Text, Icon, Button 
} from 'native-base';

export class CartScreen extends Component {
  render() {
    return (
      <Container>
        <Content scrollEnabled={false}>
          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Add')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text>SwipeRow Body Text</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
              </Button>
            }
          />
        </Content>
      </Container>
    );
  }
}