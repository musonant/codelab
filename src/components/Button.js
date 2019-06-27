import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { PRIMARY_COLOR } from '../helpers/constants';

const CustomButton = ({
  text, pressHandler, uppercase, style,
}) => {
  const additionalStyles = processStyles(uppercase);
  return (
    <TouchableHighlight
      underlayColor="#254E5B"
      style={[styles.button, style]}
      onPress={pressHandler}
    >
      <Text style={[styles.buttonText, additionalStyles]}>{text}</Text>
    </TouchableHighlight>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  pressHandler: PropTypes.func,
  uppercase: PropTypes.bool,
  style: PropTypes.object,
};

CustomButton.defaultProps = {
  pressHandler: () => {},
  uppercase: false,
};

const processStyles = uppercase => ({
  textTransform: uppercase ? 'uppercase' : 'capitalize',
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY_COLOR,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 17,
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default CustomButton;
