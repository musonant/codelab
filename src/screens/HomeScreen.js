import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
  Button,
} from 'react-native';

import { SearchBar } from '../components/SearchBar';
import { PRIMARY_COLOUR, SECONDARY_COLOR } from '../helpers/constants';
import { UserThumbnail } from '../components/UserThumbnail';

const STATUSBAR_HEIGHT = StatusBar.currentHeight || 20;

export default class HomeSreen extends Component {
  usersArray = [
    {
      name: 'Emmanuel Musonant',
      username: 'Musonant',
      imageUrl: 'https://themusonant.files.wordpress.com/2019/06/the-musonant.png?w=300',
    },
    { name: 'David Jones', username: 'gregory' },
    { name: 'David Jones', username: 'gregory' },
    { name: 'David Jones', username: 'gregory' },
  ];

  visitProfile = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <View style={styles.container}>
        {Platform.os === 'android' && (
          <StatusBar style={styles.statusBar} backgroundColor={PRIMARY_COLOUR} />
        )}
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Codelab</Text>
          </View>
          <View style={styles.contentArea}>
            <SearchBar />
            <Text style={styles.title}>Javascript Developers In Lagos</Text>
            <FlatList
              data={this.usersArray}
              renderItem={({ item }) => (
                <UserThumbnail
                  redirect={() => this.visitProfile}
                  name={item.name}
                  username={item.username}
                  imageUrl={item.imageUrl}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  header: {
    backgroundColor: SECONDARY_COLOR,
    height: 80,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    paddingBottom: 20,
    color: '#ffffff',
    fontWeight: '500',
  },
  contentArea: {
    paddingHorizontal: 30,
  },
  title: {
    fontWeight: '400',
    marginTop: 10,
    fontSize: 14,
  },
});
