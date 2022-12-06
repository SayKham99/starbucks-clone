export default {
	name: 'banners',
	title: 'Banners',
	type: 'document',
	fields: [
		{
			name: 'sort',
			title: 'Sort',
			type: 'number'
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string'
		},
		{
			name: 'btn_text',
			title: 'Button Text',
			type: 'string'
		},
		{
			name: 'btn_url',
			title: 'Button Url',
			type: 'string'
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
			name: 'bg_color',
			title: 'Banner background color',
			type: 'string'
		}
	],
	preview: {
		select: {
			title: 'title',
			media: 'image'
		}
	}
}
