import React from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import arrowIcon from '../assets/img/arrow_right.png';
import DEFAULT_USER_AVATAR from '../assets/img/default_user_icon.png';
import { SECONDARY_COLOR } from '../helpers/constants';

export const UserThumbnail = ({
  name, username, imageUrl, redirect,
}) => {
  const avatarSource = imageUrl ? { uri: imageUrl } : DEFAULT_USER_AVATAR;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={redirect}>
        <View style={styles.content}>
          <Image style={styles.avatar} source={avatarSource} />
          <View style={styles.info}>
            <Text style={styles.mainText}>{name}</Text>
            <Text style={styles.subText}>{username}</Text>
          </View>
          <Image style={styles.arrow} source={arrowIcon} />
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
    </View>
  );
};

UserThumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  redirect: PropTypes.func,
};

UserThumbnail.defaultProps = {
  redirect: () => {},
  imageUrl: null,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hr: {
    height: 0.3,
    backgroundColor: SECONDARY_COLOR,
    marginTop: 7,
    marginLeft: 65,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#aaa',
    borderWidth: 0.5,
    padding: 0,
  },
  info: {
    paddingLeft: 15,
    flex: 1,
  },
  mainText: {
    fontSize: 15,
  },
  subText: {
    color: '#8492A6',
    fontSize: 13,
  },
  arrow: {
    width: 25,
    height: 25,
    justifyContent: 'flex-end',
  },
});
