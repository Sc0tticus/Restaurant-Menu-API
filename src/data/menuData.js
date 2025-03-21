import { parseMenu } from './menuDataUtilities.js';

// Raw menu data
const rawMenuData = `
Web Restaurant

-APPETIZERS-
Iceberg Wedge Salad with House Cured Bacon – tomato salsa gorgonzola 7.50
Sautéed Shredded Brussels Sprouts – bacon hazelnuts gorgonzola 6.95
Kale Salad – parmesan crisp corn radish garlic-lemon vinaigrette 7.50
Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto - grilled tomato salsa crostini 6.95
Chicken and Cabbage Eggrolls hot & sour dipping sauce 6.95
 
-ENTREES-
Farfalle Pasta with Braised Pork in Tomato Cream – capers butternut squash kale 12.95
Stout Braised Bratwusrt - horseradish mashed potatoes roasted root veggies grilled onion 13.95
Salmon & Crispy Tofu in Yellow Curry Sauce – vegetable sauté golden raisin chutney 15.95
Sesame Shrimp – udon noodles ramen broth shiitake mushrooms bean sprouts scallions 13.95
 
-SANDWICHES-
Served with choice of house pasta salad, green salad, or fresh fruit. For an additional $1.50, you can "upgrade" (by substituting) to ½ pasta salad of the day, French onion soup or soup of the day.
 
COLD
Choice of sourdough, whole wheat, or rye bread
half sandwich 7.95
full sandwich 9.25
Turkey & Avocado – with tomato
Pub Club – turkey, bacon. lettuce, tomato
Rare Roast Beef & Swiss – sweet-hot mustard, lettuce, red onion
Veggie – pepper jack, avocado, sprout, tomato
  
HOT
Choice of whole wheat or cheese & onion bun
Southwest Chicken Breast Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese 9.50
Portobello Fresh Mozzarella Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli 9.50
Chipotle BBQ Pork Sandwich with Pickled Jalapeño Slaw 9.50
Bacon Burger* Swiss, Lettuce, Tomato 9.25
Mexi Burger* Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole 9.25
Herb Marinated Top Sirloin* Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Fococcia 10.95
Roast Beef with Ancho Au Jus Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette 9.75
Blackened Catfish Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough 9.75
 
-SOUP & SALAD COMBOS-
French Onion or Soup of the Day 4.95
French Onion or Soup of the Day Combos
with small green salad, fresh fruit or house pasta 7.25
with half pasta of the day 8.75  
 
-FAJITAS-
Served with red rice, black beans, grilled tomato salad, choice of corn or flour tortillas 10.95
Chicken Onions, Poblano and Bell Peppers, Guacamole, Two Salsas
Sirloin Steak, Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas
 
-TACOS-
Served with red rice, black beans, corn & romaine salad, tortilla chips 9.95
Beer Battered Fish with Jalapeño Remoulade, Roasted Salsa, Cabbage
Carne Asada (marinated sirloin) with Guacamole, Tomatillo Salsa
Citrus Marinated Chicken with Guacamole, Tomatillo Salsa
Grilled Veggie with Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa
 
-ENCHILADAS-
with Southwestern Succotash, Black Beans with Chipotle Crema
Choice of Beef, Chicken, Cheese or Veggie
uno 8.50
dos 9.95
tres 11.50
 
Chili Relleno Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce 9.95
Pepita Crusted Salmon with Chipotle Glaze – chevre whipped yams, jicama slaw, tomatillo sauce 10.95
 
-QUICHE-
Bacon, Swiss, Mushroom, Zucchini and Mushroom Quiche Choice of Fresh Fruit or Green Salad 8.95
 
-GREEN SALADS-
Grilled Red Trout Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette 10.95
Smoked Turkey Cheese Tortellini, Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado 9.95
Asian Grilled Chicken Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing 10.50
Southwest Grilled Chicken Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette 10.50
Mediterranean Italian Sausage, Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette 9.95
Grilled Salmon Artichoke tapenade, shredded kale, corn, radish, parmesan crisps 11.50
`;

// Parse the menu data
const parsedMenu = parseMenu(rawMenuData);

// Define data access functions
export default {
	// Bind the methods to ensure 'this' works correctly in ES Module context
	categories: parsedMenu,

	getCategory(id) {
		return parsedMenu.find(c => c.id === parseInt(id));
	},

	getMenuItem(id) {
		// Handle both numeric and string IDs
		if (id.includes('-sub-')) {
			// Subcategory item
			const [catId, subToken, subId, itemIndex] = id.split('-');

			const category = this.getCategory(parseInt(catId));

			const subcategory = category?.subcategories.find(s => s.id.endsWith(`-${subToken}-${subId}`));

			return subcategory?.items[parseInt(itemIndex) - 1];
		} else if (id.includes('-')) {
			// Regular category item
			const [catId, itemIndex] = id.split('-');

			const category = this.getCategory(parseInt(catId));

			return category?.items[parseInt(itemIndex) - 1];
		}

		return null;
	},

	getAllMenuItems() {
		let allItems = [];

		// Get items directly in categories
		parsedMenu.forEach(category => {
			allItems = allItems.concat(category.items);

			// Get items in subcategories
			category.subcategories.forEach(subcategory => {
				allItems = allItems.concat(subcategory.items);
			});
		});

		return allItems;
	}
};
