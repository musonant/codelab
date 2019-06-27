import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import { findDevelopersQuery } from '../helpers/queries';
import { UserThumbnail } from './UserThumbnail';
import { Loader } from './Loader';
import NoticeDisplay from './NoticeDisplay';
import InternetError from './InternetError';

export default class UsersList extends Component {
  viewProfile = username => {
    this.props.navigation.push('Profile', { username });
  };

  render() {
    return (
      <View>
        <Query
          query={findDevelopersQuery}
          variables={{ queryString: 'location:lagos language:javascript' }}
        >
          {({ loading, error, data }) => {
            if (error) {
              if (
                error.networkError.toString().includes('Network request failed')
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
                    redirect={() => this.viewProfile(item.node.login)}
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
    );
  }
}

UsersList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
