import Link from 'next/link'
import {
	aboutLinks,
	careerLinks,
	bussinessLinks,
	orderLinks,
	socialImapactLinks,
	socialMediaLink,
	documentLinks
} from '../database/footer.link'

function Footer() {
	return (
		<footer>
			<div className='wrapper'>
				<div className='footer-wrapper'>
					<ol className='footer-item'>
						<li className='footer-item-header'>About Us</li>
						{aboutLinks.map(link => (
							<Link key={link.id} href={link.link}>
								<li>{link.title}</li>
							</Link>
						))}
					</ol>
					<ol className='footer-item'>
						<li className='footer-item-header'>Careers</li>
						{careerLinks.map(link => (
							<Link key={link.id} href={link.link}>
								<li>{link.title}</li>
							</Link>
						))}
					</ol>
					<ol className='footer-item'>
						<li className='footer-item-header'>Social Impact</li>
						{socialImapactLinks.map(link => (
							<Link key={link.id} href={link.link}>
								<li>{link.title}</li>
							</Link>
						))}
					</ol>
					<ol className='footer-item'>
						<li className='footer-item-header'>For Business Partners</li>
						{bussinessLinks.map(link => (
							<Link key={link.id} href={link.link}>
								<li>{link.title}</li>
							</Link>
						))}
					</ol>
					<ol className='footer-item'>
						<li className='footer-item-header'>Order and Pickup</li>
						{orderLinks.map(link => (
							<Link key={link.id} href={link.link}>
								<li>{link.title}</li>
							</Link>
						))}
					</ol>
				</div>
				<hr />
				<div className='flex flex-wrap gap-4 px-4 md:flex-col'>
					<div className='flex space-x-4 py-4'>
						{socialMediaLink.map(social => (
							<Link key={social.id} href={social.link}>
								{social.icon}
							</Link>
						))}
					</div>
					<div className='flex flex-wrap gap-x-4'>
						{documentLinks.map(social => (
							<Link key={social.id} href={social.link}>
								{social.title}
							</Link>
						))}
					</div>
					<p className='opacity-75'>
						© 2022 Starbucks Coffee Company. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
