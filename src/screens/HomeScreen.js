import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, FlatList } from 'react-native';

import { SearchBar } from '../components/SearchBar';
import { PRIMARY_COLOR } from '../helpers/constants';
import { UserThumbnail } from '../components/UserThumbnail';

const STATUSBAR_HEIGHT = StatusBar.currentHeight || 20;

export default class HomeScreen extends Component {
  usersArray = [
    {
      name: 'Emmanuel Musonant',
      username: 'Musonant',
      imageUrl: 'https://themusonant.files.wordpress.com/2019/06/the-musonant.png?w=300',
    },
    { name: 'David Jones', username: 'gregory' },
    { name: 'Stone Philip', username: 'adjacent' },
    { name: 'Stone Philip', username: 'adjacent' },
  ];

  viewProfile = username => {
    this.props.navigation.push('Profile', { username });
  };

  render() {
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
          <FlatList
            data={this.usersArray}
            renderItem={({ item }) => (
              <UserThumbnail
                redirect={() => this.viewProfile('username')}
                name={item.name}
                username={item.username}
                imageUrl={item.imageUrl}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
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
