import { Category } from '../../../../../models/interface'
import { getProductsById } from '../../../../../utils/fetchs'

interface Props {
	params: {
		slug: string
	}
}

export default async function Page({ params }: Props) {
	const product: Category[] = await getProductsById(params.slug)

	return (
		<>
			{product.map(data => {
				const { id, name, image, ingredients } = data
				return (
					<div key={id}>
						<div className='bg-[#1F3933] py-10'>
							<div className='wrapper flex w-auto items-center justify-start text-start max-md:flex-col max-md:justify-center max-md:space-y-8 max-md:space-x-0 max-md:text-center'>
								<img src={image.asset.url} alt={name} />
								<div className='w-[300px]'>
									<h1 className='mb-4 text-4xl font-bold text-white'>{name}</h1>
									<p className='text-2xl font-semibold text-neutral-300'>{`${ingredients.calories} calories`}</p>
								</div>
							</div>
						</div>
						<div></div>
					</div>
				)
			})}
		</>
	)
}
