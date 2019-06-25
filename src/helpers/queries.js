import { gql } from 'apollo-boost';

export const findDevelopersQuery = gql`
  query SearchJsDvelopersInLagos($queryString: String!) {
    search(query: $queryString, type: USER, first: 100) {
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
