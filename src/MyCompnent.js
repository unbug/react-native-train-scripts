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
  Image
} from 'react-native';

class MyComponent extends React.Component {
  render() {
    const txt = 'Hello';
    function say(name){
      return 'I am '+name;
    }
    return (
      <View>
        <Image style={{backgroundColor: 'red', width: 500}} source={require('./img/bg.png')}>
          <Image source={require('./img/icon.png')}/>
          <Text>
            some text!
          </Text>
        </Image>
      </View>
    );
  }
}
//export component
export default MyComponent;

