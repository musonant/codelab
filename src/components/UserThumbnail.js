import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import arrowIcon from '../assets/img/arrow_right.png';
import DEFAULT_USER_AVATAR from '../assets/img/default_user_icon.png';
import { SECONDARY_COLOR } from '../helpers/constants';

export const UserThumbnail = ({ name, username, imageUrl }) => {
  const avatarSource = imageUrl ? { uri: imageUrl } : DEFAULT_USER_AVATAR;
  return (
    <View>
      <TouchableHighlight>
        <View style={styles.container}>
          <Image style={styles.avatar} source={avatarSource} />
          <View style={styles.info}>
            <Text style={styles.mainText}>{name}</Text>
            <Text style={styles.subText}>{username}</Text>
          </View>
          <Image style={styles.arrow} source={arrowIcon} />
        </View>
      </TouchableHighlight>
      <View style={styles.hr} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  hr: {
    height: 0.3,
    backgroundColor: SECONDARY_COLOR,
    marginTop: 7,
    marginLeft: 65
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  info: {
    paddingLeft: 15,
    flex: 1
  },
  mainText: {
    fontSize: 17
  },
  subText: {
    color: '#8492A6',
    fontSize: 14
  },
  arrow: {
    width: 25,
    height: 25,
    justifyContent: 'flex-end'
  }
});
