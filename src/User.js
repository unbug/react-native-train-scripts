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

class User extends Component {
  componentDidMount(){
    this.props.onReady(this.props.data.name + ' is ready!');
  }
  render() {
    const user = this.props.data;
    return (
      <View>
        <Text>
          score: {this.props.score},
          type: {this.props.type},
          Name: {user.name},
          Age: {user.age}
        </Text>
      </View>
    );
  }
}
//dufaultProps
User.propTypes = {score: React.PropTypes.number};
User.defaultProps = {score: 0};

//export component
export default User;

