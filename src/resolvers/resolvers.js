const menuData = require('../data/menuData');

const resolvers = {
	Query: {
		categories: () => menuData.categories,

		category: (_, { id }) => menuData.getCategory(parseInt(id)),

		menuItem: (_, { id }) => menuData.getMenuItem(id),

		menuItems: () => menuData.getAllMenuItems(),

		menuItemsByCategory: (_, { categoryId }) => {
			const category = menuData.getCategory(parseInt(categoryId));
			if (!category) return [];

			let items = [...category.items];

			// Include items from subcategories
			category.subcategories.forEach(subcategory => {
				items = items.concat(subcategory.items);
			});

			return items;
		},

		search: (_, { term }) => {
			const searchTerm = term.toLowerCase();
			return menuData
				.getAllMenuItems()
				.filter(
					item =>
						item.name.toLowerCase().includes(searchTerm) ||
						(item.description && item.description.toLowerCase().includes(searchTerm))
				);
		}
	},

	MenuItem: {
		category: parent => {
			// Extract category ID from item ID
			const catId = parent.id.split('-')[0];
			return menuData.getCategory(parseInt(catId));
		}
	},

	Category: {
		// Ensure subcategories is always an array even if not defined
		subcategories: parent => parent.subcategories || []
	}
};

module.exports = resolvers;
