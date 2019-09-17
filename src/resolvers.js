import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    users: [ID!]
  }

  extend type Launch {
    isInCart: Boolean!
  }

  extend type Mutation {
    addOrRemoveFromCart(id: ID!): [Launch]
  }
`;

export const resolvers = {};
