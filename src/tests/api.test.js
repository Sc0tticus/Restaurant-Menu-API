const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../src/schema/schema');
const resolvers = require('../src/resolvers/resolvers');

// Create a test server with our schema
const createTestServer = () => {
	return new ApolloServer({
		typeDefs,
		resolvers
	});
};

describe('Restaurant Menu API', () => {
	let testServer;

	beforeAll(() => {
		testServer = createTestServer();
	});

	it('should return all categories', async () => {
		const query = `
      query {
        categories {
          id
          name
        }
      }
    `;

		const result = await testServer.executeOperation({ query });

		expect(result.errors).toBeUndefined();
		expect(result.data).toBeDefined();
		expect(result.data.categories).toBeInstanceOf(Array);
		expect(result.data.categories.length).toBeGreaterThan(0);

		// Verify some expected categories
		const categoryNames = result.data.categories.map(c => c.name);
		expect(categoryNames).toContain('APPETIZERS');
		expect(categoryNames).toContain('ENTREES');
		expect(categoryNames).toContain('SANDWICHES');
	});

	it('should return a specific category by ID', async () => {
		const query = `
      query {
        category(id: "1") {
          name
          items {
            name
            price
          }
        }
      }
    `;

		const result = await testServer.executeOperation({ query });

		expect(result.errors).toBeUndefined();
		expect(result.data).toBeDefined();
		expect(result.data.category).toBeDefined();
		expect(result.data.category.items).toBeInstanceOf(Array);
		expect(result.data.category.items.length).toBeGreaterThan(0);
	});

	it('should return all menu items', async () => {
		const query = `
      query {
        menuItems {
          id
          name
          price
        }
      }
    `;

		const result = await testServer.executeOperation({ query });

		expect(result.errors).toBeUndefined();
		expect(result.data).toBeDefined();
		expect(result.data.menuItems).toBeInstanceOf(Array);
		expect(result.data.menuItems.length).toBeGreaterThan(0);
	});

	it('should return menu items by category', async () => {
		const query = `
      query {
        menuItemsByCategory(categoryId: "1") {
          name
          price
        }
      }
    `;

		const result = await testServer.executeOperation({ query });

		expect(result.errors).toBeUndefined();
		expect(result.data).toBeDefined();
		expect(result.data.menuItemsByCategory).toBeInstanceOf(Array);
	});

	it('should search menu items by term', async () => {
		const query = `
      query {
        search(term: "Chicken") {
          name
          description
          price
        }
      }
    `;

		const result = await testServer.executeOperation({ query });

		expect(result.errors).toBeUndefined();
		expect(result.data).toBeDefined();
		expect(result.data.search).toBeInstanceOf(Array);

		// Each returned item should contain "Chicken" in name or description
		result.data.search.forEach(item => {
			const containsSearchTerm =
				item.name.toLowerCase().includes('chicken') ||
				(item.description && item.description.toLowerCase().includes('chicken'));

			expect(containsSearchTerm).toBeTruthy();
		});
	});
});
