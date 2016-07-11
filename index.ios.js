/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import InheritanceStyle from './src/InheritanceStyle';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InheritanceStyle parentColor={styles.blue}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blue: {
    flex: 1,
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('testRn', () => Main);
