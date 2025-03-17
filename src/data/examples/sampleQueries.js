// Sample queries against the menu data structure

// Get all sandwich variations
const coldSandwiches = parsedMenu
	.find(cat => cat.name === 'SANDWICHES')
	.subcategories.find(sub => sub.name === 'COLD')
	.items.flatMap(item => item.variations);

// Find items by price range
const affordableAppetizers = parsedMenu.find(cat => cat.name === 'APPETIZERS').items.filter(item => item.price < 7.0);

// Get all notes across categories
const allNotes = parsedMenu.filter(cat => cat.notes && cat.notes.length > 0).flatMap(cat => cat.notes);
