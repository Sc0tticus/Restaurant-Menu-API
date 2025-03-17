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

### Data Model

This API parses raw text menu data into a sophisticated hierarchical structure. The parser (parsedData()) transforms unstructured restaurant menu text into a normalized data model that preserves relationships between categories, subcategories, items, and their variations.

Below is a sample of the parsedMenu data structure:

```
[
  {
    id: 3,
    name: "SANDWICHES",
    description: "",
    subcategories: [
      {
        id: "3-sub-1",
        name: "COLD",
        description: "",
        items: [
          {
            id: "3-COLD-1",
            name: "Turkey & Avocado",
            description: "with tomato",
            price: 0, // Base price is 0 because it's defined by variations
            variations: [
              {
                id: "3-COLD-1-var-1",
                name: "half sandwich",
                price: 7.95
              },
              {
                id: "3-COLD-1-var-2",
                name: "full sandwich",
                price: 9.25
              }
            ]
          }
        ]
      }
    ],
    items: [],
    notes: [
      "Served with choice of house pasta salad, green salad, or fresh fruit. For an additional $1.50, you can \"upgrade\" (by substituting) to ½ pasta salad of the day, French onion soup or soup of the day."
    ]
  }
]
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