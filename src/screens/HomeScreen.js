import React, { Component } from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import { SearchBar } from '../components/SearchBar';
import { PRIMARY_COLOR } from '../helpers/constants';
import UsersList from '../components/UsersList';

const STATUSBAR_HEIGHT = StatusBar.currentHeight || 20;

export default class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          style={styles.statusBar}
          barStyle="light-content"
          backgroundColor={PRIMARY_COLOR}
        />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Codelab</Text>
        </View>
        <View style={styles.contentArea}>
          <SearchBar />
          <Text style={styles.title}>Javascript Developers In Lagos</Text>
        </View>
        <UsersList navigation={navigation} />
      </SafeAreaView>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  header: {
    backgroundColor: PRIMARY_COLOR,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    paddingBottom: 25,
    color: '#ffffff',
    fontWeight: '500',
  },
  contentArea: {
    paddingHorizontal: 30,
  },
  title: {
    fontWeight: '500',
    marginTop: 20,
    fontSize: 16,
    color: 'grey',
  },
});
