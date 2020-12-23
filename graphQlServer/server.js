var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const cors = require('cors')

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
server.use(graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}));

server.listen(4000);
console.log('Running server Graphql at http://localhost:4000');