const { ApolloServer } = require('apollo-server');

const mongoose = require('mongoose');
const { MONGOURI } = require('./config');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB :)');
        return server.listen({ port: 5000 });
    })
    .then(res => {
        console.log(`Server started at ${res.url}`);
    })