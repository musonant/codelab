import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { TERTIARY_COLOR, SECONDARY_COLOR } from '../helpers/constants';

export const SearchBar = () => <TextInput style={styles.inputBar} placeholder="Search" />;

const styles = StyleSheet.create({
  inputBar: {
    backgroundColor: TERTIARY_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: -20,
    borderColor: SECONDARY_COLOR + 40,
    borderWidth: 0.5,
    borderStyle: 'solid',
  },
});
