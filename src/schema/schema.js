const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type MenuItemVariation {
		id: ID!
		name: String!
		price: Float!
	}

	type MenuItem {
		id: ID!
		name: String!
		description: String
		price: Float!
		variations: [MenuItemVariation]
		category: Category!
	}

	type Subcategory {
		id: ID!
		name: String!
		description: String
		items: [MenuItem]!
	}

	type Category {
		id: ID!
		name: String!
		description: String
		notes: [String]
		subcategories: [Subcategory]!
		items: [MenuItem]!
	}

	type Query {
		categories: [Category]!
		category(id: ID!): Category
		menuItem(id: ID!): MenuItem
		menuItems: [MenuItem]!
		menuItemsByCategory(categoryId: ID!): [MenuItem]!
		search(term: String!): [MenuItem]!
	}
`;
