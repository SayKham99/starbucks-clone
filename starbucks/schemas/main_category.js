export default {
	name: 'main_category',
	title: 'Main Category',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		}
	],
	preview: {
		select: {
			title: 'name'
		}
	}
}
