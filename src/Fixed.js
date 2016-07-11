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
  ScrollView
} from 'react-native';

class Fixed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tbar}>
          <Text style={styles.text}>Fixed top bar</Text>
        </View>
        <ScrollView style={styles.main}>
          <View style={styles.item}><Text style={styles.text}>1</Text></View>
          <View style={styles.item}><Text style={styles.text}>2</Text></View>
          <View style={styles.item}><Text style={styles.text}>3</Text></View>
        </ScrollView>
        <View style={styles.bbar}>
          <Text style={styles.text}>Fixed bottom bar</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tbar: {
    width: 375,
    height: 100,
    borderBottomWidth: 5,
    borderColor: 'black',
    backgroundColor: 'red'
  },
  main: {
    flex: 1
  },
  item: {
    height: 200,
    width: 375,
    marginTop: 10,
    backgroundColor: 'green'
  },
  bbar: {
    width: 375,
    height: 100,
    borderTopWidth: 5,
    borderColor: 'black',
    backgroundColor: 'red'
  },
  text: {
    color: '#ffffff',
    fontSize: 40
  }
});

export default Fixed;

