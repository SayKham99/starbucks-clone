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
	const products: Category[] = await getProductsByCategory(params.slug)

	console.log(products)

	return (
		<>
			<Head>
				<title>{`${products[0].category}: Starbucks Coffee Company-Clone`}</title>
			</Head>
			<aside className='w-full'>
				<h1 className='flex font-bold capitalize text-neutral-400'>
					<Link href={'/menu'}>Menu/ </Link>
					<p className='text-neutral-500'>{products[0].category}</p>
				</h1>

				<h2 className='category-item-header'>{products[0].category}</h2>
				<hr />
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
