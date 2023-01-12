export default {
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 200, // will be ignored if slugify is set
				slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
			}
		},
		{
			name: 'customization',
			title: 'Customization',
			type: 'object',
			fields: [
				{
					name: 'flavors',
					title: 'Flavors',
					type: 'object',
					fields: [
						{
							name: 'syrups',
							title: 'Syrups',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'sauces',
							title: 'Sauces',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						}
					]
				},
				{
					name: 'toppings',
					title: 'Toppings',
					type: 'object',
					fields: [
						{
							name: 'topping_option',
							title: 'Topping Option',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'drizzle',
							title: 'Drizzle',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'cold_foam',
							title: 'Cold Foam',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'powders',
							title: 'Powders',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'whipped_cream',
							title: 'Whipped Cream',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						}
					]
				},
				{
					name: 'tea',
					title: 'Tea',
					type: 'object',
					fields: [
						{
							name: 'ingredient',
							title: 'Ingredient',
							type: 'array',
							of: [{ type: 'string' }]
						}
					]
				},
				{
					name: 'add_ins',
					title: 'Add-ins',
					type: 'object',
					fields: [
						{
							name: 'line_the_cup',
							title: 'Line the cup',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'room',
							title: 'Room',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'creamer',
							title: 'Creamer',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'water',
							title: 'Water',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'whipped_cream',
							title: 'Whipped Cream',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						}
					]
				},
				{
					name: 'sweeteners',
					title: 'Sweeteners',
					type: 'object',
					fields: [
						{
							name: 'sweetener_packets',
							title: 'Sweetener Packets',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'liquid_sweeteners',
							title: 'Liquid Sweeteners',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						}
					]
				},
				{
					name: 'espresso_shot_options',
					title: 'Espresso & Shot Options',
					type: 'object',
					fields: [
						{
							name: 'espresso_shots',
							title: 'Espresso Shots',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'espresso_roast_option',
							title: 'Espresso Roast Option',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'ristretto_or_long_shot',
							title: 'Ristretto or Long shot',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						}
					]
				},
				{
					name: 'milk',
					title: 'Milk',
					type: 'object',
					fields: [
						{
							name: 'milk_options',
							title: 'Milk Options',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'milk_foam',
							title: 'Milk Foam',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						},
						{
							name: 'milk_temperature',
							title: 'Milk Temperature',
							type: 'object',
							fields: [
								{
									name: 'ingredient',
									title: 'Ingredient',
									type: 'array',
									of: [{ type: 'string' }]
								}
							]
						}
					]
				}
			]
		},
		{
			name: 'ingredients',
			title: 'Ingredients',
			type: 'object',
			fields: [
				{ name: 'calories', title: 'Calories', type: 'number' },
				{ name: 'sugar', title: 'Sugar', type: 'number' },
				{ name: 'fat', title: 'Fat', type: 'number' }
			]
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'main_image',
			title: 'Main Image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'category',
			title: 'Category',
			type: 'reference',
			to: [{ type: 'category' }]
		},
		{
			name: 'middle_category',
			title: 'Middle Category',
			type: 'reference',
			to: [{ type: 'middle_category' }]
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string'
		}
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'category.name',
			media: 'image'
		}
	}
}
