var {graphql, buildSchema} = require('graphql');

var schema = buildSchema(`
	type Query {
		name: String
		surname: String
	}
`);

var root = { 
	name: () => {
		return 'Alexander';
	},
	surname: () => {
		return 'Oses';
	}
};

graphql(schema, '{ name, surname}', root).then((response) => {
	console.log(response);
})