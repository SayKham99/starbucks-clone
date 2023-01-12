import React from 'react'

export interface Banners {
	_id: string
	btn_text: string
	btn_url: string
	description: string
	image: Image
	title: string
	bg_color: string
	sort: number
}

export interface Image {
	asset: Asset
}

export interface Asset {
	url: string
}

export interface Category {
	id: string
	description: string
	category: string
	name: string
	slug: string
	image: Image
	mc_slug: string
	mc_category: string
	ingredients: {
		calories: number
		fat: number
		sugar: number
	}
}

export interface Props {
	children: React.ReactNode
}
