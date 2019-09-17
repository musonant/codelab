import React from 'react';
import { Text, AsyncStorage, ActivityIndicator, View } from 'react-native';
import { createClient } from '../apolloclient';

export default class LoaderScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    // AsyncStorage.removeItem('userToken');

    const {
      navigation: { navigate },
    } = this.props;
    const token = await AsyncStorage.getItem('userToken');
    navigate(token ? 'Home' : 'Auth', { client: createClient(token) });
  };

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator />
        <Text>Please wait</Text>
      </View>
    );
  }
}
