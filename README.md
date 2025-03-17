# Restaurant Menu GraphQL API

A GraphQL API built with Node.js that serves restaurant menu data. This project demonstrates how to structure and query menu data using GraphQL.

## Features

-   GraphQL API for restaurant menu data
-   Query categories, items, and subcategories
-   Search functionality for menu items
-   Structured handling of complex menu data
-   Support for item variations and pricing options

## Prerequisites

-   Node.js (v14 or later)
-   npm or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/restaurant-menu-api.git
cd restaurant-menu-api
```

2. Install dependencies:

```bash
npm install
```

## Running the API

Start the development server:

```bash
npm start
```

The server will run at http://localhost:4000, and the GraphQL playground will be available at http://localhost:4000/graphql

## Running Tests

Run the test suite with:

```bash
npm test
```

## Example Queries

### Get all categories:

```graphql
{
	categories {
		id
		name
		subcategories {
			name
		}
	}
}
```

### Get items for a specific category:

```graphql
{
	category(id: "1") {
		name
		items {
			name
			description
			price
		}
		notes
	}
}
```

### Get a specific menu item with variations:

```graphql
{
	menuItem(id: "1-1") {
		name
		description
		price
		variations {
			name
			price
		}
		category {
			name
		}
	}
}
```

### Search for menu items:

```graphql
{
	search(term: "chicken") {
		name
		description
		price
		category {
			name
		}
	}
}
```

## Tech Stack

-   Node.js
-   Express
-   Apollo Server (GraphQL)
-   Jest (Testing)

## Notes on Implementation

-   The API parses unstructured menu data into a structured GraphQL schema
-   Menu items are organized by categories and subcategories
-   Support for item variations (e.g., different sizes or configurations)
-   The data parsing logic handles various edge cases in the menu format

## Future Improvements

-   Add mutation support for menu management
-   Implement database storage (MongoDB, PostgreSQL)
-   Add authentication for admin operations
-   Improve search with filtering options