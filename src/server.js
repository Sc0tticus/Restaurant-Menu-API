const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolvers');

async function startApolloServer() {
	// Create Express app
	const app = express();

	// Create Apollo Server
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		introspection: true,
		playground: true
	});

	// Start the Apollo Server
	await server.start();

	// Apply middleware to Express
	server.applyMiddleware({ app });

	// Set port
	const PORT = process.env.PORT || 4000;

	// Start server
	app.listen(PORT, () => {
		console.log(`Server running at http://localhost:${PORT}`);
		console.log(`GraphQL playground available at http://localhost:${PORT}${server.graphqlPath}`);
	});
}

startApolloServer().catch(err => {
	console.error('Error starting server:', err);
});
