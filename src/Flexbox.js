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
} from 'react-native';

class Flexbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>200X100</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.text}>remain space</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>200X100</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  header: {
    backgroundColor: 'red'
  },
  main: {
    width: 80,
    backgroundColor: 'blue'
  },
  footer: {
    backgroundColor: 'green'
  },
  text: {
    color: '#ffffff',
    fontSize: 40
  }
});
export default Flexbox;

