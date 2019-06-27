import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  View,
  TouchableHighlight,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';

import CustomButton from '../components/Button';
import ArrowLeft from '../assets/img/arrow_left.png';
import GithubIcon from '../assets/img/github_icon.png';
import { PRIMARY_COLOR } from '../helpers/constants';

export default class Profile extends Component {
  goBack = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    const source = this.props.source || { uri: null };
    return (
      <SafeAreaView styles={styles.mainContainer}>
        <ImageBackground source={source} style={styles.photo}>
          <TouchableHighlight onPress={this.goBack} style={styles.goBackBtn}>
            <View style={[styles.positionCenter, styles.arrowContainer]}>
              <Image source={ArrowLeft} style={styles.backArrow} />
            </View>
          </TouchableHighlight>
        </ImageBackground>
        <View>
          <Text style={styles.mainTitle}>Peter Ransom</Text>
          <View style={styles.bioSection}>
            <View style={[styles.positionCenter, styles.username]}>
              <Ionicons name="logo-github" size={25} style={styles.gitIcon} />
              <Text style={styles.usernameText}>username</Text>
            </View>
            <Text style={styles.bioText}>
              When we sniff after dead rats, {'\n'} It is not because we enjoy the deadly aroma
            </Text>
          </View>
          <View style={styles.stats}>
            <View style={[styles.positionCenter, styles.statsColumn]}>
              <View style={[styles.positionCenter, styles.statsCount]}>
                <Text>423</Text>
              </View>
              <Text>Repositories</Text>
            </View>
            <View style={[styles.positionCenter, styles.statsColumn]}>
              <View style={[styles.positionCenter, styles.statsCount]}>
                <Text>323</Text>
              </View>
              <Text>Starred</Text>
            </View>
          </View>
          <View style={styles.actionButtons}>
            <CustomButton style={styles.button} text="Share" pressHandler={() => {}} />
            <CustomButton style={styles.button} text="Github Profile" pressHandler={() => {}} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const styles = StyleSheet.create({
  mainContainer: {},
  actionButtons: {
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  mainTitle: {
    fontSize: 25,
    color: '#47525E',
    textAlign: 'center',
    margin: 10,
  },
  stats: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statsCount: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#bbb',
    borderRadius: 25,
    minWidth: 50,
    height: 50,
    padding: 10,
    marginBottom: 10,
  },
  bioSection: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#bbb',
    borderRadius: 10,
    padding: 25,
    paddingBottom: 30,
    marginHorizontal: 30,
    marginTop: 20,
  },
  bioText: {
    textAlign: 'center',
    color: '#47525E',
  },
  username: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -34,
    marginBottom: 20,
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    marginHorizontal: 20,

    minHeight: 25,
  },
  usernameText: {
    textAlign: 'center',
    color: '#47525E',
    fontSize: 16,
  },
  gitIcon: {
    marginRight: 10,
  },
  photo: {
    width: '100%',
    height: 300,
    backgroundColor: '#DDEDF0',
  },
  goBackBtn: {
    alignSelf: 'flex-start',
    height: 20,
  },
  arrowContainer: {
    height: 40,
    width: 40,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#ffffff80',
    borderRadius: 20,
  },
  backArrow: {
    height: 20,
    width: 20,
  },
  positionCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
