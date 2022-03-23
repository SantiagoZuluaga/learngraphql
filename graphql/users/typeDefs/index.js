const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Company {
    id: ID
    name: String
    country: String
    state: String
    city: String
  }

  type User {
    id: ID
    name: String
    email: String
    company: Company
    role: String
  }

  input UserInput {
    name: String
    email: String
    company: String
    role: String
  }

  type Query {
    users: [User]
    user(
      id: ID!
      ): User
  }
  
  type Mutation {
    createUser(
      input: UserInput
    ): User
    updateUser(
      id: ID!
      input: UserInput
    ): User
    deleteUser(
      id: ID!
    ) : Boolean
  }
`;

module.exports = {
  typeDefs
}