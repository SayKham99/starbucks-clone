import { BannerType } from './typing'

import first from './assets/images/first.png'
import second from './assets/images/second.png'
import third from './assets/images/third.png'
import fourth from './assets/images/fourth.png'

export const banners: BannerType[] = [
	{
		id: 1,
		title: 'Starbucks for Life',
		description:
			'Everyone’s favorite holiday game is back. Play for your chance to win free drinks, gift cards and more. *',
		image: first,
		bg_color: '#1E3932',
		btn_text: 'Play now',
		url: 'https://www.starbucksforlife.com/?utm_medium=website&utm_source=sr&utm_campaign=sfl23_20221130&utm_content=web_banner_spot_1&utm_content=fw9'
	},
	{
		id: 2,
		title: 'Fa la la favorite',
		description:
			'Cheers to the Toasted White Chocolate Mocha with caramelized flavors and merry toppings.',
		image: second,
		bg_color: '#01B288',
		btn_text: 'Order now',
		url: 'https://www.starbucks.com/menu/product/2122482/hot'
	},
	{
		id: 3,
		title: 'Holi-yay treat',
		description:
			'Cuteness alert. Our Reindeer Cake Pop, coated in chocolaty icing, is sure to spark joy.',
		image: third,
		bg_color: '#D30031',
		btn_text: 'Order now',
		url: 'https://www.starbucks.com/menu/product/2123588/single'
	},
	{
		id: 4,
		title: 'Starbucks supports (RED)',
		description:
			'World AIDS Day is December 1. Since 2008, we have contributed $16M in donations to help fight AIDS with (RED).',
		image: fourth,
		bg_color: '#1E3932',
		btn_text: 'Learn more',
		url: 'https://www.red.org/partners/starbucks'
	}
]
