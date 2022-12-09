export default {
	name: 'main_category',
	title: 'Main Category',
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
		}
	],
	preview: {
		select: {
			title: 'name'
		}
	}
}
