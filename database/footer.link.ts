import Spotify from '../assets/icons/spotify'
import Facebook from '../assets/icons/facebook'
import Pinterest from '../assets/icons/pinterest'
import Instagram from '../assets/icons/instagram'
import Youtube from '../assets/icons/youtube'
import Twitter from '../assets/icons/twitter'

interface Link {
	id: number
	title?: string
	icon?: JSX.Element
	link: string
}

export const aboutLinks: Link[] = [
	{
		id: 1,
		title: 'Our Company',
		link: 'our_company'
	},
	{
		id: 2,
		title: 'Our Coffee',
		link: 'our_coffee'
	},
	{
		id: 3,
		title: 'Stories and News',
		link: 'stories_and_news'
	},
	{
		id: 4,
		title: 'Starbucks Archive',
		link: 'starbucks_archive'
	},
	{
		id: 5,
		title: 'Investor Relations',
		link: 'investor_relations'
	},
	{
		id: 6,
		title: 'Customer Service',
		link: 'customer_service'
	}
]

export const careerLinks: Link[] = [
	{
		id: 1,
		title: 'Culture and Values',
		link: 'culture_and_values'
	},
	{
		id: 2,
		title: 'Inclusion, Diversity, and Equity',
		link: 'inclusion_diversity_and_equity'
	},
	{
		id: 3,
		title: 'College Achievement Plan',
		link: 'college_achievement_plan'
	},
	{
		id: 4,
		title: 'Alumni Community',
		link: 'alumni_community'
	},
	{
		id: 5,
		title: 'U.S. Careers',
		link: 'us_careers'
	},
	{
		id: 6,
		title: 'International Careers',
		link: 'international_careers'
	}
]

export const socialImapactLinks: Link[] = [
	{
		id: 1,
		title: 'People',
		link: 'people'
	},
	{
		id: 2,
		title: 'Planet',
		link: 'planet'
	},
	{
		id: 3,
		title: 'Environmental and Social Impact Reporting',
		link: 'environmental_and_social_impact_reporting'
	}
]

export const bussinessLinks: Link[] = [
	{
		id: 1,
		title: 'Landlord Support Center',
		link: 'landlord_support_center'
	},
	{
		id: 2,
		title: 'Suppliers',
		link: 'suppliers'
	},
	{
		id: 3,
		title: 'Corporate Gift Card Sales',
		link: 'corporate_gift_card_sales'
	},
	{
		id: 4,
		title: 'Office and Foodservice Coffee',
		link: 'office_and_foodservice_coffee'
	}
]

export const orderLinks: Link[] = [
	{
		id: 1,
		title: 'Order on the App',
		link: 'order_on_the_app'
	},
	{
		id: 2,
		title: 'Order on the Web',
		link: 'order_on_the_web'
	},
	{
		id: 3,
		title: 'Delivery',
		link: 'delivery'
	},
	{
		id: 4,
		title: 'Order and Pickup Options',
		link: 'order_and_pickup_options'
	}
]

export const socialMediaLink: Link[] = [
	{
		id: 1,
		icon: Spotify(),
		link: 'https://open.spotify.com/user/starbucks'
	},
	{
		id: 2,
		icon: Facebook(),
		link: 'https://facebook.com/starbucks'
	},
	{
		id: 3,
		icon: Pinterest(),
		link: 'https://www.pinterest.com/starbucks/'
	},
	{
		id: 4,
		icon: Instagram(),
		link: 'https://instagram.com/starbucks'
	},
	{
		id: 5,
		icon: Youtube(),
		link: 'https://www.youtube.com/starbucks'
	},
	{
		id: 6,
		icon: Twitter(),
		link: 'https://twitter.com/starbucks/'
	}
]

export const documentLinks: Link[] = [
	{
		id: 1,
		title: 'Privacy Policy',
		link: 'privacy_policy'
	},
	{
		id: 2,
		title: 'Terms of Use',
		link: 'terms_of_use'
	},
	{
		id: 3,
		title: 'CA Supply Chain Act',
		link: 'ca_supply_chain_act'
	},
	{
		id: 4,
		title: 'Cookie Preferences',
		link: 'cookie_preferences'
	}
]
