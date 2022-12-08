import Nav from '../components/nav'
import Footer from '../components/footer'
import { AnalyticsWrapper } from '../components/Analytics'

import '../styles/globals.css'

import { Props } from '../models/interface'

export default function RootLayout({ children }: Props) {
	return (
		<html>
			<body>
				<Nav />
				<main>
					{children}
					<AnalyticsWrapper />
				</main>
				<Footer />
			</body>
		</html>
	)
}
