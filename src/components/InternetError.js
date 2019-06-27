import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

import internetIcon from '../assets/img/internet.png';

const InternetError = () => (
  <View style={styles.container}>
    <Image source={internetIcon} />
    <Text style={styles.text}>Your internet connection is unstable</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: '#aaaaaa50',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    color: '#e28c8c',
  },
});

export default InternetError;
