export default {
	name: 'middle_category',
	title: 'Middle Category',
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