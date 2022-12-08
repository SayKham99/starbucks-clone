export default {
	name: 'category',
	title: 'Category',
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
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			title: 'Main Category',
			name: 'main_category',
			type: 'reference',
			to: [{ type: 'main_category' }]
		}
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'main_category.name',
			media: 'image'
		}
	}
}
