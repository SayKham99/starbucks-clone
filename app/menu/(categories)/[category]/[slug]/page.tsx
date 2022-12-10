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
	let data: any[] = []

	products.map(product => {
		data.indexOf(product.mc_category) === -1
			? data.push(product.mc_category)
			: ''
	})

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

				<h2 className='category-item-header'>{data[0]}</h2>
				<hr />
				<div className='product-item-wrapper'>
					{products.map(product => {
						return data[0] == product.mc_category ? (
							<>
								<Link
									className='product-item'
									key={product.id}
									href={`${product.mc_slug}/${product.slug}`}
								>
									<div className='product-item-inner'>
										<div className='product-view-image'>
											<img src={product.image?.asset.url} alt={product.name} />
										</div>
										<p className='text-[19px] text-neutral-800'>
											{product.name}
										</p>
									</div>
								</Link>
							</>
						) : (
							''
						)
					})}
				</div>
				<div className={`${data[1] == undefined ? 'hidden' : ''}`}>
					<h2 className='category-item-header'>{data[1]}</h2>
					<hr />
					<div className='product-item-wrapper'>
						{products.map(product => {
							return data[1] == product.mc_category ? (
								<>
									<Link
										className='product-item'
										key={product.id}
										href={`${product.mc_slug}/${product.slug}`}
									>
										<div className='product-item-inner'>
											<div className='product-view-image'>
												<img
													src={product.image?.asset.url}
													alt={product.name}
												/>
											</div>
											<p className='text-[19px] text-neutral-800'>
												{product.name}
											</p>
										</div>
									</Link>
								</>
							) : (
								''
							)
						})}
					</div>
				</div>
				<div className={`${data[2] == undefined ? 'hidden' : ''}`}>
					<h2 className='category-item-header'>{data[2]}</h2>
					<hr />
					<div className='product-item-wrapper'>
						{products.map(product => {
							return data[2] == product.mc_category ? (
								<>
									<Link
										className='product-item'
										key={product.id}
										href={`${product.mc_slug}/${product.slug}`}
									>
										<div className='product-item-inner'>
											<div className='product-view-image'>
												<img
													src={product.image?.asset.url}
													alt={product.name}
												/>
											</div>
											<p className='text-[19px] text-neutral-800'>
												{product.name}
											</p>
										</div>
									</Link>
								</>
							) : (
								''
							)
						})}
					</div>
				</div>
				<div className={`${data[3] == undefined ? 'hidden' : ''}`}>
					<h2 className='category-item-header'>{data[3]}</h2>
					<hr />
					<div className='product-item-wrapper'>
						{products.map(product => {
							return data[3] == product.mc_category ? (
								<>
									<Link
										className='product-item'
										key={product.id}
										href={`${product.mc_slug}/${product.slug}`}
									>
										<div className='product-item-inner'>
											<div className='product-view-image'>
												<img
													src={product.image?.asset.url}
													alt={product.name}
												/>
											</div>
											<p className='text-[19px] text-neutral-800'>
												{product.name}
											</p>
										</div>
									</Link>
								</>
							) : (
								''
							)
						})}
					</div>
				</div>
				<div className={`${data[4] == undefined ? 'hidden' : ''}`}>
					<h2 className='category-item-header'>{data[4]}</h2>
					<hr />
					<div className='product-item-wrapper'>
						{products.map(product => {
							return data[4] == product.mc_category ? (
								<>
									<Link
										className='product-item'
										key={product.id}
										href={`${product.mc_slug}/${product.slug}`}
									>
										<div className='product-item-inner'>
											<div className='product-view-image'>
												<img
													src={product.image?.asset.url}
													alt={product.name}
												/>
											</div>
											<p className='text-[19px] text-neutral-800'>
												{product.name}
											</p>
										</div>
									</Link>
								</>
							) : (
								''
							)
						})}
					</div>
				</div>
				<div className={`${data[5] == undefined ? 'hidden' : ''}`}>
					<h2 className='category-item-header'>{data[5]}</h2>
					<hr />
					<div className='product-item-wrapper'>
						{products.map(product => {
							return data[5] == product.mc_category ? (
								<>
									<Link
										className='product-item'
										key={product.id}
										href={`${product.mc_slug}/${product.slug}`}
									>
										<div className='product-item-inner'>
											<div className='product-view-image'>
												<img
													src={product.image?.asset.url}
													alt={product.name}
												/>
											</div>
											<p className='text-[19px] text-neutral-800'>
												{product.name}
											</p>
										</div>
									</Link>
								</>
							) : (
								''
							)
						})}
					</div>
				</div>
				<div className={`${data[6] == undefined ? 'hidden' : ''}`}>
					<h2 className='category-item-header'>{data[6]}</h2>
					<hr />
					<div className='product-item-wrapper'>
						{products.map(product => {
							return data[6] == product.mc_category ? (
								<>
									<Link
										className='product-item'
										key={product.id}
										href={`${product.mc_slug}/${product.slug}`}
									>
										<div className='product-item-inner'>
											<div className='product-view-image'>
												<img
													src={product.image?.asset.url}
													alt={product.name}
												/>
											</div>
											<p className='text-[19px] text-neutral-800'>
												{product.name}
											</p>
										</div>
									</Link>
								</>
							) : (
								''
							)
						})}
					</div>
				</div>
				<div className={`${data[7] == undefined ? 'hidden' : ''}`}>
					<h2 className='category-item-header'>{data[7]}</h2>
					<hr />
					<div className='product-item-wrapper'>
						{products.map(product => {
							return data[7] == product.mc_category ? (
								<>
									<Link
										className='product-item'
										key={product.id}
										href={`${product.mc_slug}/${product.slug}`}
									>
										<div className='product-item-inner'>
											<div className='product-view-image'>
												<img
													src={product.image?.asset.url}
													alt={product.name}
												/>
											</div>
											<p className='text-[19px] text-neutral-800'>
												{product.name}
											</p>
										</div>
									</Link>
								</>
							) : (
								''
							)
						})}
					</div>
				</div>
				<div className={`${data[8] == undefined ? 'hidden' : ''}`}>
					<h2 className='category-item-header'>{data[8]}</h2>
					<hr />
					<div className='product-item-wrapper'>
						{products.map(product => {
							return data[8] == product.mc_category ? (
								<>
									<Link
										className='product-item'
										key={product.id}
										href={`${product.mc_slug}/${product.slug}`}
									>
										<div className='product-item-inner'>
											<div className='product-view-image'>
												<img
													src={product.image?.asset.url}
													alt={product.name}
												/>
											</div>
											<p className='text-[19px] text-neutral-800'>
												{product.name}
											</p>
										</div>
									</Link>
								</>
							) : (
								''
							)
						})}
					</div>
				</div>
				<div className={`${data[9] == undefined ? 'hidden' : ''}`}>
					<h2 className='category-item-header'>{data[9]}</h2>
					<hr />
					<div className='product-item-wrapper'>
						{products.map(product => {
							return data[9] == product.mc_category ? (
								<>
									<Link
										className='product-item'
										key={product.id}
										href={`${product.mc_slug}/${product.slug}`}
									>
										<div className='product-item-inner'>
											<div className='product-view-image'>
												<img
													src={product.image?.asset.url}
													alt={product.name}
												/>
											</div>
											<p className='text-[19px] text-neutral-800'>
												{product.name}
											</p>
										</div>
									</Link>
								</>
							) : (
								''
							)
						})}
					</div>
				</div>
			</aside>
		</>
	)
}
