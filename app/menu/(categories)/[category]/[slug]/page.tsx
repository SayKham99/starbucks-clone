import { getProductsByCategory } from '../../../../../utils/fetchs'
import { Category } from '../../../../../models/interface'
import Head from '../../../../head'
import Link from 'next/link'

interface Props {
	params: {
		slug: string
	}
}

export default async function Page({ params }: Props) {
	const products: Category[] = await getProductsByCategory(
		params.slug.toString()
	)

	return (
		<>
			<Head>
				<title>At Home Coffee: Starbucks Coffee Company-Clone</title>
			</Head>
			<aside className='w-full'>
				<h1 className='text-[28px] font-bold'>Menu</h1>

				<h2 className='category-item-header'>Drinks</h2>
				<div className='product-item-wrapper'>
					{products.map(product => (
						<Link
							className='product-item'
							key={product.id}
							href={`${product.mc_slug}/${product.slug}`}
						>
							<div className='product-item-inner'>
								<div className='product-view-image'>
									<img src={product.image?.asset.url} alt={product.name} />
								</div>
								<p className='text-[19px] text-neutral-800'>{product.name}</p>
							</div>
						</Link>
					))}
				</div>
			</aside>
		</>
	)
}
