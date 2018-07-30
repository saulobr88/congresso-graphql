const express = require('express');
const mongoose = require('./config/mongoose');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const db = mongoose();
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: global,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
})