import Link from 'next/link'

import Head from '../head'

import { Category } from '../../models/interface'

import {
	getDrinks,
	getFoods,
	getGift,
	getHome,
	getMerchandise
} from '../../utils/fetchs'

export default async function Page() {
	const foods: Category[] = await getFoods()
	const drinks: Category[] = await getDrinks()
	const homes: Category[] = await getHome()
	const merchs: Category[] = await getMerchandise()
	const gifts: Category[] = await getGift()

	return (
		<>
			<Head>
				<title>Menu: Starbucks Coffee Company-Clone</title>
			</Head>
			<aside className='w-full'>
				<h1 className='flex items-end font-bold capitalize text-neutral-400'>
					<p>menu</p>
				</h1>

				<h2 className='category-item-header'>Drinks</h2>
				<hr />
				<div className='category-item-wrapper'>
					{drinks.map(drink => (
						<Link
							className='category-item'
							key={drink.id}
							href={`menu/${drink.mc_slug}/${drink.slug}`}
						>
							<div className='flex-between gap-4'>
								<div className='image-wrapper'>
									<img src={drink.image?.asset.url} alt={drink.name} />
								</div>
								<p className='text-[19px] text-neutral-800'>{drink.name}</p>
							</div>
						</Link>
					))}
				</div>

				<h2 className='category-item-header'>Food</h2>
				<hr />
				<div className='category-item-wrapper'>
					{foods.map(food => (
						<Link
							className='category-item'
							key={food.id}
							href={`menu/${food.mc_slug}/${food.slug}`}
						>
							<div className='flex-between gap-4'>
								<div className='image-wrapper'>
									<img src={food.image?.asset.url} alt={food.name} />
								</div>
								<p className='text-[19px] text-neutral-800'>{food.name}</p>
							</div>
						</Link>
					))}
				</div>

				<h2 className='category-item-header'>At Home Coffee</h2>
				<hr />
				<div className='category-item-wrapper'>
					{homes.map(home => (
						<Link
							className='category-item'
							key={home.id}
							href={`menu/${home.mc_slug}/${home.slug}`}
						>
							<div className='flex-between gap-4'>
								<div className='image-wrapper'>
									<img src={home.image?.asset.url} alt={home.name} />
								</div>
								<p className='text-[19px] text-neutral-800'>{home.name}</p>
							</div>
						</Link>
					))}
				</div>

				<h2 className='category-item-header'>Merchandise</h2>
				<hr />
				<div className='category-item-wrapper'>
					{merchs.map(merch => (
						<Link
							className='category-item'
							key={merch.id}
							href={`menu/${merch.mc_slug}/${merch.slug}`}
						>
							<div className='flex-between gap-4'>
								<div className='image-wrapper'>
									<img src={merch.image?.asset.url} alt={merch.name} />
								</div>
								<p className='text-[19px] text-neutral-800'>{merch.name}</p>
							</div>
						</Link>
					))}
				</div>

				<h2 className='category-item-header'>Gift Cards</h2>
				<hr />
				<div className='category-item-wrapper'>
					{gifts.map(gift => (
						<Link
							className='category-item'
							key={gift.id}
							href={`menu/${gift.mc_slug}/${gift.slug}`}
						>
							<div className='flex-between gap-4'>
								<div className='image-wrapper'>
									<img src={gift.image?.asset.url} alt={gift.name} />
								</div>
								<p className='text-[19px] text-neutral-800'>{gift.name}</p>
							</div>
						</Link>
					))}
				</div>
			</aside>
		</>
	)
}
