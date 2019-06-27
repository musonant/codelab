import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: 'bearer dc1089285d905e917fbe3fd8b4e6b04884602743',
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
