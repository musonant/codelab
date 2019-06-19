import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Platform,
  FlatList
} from 'react-native';

import { SearchBar } from './src/components/SearchBar';
import { PRIMARY_COLOUR, SECONDARY_COLOR } from './src/helpers/constants';
import { UserThumbnail } from './src/components/UserThumbnail';

const STATUSBAR_HEIGHT = StatusBar.currentHeight || 20;

export default class App extends Component {
  usersArray = [
    { name: 'Emmanuel Musonant', username: 'Musonant' },
    { name: 'David Jones', username: 'gregory' }
  ];
  render() {
    return (
      <View style={styles.container}>
        {Platform.os === 'android' && (
          <StatusBar
            style={styles.statusBar}
            backgroundColor={PRIMARY_COLOUR}
          />
        )}
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Codelab</Text>
          </View>
          <View style={styles.contentArea}>
            <SearchBar />
            <Text style={styles.title}>Java Developers In Lagos</Text>

            <FlatList
              data={this.usersArray}
              renderItem={({ item }) => (
                <UserThumbnail name={item.name} username={item.username} />
              )}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT
  },
  header: {
    backgroundColor: SECONDARY_COLOR,
    height: 80,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 20,
    paddingBottom: 20,
    color: '#ffffff',
    fontWeight: '500'
  },
  contentArea: {
    paddingHorizontal: 30
  },
  title: {
    fontWeight: '500',
    marginTop: 10,
    fontSize: 16
  }
});
