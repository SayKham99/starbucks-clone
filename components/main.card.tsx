import Image from 'next/legacy/image'
import Link from 'next/link'
import { Banners } from '../models/banners'
import { urlFor } from '../lib/client'

interface Props {
	banner: Banners
}

function MainCard({ banner }: Props) {
	return (
		<aside
			className='flex-between mb-4 w-full max-md:flex-col lg:mb-8'
			style={{ backgroundColor: banner.bg_color }}
		>
			<Image
				src={urlFor(banner.image).url()}
				width={+urlFor(banner.image).url().slice(-11, -8)}
				height={+urlFor(banner.image).url().slice(-7, -4)}
				alt={banner.title}
				className='md:min-w-1/2 max-md:w-full'
			/>
			<div className='py-10 text-center text-white max-md:w-full sm:w-full md:w-1/2'>
				<h1 className='mx-auto mb-[35px] w-2/3 font-bold sm:text-[35px] md:text-[50px]'>
					{banner.title}
				</h1>
				<p className='mx-auto mb-[35px] w-2/3 text-2xl font-medium'>
					{banner.description}
				</p>
				<Link href={banner.btn_url}>
					<button className='banner-btn'>{banner.btn_text}</button>
				</Link>
			</div>
		</aside>
	)
}

export default MainCard
