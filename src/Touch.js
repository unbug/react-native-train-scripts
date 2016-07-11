/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  DeviceEventEmitter
} from 'react-native';


var listener = DeviceEventEmitter.addListener('keyboardWillShow', (e) =>{
  console.log('keyboardWillShow event is fired!');
});

class Touch extends Component {
  handlePress(){
    console.log('press');
  }
  handleLongPress(){
    console.log('longPress');
  }
  handleChangeText(){
    console.log('changed');
  }
  render() {
    return (
      <TouchableHighlight
        onPress={this.handlePress}
        onLongPress={this.handleLongPress}>
        <View>
          <Text>Press me!</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            value="test"
            onChangeText={this.handleChangeText}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

//export component
export default Touch;

