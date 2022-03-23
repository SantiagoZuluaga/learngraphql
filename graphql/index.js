const { typeDefs: typeDefsUsers, resolvers: resolversUsers } = require('./users');

const typeDefs = [typeDefsUsers];
const resolvers = [resolversUsers];

module.exports = {
    typeDefs,
    resolvers
};