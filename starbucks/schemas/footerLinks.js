export default {
	name: 'links',
	title: 'Footer Links',
	type: 'document',
	fields: [
		{
			title: 'About Us',
			name: 'about',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'title',
							title: 'About Text',
							type: 'string'
						},
						{
							name: 'link',
							title: 'Link',
							type: 'string'
						}
					]
				}
			]
		},
		{
			title: 'Careers',
			name: 'careers',
			type: 'array',
			of: [
				{
					name: 'link',
					type: 'object',
					fields: [
						{
							name: 'title',
							title: 'Careers Text',
							type: 'string'
						},
						{
							name: 'link',
							title: 'Link',
							type: 'string'
						}
					]
				}
			]
		},
		{
			title: 'Social Impact',
			name: 'social_impact',
			type: 'array',
			of: [
				{
					name: 'link',
					type: 'object',
					fields: [
						{
							name: 'title',
							title: 'Social Text',
							type: 'string'
						},
						{
							name: 'link',
							title: 'Link',
							type: 'string'
						}
					]
				}
			]
		},
		{
			title: 'For Business Partners',
			name: 'business',
			type: 'array',
			of: [
				{
					name: 'link',
					type: 'object',
					fields: [
						{
							name: 'title',
							title: 'Bussines Text',
							type: 'string'
						},
						{
							name: 'link',
							title: 'Link',
							type: 'string'
						}
					]
				}
			]
		},
		{
			title: 'Order and Pickup',
			name: 'order',
			type: 'array',
			of: [
				{
					name: 'link',
					type: 'object',
					fields: [
						{
							name: 'title',
							title: 'Order Text',
							type: 'string'
						},
						{
							name: 'link',
							title: 'Link',
							type: 'string'
						}
					]
				}
			]
		},
		{
			title: "Social Media's",
			name: 'social_medias',
			type: 'array',
			of: [
				{
					name: 'social_media',
					type: 'object',
					fields: [
						{
							name: 'Link',
							type: 'string'
						},
						{
							name: 'icon',
							title: 'Icon',
							type: 'image',
							options: {
								hotspot: true
							}
						}
					]
				}
			]
		},
		{
			title: 'Documents and Privacy',
			name: 'documents',
			type: 'array',
			of: [
				{
					name: 'document',
					type: 'object',
					fields: [
						{
							name: 'title',
							title: 'Document Text',
							type: 'string'
						},
						{
							name: 'links',
							title: 'Link',
							type: 'string'
						}
					]
				}
			]
		}
	],

	preview: {
		select: {
			title: 'Footer Links'
		}
	}
}
