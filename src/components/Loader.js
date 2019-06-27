import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../helpers/constants';

export const Loader = () => (
  <ActivityIndicator size="large" color={PRIMARY_COLOR} style={styles.loader} />
);

const styles = StyleSheet.create({
  loader: {
    height: 100,
  },
});
