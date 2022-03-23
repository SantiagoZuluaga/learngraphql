const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: String
    name: String
    email: String
    company: String
    role: String
  }

  type Query {
    create(
      name: String!
      email: String!
      company: String!
      role: String!
    ): User
    find: [User]
    findOne(
      id: String
      ): User
  }
`;

module.exports = {
  typeDefs
}