import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

export default class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Profile Screen</Text>
        <Button title="go home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }
}

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
