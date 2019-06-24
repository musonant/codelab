import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Text>Profile Screen</Text>
        <Button title="go home" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}
