import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema/schema.js';
import resolvers from './resolvers/resolvers.js';

async function startApolloServer() {
	const app = express();
	const server = new ApolloServer({
		typeDefs,
		resolvers
	});

	await server.start();
	server.applyMiddleware({ app });

	const PORT = process.env.PORT || 4000;
	app.listen(PORT, () => {
		console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
	});
}

startApolloServer().catch(error => {
	console.error('Error starting server:', error);
});
