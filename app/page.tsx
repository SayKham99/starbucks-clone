import Link from 'next/link'

import MainCard from '../components/main.card'
import Head from './head'

import { Banners } from '../models/interface'

import { getBanners } from '../utils/fetchs'

export default async function Home() {
	const banners: Banners[] = await getBanners()

	return (
		<>
			<Head>
				<title>Starbucks Coffee Company-Clone</title>
			</Head>
			<section>
				<div className='order mx-auto mb-16 flex max-w-[1440px] flex-col'>
					{banners.map(banner => (
						<MainCard key={banner._id} banner={banner} />
					))}
				</div>
				<div className='wrapper mb-[70px] w-2/3 text-center lg:w-1/2'>
					<p>
						*NO PURCHASE NECESSARY. Participating stores only. Starbucks
						partners (employees) are not eligible to win prizes. Ends 1/1/23. To
						play and for Official Rules, visit{' '}
						<Link
							className='underline hover:no-underline'
							href={'https://www.starbucksforlife.com/'}
						>
							https://www.starbucksforlife.com/.
						</Link>
					</p>
				</div>
			</section>
		</>
	)
}
