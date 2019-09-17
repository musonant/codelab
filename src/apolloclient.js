import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { AsyncStorage } from 'react-native';

import { resolvers, typeDefs } from './resolvers';

const cache = new InMemoryCache();

export const createClient = (accessToken = '') => {
  const link = new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    cache,
    link,
    typeDefs,
    resolvers,
  });

  return client;
};
