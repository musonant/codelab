import { gql } from 'apollo-boost';

export const findDevelopersQuery = gql`
  query SearchJsDvelopersInLagos($queryString: String!) {
    search(query: $queryString, type: USER, first: 10) {
      repositoryCount
      edges {
        node {
          ... on User {
            name
            bio
            url
            login
            avatarUrl
            repositories {
              totalCount
            }
            starredRepositories {
              totalCount
            }
          }
        }
      }
    }
  }
`;

export const getDevsLocal = gql`
  {
    users @client {
      search {
        repositoryCount
      }
    }
  }
`;
