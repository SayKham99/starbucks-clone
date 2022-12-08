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
	category: string
	name: string
	slug: string
	image: Image
}

export interface Props {
	children: React.ReactNode
}
