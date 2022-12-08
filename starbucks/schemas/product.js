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
