import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const NoticeDisplay = ({ text, color }) => (
  <View style={[styles.container, { borderColor: '#cccccc' }]}>
    <Text style={[styles.text, { color }]}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'dotted',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
  },
});

NoticeDisplay.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

NoticeDisplay.defaultProps = {
  text: 'Something is not right',
  color: '#bbb',
};

export default NoticeDisplay;
