const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const app = express();

const { typeDefs, resolvers } = require('./graphql');


(async () => {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req, res }) => {
            return {
                req,
                res
            };
        },
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        path: "/graphql"
    });

    app.listen(5000, () => {
        console.log(`Server is listening: http://localhost:${5000}`);
    });
})();