import '../styles/globals.css'
import Nav from '../components/nav'
import Footer from '../components/footer'
import React from 'react'
import Props from '../models/props'

export default function RootLayout({ children }: Props) {
	return (
		<html>
			<body>
				<Nav />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
