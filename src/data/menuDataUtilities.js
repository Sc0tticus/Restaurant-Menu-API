/**
 * Utility functions for parsing restaurant menu data
 */

// Function to parse the raw menu text into structured data
export const parseMenu = rawData => {

	const categories = [];

	let currentCategory = null;
	let currentSubcategory = null;
	let notes = null;

	// Split by lines and filter empty lines
	const lines = rawData
		.split('\n')
		.map(line => line.trim())
		.filter(line => line !== '');

	// Exclude restaurant name
	const menuLines = lines.filter(line => !line.includes('Web Restaurant'));

	for (let i = 0; i < menuLines.length; i++) {

		const line = menuLines[i];

		// Check if this is a category header
		if (line.startsWith('-') && line.endsWith('-')) {

			const categoryName = line.replace(/-/g, '').trim();

			currentCategory = {
				id: categories.length + 1,
				name: categoryName,
				description: '',
				subcategories: [],
				items: []
			};

			categories.push(currentCategory);

			currentSubcategory = null;
			notes = null;

			continue;
		}

		// Check if this is a subcategory (e.g., COLD, HOT)
		if ((currentCategory && line === 'COLD') || line === 'HOT') {

			currentSubcategory = {
				id: `${currentCategory.id}-sub-${currentCategory.subcategories.length + 1}`,
				name: line,
				description: '',
				items: []
			};

			currentCategory.subcategories.push(currentSubcategory);

			continue;
		}

		// Check if this is a note
		if (
			currentCategory &&
			(line.startsWith('Served with') || line.startsWith('Choice of') || line.includes('additional'))
		) {
			if (!currentCategory.notes) {
				currentCategory.notes = [];
			}

			currentCategory.notes.push(line);

			continue;
		}

		// Try to parse as menu item
		if (currentCategory) {
			// Check for variant pricing like "half sandwich 7.95" or "uno 8.50"

			if (line.match(/^(half|full|uno|dos|tres)/i) && line.match(/\d+\.\d+$/)) {
				const parts = line.split(' ');
				const price = parseFloat(parts[parts.length - 1]);
				const variation = parts.slice(0, -1).join(' ');

				// Add variation to the most recently added item
				const targetArray = currentSubcategory ? currentSubcategory.items : currentCategory.items;

				if (targetArray.length > 0) {
					const lastItem = targetArray[targetArray.length - 1];

					if (!lastItem.variations) {
						lastItem.variations = [];
					}

					lastItem.variations.push({
						id: `${lastItem.id}-var-${lastItem.variations.length + 1}`,
						name: variation,
						price
					});
				}

				continue;
			}

			// Regular item with price at the end
			const priceMatch = line.match(/\d+\.\d+$/);

			if (priceMatch) {

				const price = parseFloat(priceMatch[0]);

				const nameAndDesc = line.substring(0, line.lastIndexOf(priceMatch[0])).trim();

				// Split name and description
				let name, description;

				if (nameAndDesc.includes('–')) {

					const parts = nameAndDesc.split('–');

					name = parts[0].trim();

					description = parts.slice(1).join('–').trim();

				} else if (nameAndDesc.includes('-')) {

					const parts = nameAndDesc.split('-');

					name = parts[0].trim();

					description = parts.slice(1).join('-').trim();

				} else {
					// Try to intelligently split when there's no dash
					const words = nameAndDesc.split(' ');

					if (words.length > 5) {
						// Assume first 3-5 words are the name
						name = words.slice(0, 4).join(' ');

						description = words.slice(4).join(' ');

					} else {

						name = nameAndDesc;

						description = '';
					}
				}

				// Create the menu item
				const item = {
					id: currentSubcategory
						? `${currentCategory.id}-${currentSubcategory.name}-${currentSubcategory.items.length + 1}`
						: `${currentCategory.id}-${currentCategory.items.length + 1}`,
					name,
					description,
					price,
					variations: []
				};

				// Add to the appropriate array
				if (currentSubcategory) {
					currentSubcategory.items.push(item);
				} else {
					currentCategory.items.push(item);
				}

				continue;
			}

			// Handle items without prices that are likely part of a variant pricing structure
			if (!priceMatch && currentCategory.name === 'SANDWICHES' && currentSubcategory) {

				const item = {
					id: `${currentCategory.id}-${currentSubcategory.name}-${currentSubcategory.items.length + 1}`,
					name: line,
					description: '',
					price: 0, // Will be defined by variations
					variations: []
				};
				
				currentSubcategory.items.push(item);
			}
		}
	}

	return categories;
};
