import MainCard from '../components/main.card'
import Head from './head'
import { banners } from '../banners'
import Link from 'next/link'

export default function Home() {
	return (
		<section>
			<Head>
				<title>Starbucks Coffee Company-Clone</title>
			</Head>
			<div className='order mx-auto mb-16 flex max-w-[1440px] flex-col'>
				{banners.map(banner => (
					<MainCard data={banner} />
				))}
			</div>
			<div className='wrapper w-2/3 text-center lg:w-1/2'>
				<p>
					*NO PURCHASE NECESSARY. Participating stores only. Starbucks partners
					(employees) are not eligible to win prizes. Ends 1/1/23. To play and
					for Official Rules, visit{' '}
					<Link
						className='underline hover:no-underline'
						href={'https://www.starbucksforlife.com/'}
					>
						https://www.starbucksforlife.com/
					</Link>{' '}
					.
				</p>
			</div>
		</section>
	)
}
