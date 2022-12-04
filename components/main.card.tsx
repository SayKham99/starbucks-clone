import Image from 'next/image'
import { BannerType } from '../typing'
import Link from 'next/link'

interface Props {
	data: BannerType
}

function MainCard({ data }: Props) {
	return (
		<aside
			className='flex-cs mb-4 w-full max-md:flex-col lg:mb-8'
			style={{ backgroundColor: data.bg_color }}
		>
			<Image
				src={data.image}
				alt={data.title}
				className='max-md:w-full md:w-1/2'
			/>
			<div className='py-10 text-center text-white max-md:w-full sm:w-full md:w-1/2'>
				<h1 className='mx-auto mb-[35px] w-2/3 font-bold sm:text-[35px] md:text-[50px]'>
					{data.title}
				</h1>
				<p className='mx-auto mb-[35px] w-2/3'>{data.description}</p>
				<Link href={data.url}>
					<button className='banner-btn'>{data.btn_text}</button>
				</Link>
			</div>
		</aside>
	)
}

export default MainCard
