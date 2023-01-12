import { StaticImageData } from 'next/image'

export interface BannerType {
	id: number
	title: string
	description: string
	image: StaticImageData
	bg_color: string
	url: string
	btn_text: string
}
