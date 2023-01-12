import Logo from '../assets/icons/logo'
import Geo from '../assets/icons/geo'
import Menu from '../assets/icons/menu'

import Link from 'next/link'

function Nav() {
	return (
		<nav>
			<div className='nav-wrapper'>
				<div className='flex-between space-x-5'>
					<Link href={'/'}>
						<Logo />
					</Link>
					<ul className='flex-between space-x-5 max-md:hidden'>
						<Link href={'/'}>
							<li>Menu</li>
						</Link>
						<Link href={'/'}>
							<li>Rewards</li>
						</Link>
						<Link href={'/'}>
							<li>Gift Cards</li>
						</Link>
					</ul>
				</div>

				<div className='flex-between space-x-5 max-md:hidden'>
					<Link href={'/'} className='flex-between hover-green space-x-1.5'>
						<Geo />
						<p>Find a store</p>
					</Link>
					<Link href={'/'}>
						<button className='nav-btn bg-white hover:bg-neutral-300'>
							Sing In
						</button>
					</Link>
					<Link href={'/'}>
						<button className='nav-btn bg-black text-white hover:bg-opacity-75'>
							Join now
						</button>
					</Link>
				</div>
				<div className='flex-between rounded-full p-2 transition-colors hover:bg-neutral-100 md:hidden'>
					<Menu />
				</div>
			</div>
		</nav>
	)
}

export default Nav
