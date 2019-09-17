import React, { Component } from 'react';
import { View, FlatList, AsyncStorage } from 'react-native';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';

import { findDevelopersQuery } from '../helpers/queries';
import { UserThumbnail } from './UserThumbnail';
import { Loader } from './Loader';
import NoticeDisplay from './NoticeDisplay';
import InternetError from './InternetError';

export default class UsersList extends Component {
  viewProfile = user => {
    this.props.navigation.push('Profile', { user });
  };

  client = this.props.navigation.getParam('client', {});

  render() {
    return (
      <ApolloProvider client={this.client}>
        <View>
          <Query
            query={findDevelopersQuery}
            variables={{ queryString: 'location:lagos language:javascript' }}
          >
            {({ loading, error, data }) => {
              if (error) {
                if (
                  error.networkError
                    .toString()
                    .includes('Network request failed')
                ) {
                  return <InternetError />;
                }
              }

              if (loading === true) {
                return <Loader />;
              }

              if (!data) {
                return <NoticeDisplay text="We found nothing" />;
              }

              return (
                <FlatList
                  data={data.search.edges || []}
                  renderItem={({ item }) => (
                    <UserThumbnail
                      redirect={() => this.viewProfile(item.node)}
                      name={item.node.name}
                      username={item.node.login}
                      imageUrl={item.node.avatarUrl}
                    />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  style={{ paddingHorizontal: 30 }}
                />
              );
            }}
          </Query>
        </View>
      </ApolloProvider>
    );
  }
}

UsersList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
