import '../styles/globals.css'
import Nav from '../components/nav'
import Footer from '../components/footer'
import React from 'react'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
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
