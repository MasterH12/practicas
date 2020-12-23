import * as cors drom "cors";

const express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const cors = require('cors');

var corsOptions = {
	origin:'http://localhost:3000'
}
var schema = buildSchema(`
	type Query {
		hello: String
	}
`);

var root = { 
	hello: () => {
		return 'Helo World';
	}
};

var server = express();
server.use(cors());
server.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: false,
}));

server.listen(4000);
console.log('Running server Graphql at http://localhost:4000');