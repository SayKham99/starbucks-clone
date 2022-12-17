import '../../../styles/globals.css'

import { Category, Props } from '../../../models/interface'

import {
	getDrinks,
	getFoods,
	getGift,
	getHome,
	getMerchandise
} from '../../../utils/fetchs'
import Link from 'next/link'

export default async function MenuLayout({ children }: Props) {
	const foods: Category[] = await getFoods()
	const drinks: Category[] = await getDrinks()
	const homes: Category[] = await getHome()
	const merchs: Category[] = await getMerchandise()
	const gifts: Category[] = await getGift()

	return (
		<div className='wrapper flex gap-x-4 py-16 px-4'>
			<div className='max-lg:hidden'>
				<ol className='menu-item'>
					<li className='menu-item-header'>Drinks</li>
					{drinks.map(drink => (
						<Link key={drink.id} href={`menu/${drink.mc_slug}/${drink.slug}`}>
							<li>{drink.name}</li>
						</Link>
					))}
				</ol>
				<ol className='menu-item'>
					<li className='menu-item-header'>Foods</li>
					{foods.map(food => (
						<Link key={food.id} href={`menu/${food.mc_slug}/${food.slug}`}>
							<li>{food.name}</li>
						</Link>
					))}
				</ol>
				<ol className='menu-item'>
					<li className='menu-item-header'>At Home Coffee</li>
					{homes.map(home => (
						<Link key={home.id} href={`menu/${home.mc_slug}/${home.slug}`}>
							<li>{home.name}</li>
						</Link>
					))}
				</ol>
				<ol className='menu-item'>
					<li className='menu-item-header'>Merchandise</li>
					{merchs.map(merch => (
						<Link key={merch.id} href={`menu/${merch.mc_slug}/${merch.slug}`}>
							<li>{merch.name}</li>
						</Link>
					))}
				</ol>
				<ol className='menu-item'>
					<li className='menu-item-header'>Gift Cards</li>
					{gifts.map(gift => (
						<Link key={gift.id} href={`menu/${gift.mc_slug}/${gift.slug}`}>
							<li>{gift.name}</li>
						</Link>
					))}
				</ol>
			</div>
			<div className='w-full'>{children}</div>
		</div>
	)
}
