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
				const { id, name, image, ingredients, description } = data
				return (
					<div key={id}>
						<div className='mb-3 bg-[#1F3933] py-10'>
							<div className='wrapper flex w-auto items-center justify-start text-start max-md:flex-col max-md:justify-center max-md:space-y-8 max-md:space-x-0 max-md:text-center'>
								<img src={image.asset.url} alt={name} />
								<div className='w-[300px]'>
									<h1 className='mb-4 text-4xl font-bold text-white'>{name}</h1>
									<p className='text-2xl font-semibold text-neutral-300'>{`${ingredients.calories} calories`}</p>
								</div>
							</div>
						</div>
						<div className='bg-[#1F3933] py-10'>
							<div className='wrapper flex w-auto items-center justify-start text-gray-200 text-white max-md:flex-col max-md:justify-center max-md:space-y-8 max-md:space-x-0 max-md:text-center'>
								<div className='w-[300px] flex-col space-y-4'>
									<p className='inline-block cursor-pointer rounded-full border-[1px] border-amber-400 px-2.5 text-amber-400'>
										150🏅 Stars
									</p>
									<p>{description}</p>
									<span className='flex space-x-3'>
										<p>{`${ingredients.calories}g calories, ${ingredients.sugar}g sugar, ${ingredients.fat}g fat`}</p>
										<p className='inline-block cursor-pointer rounded-full border-[1px] border-black px-2.5 text-black '>
											i
										</p>
									</span>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}
