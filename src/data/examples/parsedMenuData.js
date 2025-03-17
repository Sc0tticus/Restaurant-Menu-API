// This file is here to simply document the transformation of unstructured data
// into structured data using the parsedMenu() function:

// Parsed Data Structure

[
	{
		id: 1,
		name: 'APPETIZERS',
		description: '',
		subcategories: [], // Empty for categories without subcategories
		items: [
			{
				id: '1-1', // First item in first category
				name: 'Iceberg Wedge Salad with House Cured Bacon',
				description: 'tomato salsa gorgonzola',
				price: 7.5,
				variations: [] // Empty array since this item has no variations
			},
			{
				id: '1-2',
				name: 'Sautéed Shredded Brussels Sprouts',
				description: 'bacon hazelnuts gorgonzola',
				price: 6.95,
				variations: []
			},
			{
				id: '1-3',
				name: 'Kale Salad',
				description: 'parmesan crisp corn radish garlic-lemon vinaigrette',
				price: 7.5,
				variations: []
			},
			{
				id: '1-4',
				name: 'Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto',
				description: 'grilled tomato salsa crostini',
				price: 6.95,
				variations: []
			},
			{
				id: '1-5',
				name: 'Chicken and Cabbage Eggrolls',
				description: 'hot & sour dipping sauce',
				price: 6.95,
				variations: []
			}
		],
		notes: undefined // No notes for this category
	},
	{
		id: 2,
		name: 'ENTREES',
		description: '',
		subcategories: [],
		items: [
			{
				id: '2-1',
				name: 'Farfalle Pasta with Braised Pork in Tomato Cream',
				description: 'capers butternut squash kale',
				price: 12.95,
				variations: []
			},
			{
				id: '2-2',
				name: 'Stout Braised Bratwusrt',
				description: 'horseradish mashed potatoes roasted root veggies grilled onion',
				price: 13.95,
				variations: []
			},
			{
				id: '2-3',
				name: 'Salmon & Crispy Tofu in Yellow Curry Sauce',
				description: 'vegetable sauté golden raisin chutney',
				price: 15.95,
				variations: []
			},
			{
				id: '2-4',
				name: 'Sesame Shrimp',
				description: 'udon noodles ramen broth shiitake mushrooms bean sprouts scallions',
				price: 13.95,
				variations: []
			}
		]
	},
	{
		id: 3,
		name: 'SANDWICHES',
		description: '',
		subcategories: [
			{
				id: '3-sub-1',
				name: 'COLD',
				description: '',
				items: [
					{
						id: '3-COLD-1',
						name: 'Turkey & Avocado',
						description: 'with tomato',
						price: 0, // Base price is 0 because it's defined by variations
						variations: [
							{
								id: '3-COLD-1-var-1',
								name: 'half sandwich', // Variation name
								price: 7.95 // Variation price
							},
							{
								id: '3-COLD-1-var-2',
								name: 'full sandwich',
								price: 9.25
							}
						]
					},
					{
						id: '3-COLD-2',
						name: 'Pub Club',
						description: 'turkey, bacon. lettuce, tomato',
						price: 0,
						variations: [
							{
								id: '3-COLD-2-var-1',
								name: 'half sandwich',
								price: 7.95
							},
							{
								id: '3-COLD-2-var-2',
								name: 'full sandwich',
								price: 9.25
							}
						]
					},
					{
						id: '3-COLD-3',
						name: 'Rare Roast Beef & Swiss',
						description: 'sweet-hot mustard, lettuce, red onion',
						price: 0,
						variations: [
							{
								id: '3-COLD-3-var-1',
								name: 'half sandwich',
								price: 7.95
							},
							{
								id: '3-COLD-3-var-2',
								name: 'full sandwich',
								price: 9.25
							}
						]
					},
					{
						id: '3-COLD-4',
						name: 'Veggie',
						description: 'pepper jack, avocado, sprout, tomato',
						price: 0,
						variations: [
							{
								id: '3-COLD-4-var-1',
								name: 'half sandwich',
								price: 7.95
							},
							{
								id: '3-COLD-4-var-2',
								name: 'full sandwich',
								price: 9.25
							}
						]
					}
				]
			},
			{
				id: '3-sub-2',
				name: 'HOT',
				description: '',
				items: [
					{
						id: '3-HOT-1',
						name: 'Southwest Chicken Breast',
						description: 'Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese',
						price: 9.5,
						variations: []
					},
					{
						id: '3-HOT-2',
						name: 'Portobello Fresh Mozzarella',
						description: 'Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli',
						price: 9.5,
						variations: []
					},
					{
						id: '3-HOT-3',
						name: 'Chipotle BBQ Pork Sandwich',
						description: 'with Pickled Jalapeño Slaw',
						price: 9.5,
						variations: []
					},
					{
						id: '3-HOT-4',
						name: 'Bacon Burger',
						description: 'Swiss, Lettuce, Tomato',
						price: 9.25,
						variations: []
					},
					{
						id: '3-HOT-5',
						name: 'Mexi Burger',
						description: 'Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole',
						price: 9.25,
						variations: []
					},
					{
						id: '3-HOT-6',
						name: 'Herb Marinated Top Sirloin',
						description:
							'Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Fococcia',
						price: 10.95,
						variations: []
					},
					{
						id: '3-HOT-7',
						name: 'Roast Beef with Ancho Au Jus',
						description: 'Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette',
						price: 9.75,
						variations: []
					},
					{
						id: '3-HOT-8',
						name: 'Blackened Catfish',
						description: 'Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough',
						price: 9.75,
						variations: []
					}
				]
			}
		],
		items: [], // No direct items on this category, all are in subcategories
		notes: [
			'Served with choice of house pasta salad, green salad, or fresh fruit. For an additional $1.50, you can "upgrade" (by substituting) to ½ pasta salad of the day, French onion soup or soup of the day.'
		]
	},
	{
		id: 4,
		name: 'SOUP & SALAD COMBOS',
		description: '',
		subcategories: [],
		items: [
			{
				id: '4-1',
				name: 'French Onion or Soup of the Day',
				description: '',
				price: 4.95,
				variations: []
			},
			{
				id: '4-2',
				name: 'French Onion or Soup of the Day Combos',
				description: '',
				price: 0, // Base price is 0 because it's defined by variations
				variations: [
					{
						id: '4-2-var-1',
						name: 'with small green salad, fresh fruit or house pasta',
						price: 7.25
					},
					{
						id: '4-2-var-2',
						name: 'with half pasta of the day',
						price: 8.75
					}
				]
			}
		]
	},
	{
		id: 5,
		name: 'FAJITAS',
		description: '',
		subcategories: [],
		items: [
			{
				id: '5-1',
				name: 'Chicken',
				description: 'Onions, Poblano and Bell Peppers, Guacamole, Two Salsas',
				price: 10.95,
				variations: []
			},
			{
				id: '5-2',
				name: 'Sirloin Steak',
				description: 'Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas',
				price: 10.95,
				variations: []
			}
		],
		notes: ['Served with red rice, black beans, grilled tomato salad, choice of corn or flour tortillas 10.95']
	},
	{
		id: 6,
		name: 'TACOS',
		description: '',
		subcategories: [],
		items: [
			{
				id: '6-1',
				name: 'Beer Battered Fish',
				description: 'with Jalapeño Remoulade, Roasted Salsa, Cabbage',
				price: 9.95,
				variations: []
			},
			{
				id: '6-2',
				name: 'Carne Asada',
				description: '(marinated sirloin) with Guacamole, Tomatillo Salsa',
				price: 9.95,
				variations: []
			},
			{
				id: '6-3',
				name: 'Citrus Marinated Chicken',
				description: 'with Guacamole, Tomatillo Salsa',
				price: 9.95,
				variations: []
			},
			{
				id: '6-4',
				name: 'Grilled Veggie',
				description: 'with Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa',
				price: 9.95,
				variations: []
			}
		],
		notes: ['Served with red rice, black beans, corn & romaine salad, tortilla chips 9.95']
	},
	{
		id: 7,
		name: 'ENCHILADAS',
		description: '',
		subcategories: [],
		items: [
			{
				id: '7-1',
				name: 'Choice of Beef, Chicken, Cheese or Veggie',
				description: '',
				price: 0, // Base price is 0 because it's defined by variations
				variations: [
					{
						id: '7-1-var-1',
						name: 'uno',
						price: 8.5
					},
					{
						id: '7-1-var-2',
						name: 'dos',
						price: 9.95
					},
					{
						id: '7-1-var-3',
						name: 'tres',
						price: 11.5
					}
				]
			},
			{
				id: '7-2',
				name: 'Chili Relleno',
				description: 'Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce',
				price: 9.95,
				variations: []
			},
			{
				id: '7-3',
				name: 'Pepita Crusted Salmon with Chipotle Glaze',
				description: 'chevre whipped yams, jicama slaw, tomatillo sauce',
				price: 10.95,
				variations: []
			}
		],
		notes: ['with Southwestern Succotash, Black Beans with Chipotle Crema']
	},
	{
		id: 8,
		name: 'QUICHE',
		description: '',
		subcategories: [],
		items: [
			{
				id: '8-1',
				name: 'Bacon, Swiss, Mushroom, Zucchini and Mushroom Quiche',
				description: 'Choice of Fresh Fruit or Green Salad',
				price: 8.95,
				variations: []
			}
		]
	},
	{
		id: 9,
		name: 'GREEN SALADS',
		description: '',
		subcategories: [],
		items: [
			{
				id: '9-1',
				name: 'Grilled Red Trout',
				description: 'Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette',
				price: 10.95,
				variations: []
			},
			{
				id: '9-2',
				name: 'Smoked Turkey',
				description: 'Cheese Tortellini, Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado',
				price: 9.95,
				variations: []
			},
			{
				id: '9-3',
				name: 'Asian Grilled Chicken',
				description:
					'Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing',
				price: 10.5,
				variations: []
			},
			{
				id: '9-4',
				name: 'Southwest Grilled Chicken',
				description:
					'Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette',
				price: 10.5,
				variations: []
			},
			{
				id: '9-5',
				name: 'Mediterranean',
				description:
					'Italian Sausage, Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette',
				price: 9.95,
				variations: []
			},
			{
				id: '9-6',
				name: 'Grilled Salmon',
				description: 'Artichoke tapenade, shredded kale, corn, radish, parmesan crisps',
				price: 11.5,
				variations: []
			}
		]
	}
];
