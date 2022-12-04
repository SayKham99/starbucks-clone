import Logo from '../assets/icons/logo'
import Link from 'next/link'
import Geo from '../assets/icons/geo'
import Menu from '../assets/icons/menu'

function Nav() {
	return (
		<nav>
			<div className='nav-wrapper'>
				<div className='flex-cs space-x-5'>
					<Link href={'/'}>
						<Logo />
					</Link>
					<ul className='flex-cs space-x-5 max-md:hidden'>
						<Link href={'menu'}>
							<li>Menu</li>
						</Link>
						<Link href={'/rewards'}>
							<li>Rewards</li>
						</Link>
						<Link href={'/gift-cards'}>
							<li>Gift Cards</li>
						</Link>
					</ul>
				</div>

				<div className='flex-cs space-x-5 max-md:hidden'>
					<Link
						href={'/store-locator'}
						className='flex-cs hover-green space-x-1.5'
					>
						<Geo />
						<p>Find a store</p>
					</Link>
					<Link href={'/account/signin'}>
						<button className='nav-btn bg-white hover:bg-neutral-300'>
							Sing In
						</button>
					</Link>
					<Link href={'/account/create'}>
						<button className='nav-btn bg-black text-white hover:bg-opacity-75'>
							Join now
						</button>
					</Link>
				</div>
				<div className='flex-cs rounded-full p-2 transition-colors hover:bg-neutral-100 md:hidden'>
					<Menu />
				</div>
			</div>
		</nav>
	)
}

export default Nav
