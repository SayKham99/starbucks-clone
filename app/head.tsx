import React from 'react'

interface Props {
	children: React.ReactNode
}

export default function Head({ children }: Props) {
	return (
		<>
			{children}
			<meta content='width=device-width, initial-scale=1' name='viewport' />
			<link rel='icon' href='/favicon.ico' />
		</>
	)
}
